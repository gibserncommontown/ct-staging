exports.createPages = async ({ actions }) => {
    let site_tree = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about-us/" },
        { title: "Key Achievements", url: "/about-us/key-achievements/" },
        { title: "Board Members", url: "/about-us/board-members/" },
        { title: "Our Culture", url: "/about-us/our-culture/" },
        { title: "Story of Shimmer Art", url: "/about-us/our-culture/story-of-shimmer-art/" },
        { title: "Products", url: "/products/" },
        { title: "Swiiit", url: "/products/swiiit/" },
        { title: "CommonAcademy", url: "/products/commonacademy/" },
        { title: "Qoqolo", url: "/products/qoqolo/" },
        { title: "Dudu", url: "/products/dudu/" },
        { title: "Vatitude", url: "/products/vatitude/" },
        { title: "News", url: "/news/" },
    ]


    const { createPage } = actions;
    let year_max = 2020;
    let year_min = 2014;
    let all_news = [];
    let all_posts = [];

    for (let i = year_max; i >= year_min; i--) {
        let year_news = await getNews(i);
        all_news.push(year_news);
    }

    const tabdata = all_news.map(an => ({ title: an.title, to: an.to }));
    const crumbs = [{ text: "News", to: "/news" }]

    if (all_news.length > 0) {
        let { to, title, items } = all_news[0];
        let tabcontent = items.length > 0 ? items : [];
        let l_crumbs = [...crumbs, { text: title, to }]

        createPage({
            path: '/news', // Remove first backslash
            component: require.resolve(`./src/templates/listing.js`),
            context: {
                l_crumbs,
                tabdata,
                tabcontent,
                year: title,
            }
        })
    } // End If

    all_news.forEach(node => {
        let { to, title, items } = node;
        let tabcontent = items.length > 0 ? items : [];
        let l_crumbs = [...crumbs, { text: title, to: `/news/${title}` }]

        site_tree.push({ title, url: `/news/${title}` })

        // Listing
        createPage({
            path: to, // Remove first backslash
            component: require.resolve(`./src/templates/listing.js`),
            context: {
                l_crumbs,
                tabdata,
                tabcontent,
                year: title,
            }
        })

        all_posts = [].concat(all_posts, items);
    }) // ForEach

    for (let i = 0; i < all_posts.length; i++) {
        let post = all_posts[i];
        let year = post.type;
        let link = post.link;
        let name = post.name;
        let sections = await getNewsSections(year, link);
        let d_crumbs = [
            ...crumbs,
            { text: `${year}`, to: `/news/${year}` },
            { text: name, to: link }
        ];

        let aside_items = all_posts
            .filter(p => p.type === year)
            .map(n => ({
                title: n.name,
                to: n.link,
                child: []
            }))


        if (sections.length > 0) {
            createPage({
                path: link,
                component: require.resolve(`./src/templates/article.js`),
                context: {
                    name,
                    sections,
                    d_crumbs,
                    aside_items,
                }
            }) // createPage
        }


    }


    site_tree = [].concat(site_tree, [
        { title: "Showcase", url: "/showcase/" },
        { title: "CommonAcademy", url: "/showcase/commonacademy/" },
        { title: "Qoqolo", url: "/showcase/qoqolo/" },
        { title: "Swiiit", url: "/showcase/swiiit/" },
        { title: "Eldercare", url: "/showcase/eldercare/" },
        { title: "Career", url: "/career/" },
        { title: "Contact Us", url: "/contact-us/" },
    ])

    createPage({
        path: '/sitemap',
        component: require.resolve(`./src/templates/sitemap.js`),
        context: {
            site_tree
        }
    })
}


exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/news/)) {
        page.matchPath = "/news/*"

        createPage(page)
    }
}

const
    axios = require('axios'),
    domain = `https://commontown3.commonwork.net`,
    news_endpoint = `${domain}`,
    key = 'j1FNN565hj2kj12h3hEF12hj312hj3123123ss012CCQ831023',
    get = async (year, slug = '') => {
        let endpoint = news_endpoint + year + slug + `?key=${key}&output=json`;
        let respond = null;
        let have_error = false;
        try {
            respond = await axios.get(endpoint);
        }
        catch (err) {
            have_error = true;
            console.log(endpoint, err.response.status);
        }
        finally {
            return have_error ? null : respond;
        }

    }


const regex = /\{.*?\}/gi;               // Pinit
const mh2 = /(?!>)([^><]+)(?=<\/h2>)/gm; // Manual
const timg = /\(\/qws\/.*?\.(?:jpg|gif|png|PNG|JPG|JPEG|gif|GIF)/gm;
const aHref = /\/news.*?(?=")/g;

async function getNews(year = 0) {

    if (year === 0) return null;

    const response = await get(`/news/${year}`);

    if (!('pagetree' in response.data) || response.status !== 200) return null;
    let { segment } = response.data.pagetree.item;
    let items = [];

    segment = Object.values(segment);
    let pinits = segment.filter(s => s.description.indexOf('[CDATA[') > -1);

    if (pinits.length > 0) { // Pin It (Newer data)
        pinits.forEach(pinit => {
            let { description } = pinit;
            let data = [...description.match(regex)].map(i => JSON.parse(i));
            data.forEach(i => {
                let { title, caption, picture, linkurl } = i;
                title = title.trim();
                picture = domain + picture.trim();

                items.push({
                    type: year,
                    name: title,
                    description: caption,
                    cover: picture,
                    hover: picture,
                    link: linkurl
                })
            })

        });
    } else { // Htmls (old data)
        let htmls = segment.filter(s => s.description.indexOf('proj-item') > -1);
        htmls.forEach(html => {
            const { description } = html;

            let titles = description.split('<br>').join('').match(mh2);
            let images = description.match(timg).map(i => {
                i = i.indexOf('(') === 0 ? i.replace('(', '') : i;
                return domain + i;
            });
            let links = description.match(aHref).map(a => `${domain}${a.replace('href="', '').replace('"', '')}`);

            if (titles.length === images.length && images.length === links.length) {
                items = titles.map((t, index) => {
                    let title = t.trim();
                    let img = images[index];
                    img = img.trim();

                    let link = links[index].replace(domain, '');

                    return {
                        type: year,
                        name: title,
                        cover: img,
                        hover: img,
                        description: '',
                        link
                    }
                })
            } // End If

        })
    }

    let value = {
        title: `${year}`,
        to: `/news/${year}`,
        items,
    }

    return value;
}

async function getNewsSections(year, link) {
    //let post = await get(year, link.replace(`/news/${year}`, ''));
    let post = await get('', link);
    if (post === null) return [];

    let { label, description } = post.data.pagetree.item;

    description = description.split('/qws').join(`${domain}/qws`);
    // description = description.split('http:').join('https:');


    let sections = [{ label, description }];
    let { segment } = post.data.pagetree.item;
    segment = Object.values(segment);

    return [].concat(sections, segment.map(s => ({ label: s.label, description: s.description })));
}