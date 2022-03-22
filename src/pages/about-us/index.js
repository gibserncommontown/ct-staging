import React, { Fragment } from "react"

import Sub from "~layout/sub"

import aside from "~content/about-us/aside"

const crumbs = [{ text: "About Us", to: "/about-us" }]

const AboutUsPage = () => {
  let content = (
    <Fragment>
      <h1>About US</h1>
      <p>
        For the past 18 years, the team at CommonTown has been actively providing innovative web experiences to all our clients. CommonTown has built up its name in developing web solutions ranging from a Web Builder, and Digital Repositories, to Training &amp; Management Systems and other web technology related products.
      </p>
      <p>
        We operate through these four groups: <b>Research and Development, Web Content Management Solutions, Solutions Implementation and Applications Maintenance.</b>
      </p>
      <p>
        From the beginning, CommonTown’s focus has been to develop intuitive and innovative applications for anyone to harness the web. Throughout the years, we have delivered scores of innovative, complex and large scale solutions for deployment on Web and Mobile platforms. This includes <b>MOE edumall 2.0</b>, an online platform that provides teaching resources and collaboration tools that are accessed by over 28,000 teachers daily. Other solutions include <b>movaLin</b>, the first interactive video tagging tool on mobile, <b>MindMap</b>, an online collaborative tool and many others.
      </p>
      <p>
        CommonTown provides a robust CMS platform that powers websites of all sizes including schools, government agencies and healthcare institutes.
      </p>
      <p>
        Our CMS is centered on its intuitive in-context editing interfaces, with the system focusing on its user-friendliness by enabling surfing and controlling of content changes concurrently with ease. It is also easily scalable with over 50 plug-and-play modules, including multi-lingual and multi-tenancy capabilities. CommonTown's web-based applications have benefited clients to drive better online operations and increase revenues - doing more with less.
      </p>
      <p>
        We are constantly thriving towards our tagline <b>“The Web, the way you want it"</b>.
      </p>
    </Fragment>
  )
  return (
    <Sub title="About Us" crumbs={crumbs} content={content} aside={aside} />
  )
}

export default AboutUsPage
