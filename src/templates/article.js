import React from "react"
import Sub from '~layout/sub'
import "./css/news.min.css"

const Article = props => {
    const { name, sections, aside_items, d_crumbs } = props.pageContext;

    const content = sections.map(({ label, description }) => {
        const n_description = description.split('"/qws').join('"https://commontown3.commonwork.net/qws')

        return <div className="article-area"><h2>{label}</h2><div dangerouslySetInnerHTML={{ __html: n_description }} /></div>
    })

    const aside = {
        asideWrapper: children => <div className="news-aside">{children}</div>,
        title: "News",
        items: [...aside_items],
        footer: null
    };

    return <Sub title={name} crumbs={d_crumbs} content={content} aside={aside} />;
}

export default Article