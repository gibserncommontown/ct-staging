import React from "react"

import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import Breadcrumbs from "./breadcrumbs"

const Layout = props => {
    let { children, crumbs = [], headerOverlay = false } = props

    return (
        <>
            <Seo {...props} />
            <Header headerOverlay={headerOverlay} />
            {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
            <div className="home">{children}</div>
            <Footer />
        </>
    )
}

export default Layout
