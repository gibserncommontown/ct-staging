import React from "react"
import CommonAcademyPage from "./commonacademy"


// import Sub from "~layout/sub"
// import Tabs from "./components/01-Tabs"
// import TabContent from "./components/02-Tab-Content"

// import { shuffle } from "../../library/helper"

// import {
//   Description,
//   TabData,
//   commonadademyContent,
//   qoqoloContent,
//   swiiitContent,
// } from "~content/showcase"

// const crumbs = [{ text: "Showcase", to: "/showcase" }]

const ShowcasePage = () => {
  return <CommonAcademyPage />

  // let bodyContent = [
  //   ...commonadademyContent,
  //   ...qoqoloContent,
  //   ...swiiitContent,
  // ]

  // // bodyContent = shuffle(bodyContent)

  // const content = (
  //   <Fragment>
  //     <Description />
  //     <Tabs tabdata={TabData} />
  //     <TabContent bodyContent={bodyContent} />
  //   </Fragment>
  // )

  // return <Sub title="Showcase" crumbs={crumbs} content={content} />
}

export default ShowcasePage
