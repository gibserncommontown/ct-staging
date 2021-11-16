import React, { Fragment } from "react"

import { Link } from "gatsby"
import Sub from "~layout/Sub"
import aside from "~content/products/aside"
import block from "~content/products/block"
import {
  Heading, BlockGrid, BlockContent, BlockImg, BlockTexts, BlockHeading, BlockDescription, ClickToACtion
} from "./styled"

import { HeadingIcon, HeroBanner } from "~styled"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "CommonAcademy", to: "/products/commonacademy" },
]

const CommonAcademyPage = () => {
  let content = (
    <Fragment>
      <HeadingIcon>
        <img src={require("~images/products/common-academy.png").default} alt="CommonAcademy" title="CommonAcademy" />
      </HeadingIcon>

      <Heading>LEARN ONLINE, TEACH ONLINE</Heading>

      <HeroBanner>
        <img src={require("~images/Tech-and-GO.jpg").default} alt="PSG Approved" title="PSG Approved" />
      </HeroBanner>

      <p>A Learning Management System which are used in all Singapore public schools. It has advanced pedagogy and online activities for collaborative learning. Both instructors and student learners can co-create learning possibilities in a secured environment.</p>
      {/* <p>CommonAcademy Learning Management System is a digital learning platform for both instructors and student learners to co-create learning possibilities in a secured environment.</p> */}

      <BlockGrid>
        {block.map(b => {
          const { key, img, title, description } = b;

          return (
            <BlockContent key={key} >
              <BlockImg style={{ backgroundImage: `url('${img.default}')` }} />
              <BlockTexts>
                <BlockHeading>{title}</BlockHeading>
                <BlockDescription>{description}</BlockDescription>
              </BlockTexts>
            </BlockContent>
          )
        })}
      </BlockGrid>

      <p>With CommonAcademy, you can save costs by conducting your language lessons online without compromising on quality. It is SaaS-ready, can be hosted in a scalable cloud or an in-house data centre.</p>
      <ClickToACtion>
        <Link to="/contact-us" className="btn btn-primary default-edge">
          Contact Us
        </Link>
      </ClickToACtion>
    </Fragment>
  )
  return (
    <Sub
      title="CommonAcademy"
      crumbs={crumbs}
      content={content}
      aside={aside}
    />
  )
}

export default CommonAcademyPage
