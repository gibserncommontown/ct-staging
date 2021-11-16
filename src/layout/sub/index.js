import React, { Fragment } from "react"

import Seo from "../Seo"
import Header from "../Header"
import Footer from "../Footer"
import Breadcrumbs from "../Breadcrumbs"

import ContentArea from "~components/ContentArea"
import ContentDiv from "~components/ContentDiv"
import AsideDiv from "~components/AsideDiv"

import { getPathClass } from "../../library/helper"

const Sub = props => {

    let {
        children,
        content,
        crumbs = [],
        headerOverlay = false,
        aside = {},
    } = props

    if (typeof children === "undefined") {
        children = <ContentDiv children={content} />
    }

    if ("items" in aside)
        children = (
            <Fragment>
                <AsideDiv aside={aside} />
                {children}
            </Fragment>
        )

    let pathClass = getPathClass()

    return (
        <div className="handle-router-bug" >
            <Seo {...props} />
            <Header headerOverlay={headerOverlay} />
            {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
            <ContentArea children={children} pathClass={pathClass} />
            <Footer />
        </div>
    )
}

export default Sub
