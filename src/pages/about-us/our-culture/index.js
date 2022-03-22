import React, { Fragment } from "react"

import Sub from "~layout/sub"

import aside from "~content/about-us/aside"

const crumbs = [
  { text: "About Us", to: "/about-us" },
  { text: "Our Culture", to: "/about-us/our-culture" },
]

const OurCulturePage = () => {
  let content = (
    <Fragment>
      <h1>Our Culture</h1>

      <p>
        Open and friendly culture, respect for self and others.
        <br />
        Credible and quality products.
        <br />
        Passionate in what we do.
        <br />
        Pioneering and creative, always exploring new technologies.
        <br />
        Fast pace, always moving.
        <br />
      </p>
      <br />
      <p>
        <b>Our People</b>
      </p>
      <p>Cosmopolitan, creative, fun loving</p>

      <br />
      <p>
        <b>Our fun working environment!</b>
      </p>
      <img
        src={require("~images/our-culture.jpg").default}
        alt="Our Culture"
        title="Our Culture"
      />
    </Fragment>
  )

  return (
    <Sub
      title="Our Culture | CommonTown"
      crumbs={crumbs}
      aside={aside}
      content={content}
    />
  )
}

export default OurCulturePage
