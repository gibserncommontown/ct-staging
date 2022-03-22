import React, { Fragment } from "react"

import Sub from "~layout/sub"

import aside from "~content/about-us/aside"

const crumbs = [
  { text: "About Us", to: "/about-us" },
  { text: "History", to: "/about-us/history" },
]

const HistoryPage = () => {
  let content = (
    <Fragment>
      <h1>History</h1>
      <p>
        Founded in 1999, CommonTown is a spin-off from A*STAR (Agency for Science, Technology and Research).
      </p>
      <p>
        Our 20-year journey in the evolution of technology and the discovery of an Alive! Digital Advantage can be summarized below.
      </p>
      <br />
      <img
        src={require("~images/history.jpg").default}
        alt="History"
        title="History"
      />
    </Fragment>
  )

  return <Sub title="History" content={content} aside={aside} crumbs={crumbs} />
}

export default HistoryPage
