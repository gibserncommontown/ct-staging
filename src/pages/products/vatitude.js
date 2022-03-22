import React, { Fragment } from "react"

import Sub from "~layout/sub"
import aside from "~content/products/aside"

import { HeadingIcon } from "~styled"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "Vatitude", to: "/products/vatitude" },
]

const VatitudePage = () => {
  let content = (
    <Fragment>
      <HeadingIcon>
        <img src={require("~images/products/vatitude.jpg").default} alt="Vatitude" title="Vatitude" />
      </HeadingIcon>
      <h1>Your smart e-textbook for teachers and students.</h1>
      <h4>Deliver fun and interactive digital textbooks with Vatitude!</h4>
      <p>Vatitude is a digital textbook platform that enhances and supplements teaching and learning. It enables publishers to quickly convert their textbooks from PDF to EPUB, and embed them with interactive learning tools, adaptive assessments and games.</p>
      <p>Vatitude is designed to help students with different learning abilities. Teachers can engage students better and monitor their progress easily through Vatitude’s interactive resources and intuitive learning tools. Its platform also supports collaborative learning, such as teacher-to-student and peer-to-peer interactions, to encourage greater problem-solving and critical thinking skills.</p>
      <p>For more information or sales enquiries, email us at <a href="mailto:biz@commontown.com" alt="" >biz@commontown.com</a> or call us at <a href="tel:6848-8900" alt="">6848-8900</a>.</p>
    </Fragment>
  )
  return (
    <Sub title="Vatitude" crumbs={crumbs} content={content} aside={aside} />
  )
}

export default VatitudePage
