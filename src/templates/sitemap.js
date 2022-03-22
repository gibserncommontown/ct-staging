import React from 'react'
import { Link } from "gatsby"

import Sub from "~layout/sub"

const Sitemap = props => {
    const { site_tree = [] } = props.pageContext;
    const content = (
        <>
            <h1>Sitemap</h1>
            <ul>
                {site_tree.map(s => <li><Link to={s.url} title={s.title} >{s.title}</Link></li>)}
            </ul>
        </>
    )

    return <Sub title="Sitemap" content={content} />
}

export default Sitemap
