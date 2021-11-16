import { requestXHR } from './library'

const max_year = 2019;
const max_range = 7;
const domain = `http://www.commontown.com`;
const api_domain = `${domain}/news/`;
const key = 'j1FNN565hj2kj12h3hEF12hj312hj3123123ss012CCQ831023';

const regex = /\{.*?\}/gi;               // Pinit
const mh2 = /(?!>)([^><]+)(?=<\/h2>)/gm; // Manual
const timg = /\(\/qws\/.*?\.(?:jpg|gif|png|PNG|JPG|JPEG|gif|GIF)/gm;
const aHref = /\/news.*?(?=")/g;

export const getNews = async () => {

    let news = [];
    let year = max_year;
    let step_down = 0;
    let news_api_endpoints = [];

    while (step_down < max_range) {
        let year = max_year - step_down;
        let api_endpoint = `${api_domain}${year}&output=json&key=${key}`;

        news_api_endpoints.push(callToApi(api_endpoint));

        step_down++;
    }

    await Promise.all(news_api_endpoints)
        .then(res => {
            let all_res = Object.values(res);
            all_res.forEach((contents_object, index) => {
                let contents = Object.values(contents_object);
                let year = max_year - index;
                let items = [];

                // Filter pinit
                let filtererd_contents = contents.filter(c => c.description.indexOf('[CDATA[') > -1);
                filtererd_contents.forEach(c => {
                    const { description } = c;
                    let pinits = [...description.match(regex)].map(i => JSON.parse(i));
                    pinits.forEach(i => {
                        let { title, caption, picture, linkurl } = i;
                        title = title.trim();
                        picture = `${domain}${picture.trim()}`;

                        let link = linkurl

                        items.push({
                            type: year,
                            name: title,
                            description: caption,
                            cover: picture,
                            hover: picture,
                            link,
                        });
                    })
                });

                if (filtererd_contents.length === 0) {
                    filtererd_contents = contents.filter(c => c.description.indexOf('proj-item') > -1);
                    // Either empty / old content coded in html
                    // console.log('older filtererd_contents', filtererd_contents);

                    filtererd_contents.forEach(c => {
                        const { description } = c;

                        let titles = description.split('<br>').join('').match(mh2);
                        let images = description.match(timg).map(i => {
                            i = i.indexOf('(') === 0 ? i.replace('(', '') : i;
                            return `${domain}${i}`;
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
                        }
                    })
                }

                // Populate details
                items.forEach((i, index) => {
                    const api_point = `${domain}${i.link}?output=json&key=${key}`;
                    const pcontent = requestXHR(api_point);
                    pcontent.then(res => {
                        let { label, description } = res.pagetree.item;

                        description = description.split('/qws').join(`${domain}/qws`);
                        description = description.split('http:').join('https:');

                        let segment = Object.values(res.pagetree.item.segment);
                        let section = [{ label, description }];
                        segment.forEach(s => {
                            let { label, description } = s;

                            description = description.split('/qws').join(`${domain}/qws`);
                            description = description.split('http:').join('https:');
                            section.push({ label, description });
                        })

                        items[index]['sections'] = section;
                    });
                });


                news.push({
                    title: year,
                    to: `/news/${year}`,
                    items
                })

            }); // End Foreach
        });

    console.clear();
    console.log('asd', news);
    return news;
}

const callToApi = async api_endpoint => {
    const request = await requestXHR(api_endpoint);
    if ('pagetree' in request) return request.pagetree.item.segment;
    else return null;
}