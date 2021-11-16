import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import Tabs from "./components/01-Tabs"
import TabContent from "./components/02-Tab-Content"

import {
  Description,
  TabData,
  qoqoloContent,
} from "~content/showcase"

const crumbs = [
  { text: "Showcase", to: "/showcase" },
  { text: "Qoqolo", to: "/showcase/qoqolo" },
]

const QoqoloPage = () => {
  const bodyContent = [...qoqoloContent]

  const content = (
    <Fragment>
      <Description />
      <Tabs tabdata={TabData} />
      <TabContent bodyContent={bodyContent} />
    </Fragment>
  )

  return <Sub title="Qoqolo" crumbs={crumbs} content={content} />
}

export default QoqoloPage
