import React, { Fragment } from "react"

import Sub from "~layout/sub"
import Tabs from "./components/01-Tabs"
import TabContent from "./components/02-Tab-Content"

import {
  Description,
  TabData,
  swiiitContent,
} from "~content/showcase"

const crumbs = [
  { text: "Showcase", to: "/showcase" },
  { text: "Swiiit", to: "/showcase/swiiit" },
]

const SwiiitPage = () => {
  const bodyContent = [...swiiitContent]

  const content = (
    <Fragment>
      <Description />
      <Tabs tabdata={TabData} active="Swiiit" />
      <TabContent bodyContent={bodyContent} />
    </Fragment>
  )

  return <Sub title="Swiiit" crumbs={crumbs} content={content} />
}

export default SwiiitPage
