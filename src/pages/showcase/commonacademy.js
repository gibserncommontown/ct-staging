import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import Tabs from "./components/01-Tabs"
import TabContent from "./components/02-Tab-Content"

import {
  Description,
  TabData,
  commonadademyContent,
} from "~content/showcase"

import "./css/Showcase.min.css"

const crumbs = [
  { text: "Showcase", to: "/showcase/" },
  { text: "CommonAcademy", to: "/showcase/commonacademy/" },
]

const CommonAcademyPage = () => {
  const bodyContent = [...commonadademyContent]

  const content = (
    <Fragment>
      <Description />
      <Tabs tabdata={TabData} active="CommonAcademy" />
      <TabContent bodyContent={bodyContent} />
    </Fragment>
  )

  return <Sub title="CommonAcademy" crumbs={crumbs} content={content} />
}

export default CommonAcademyPage
