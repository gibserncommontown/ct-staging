import React, { Fragment } from "react"

import Sub from "~layout/sub"
import Tabs from "./components/01-Tabs"
import TabContent from "./components/02-Tab-Content"

import {
  Description,
  TabData,
  eldercareContent,
} from "~content/showcase"

const crumbs = [
  { text: "Showcase", to: "/showcase" },
  { text: "Eldercare", to: "/showcase/eldercare" },
]

const EldercarePage = () => {
  const bodyContent = [...eldercareContent]

  const content = (
    <Fragment>
      <Description />
      <Tabs tabdata={TabData} active="Swiiit" />
      <TabContent bodyContent={bodyContent} />
    </Fragment>
  )

  return <Sub title="Eldercare" crumbs={crumbs} content={content} />
}

export default EldercarePage
