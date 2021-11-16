import React from "react"
import Sub from "~layout/Sub"
import Tabs from "../pages/showcase/components/01-Tabs"
import TabContent from "../pages/showcase/components/02-Tab-Content"
import "./css/news.min.css"

const Listing = props => {
    const { l_crumbs, tabdata, tabcontent, year } = props.pageContext;

    const content = <>
        <Tabs tabdata={tabdata} active={year} />
        <TabContent bodyContent={tabcontent} />
    </>

    return <Sub title={year} crumbs={l_crumbs} content={content} />
}

export default Listing;