import React from "react"
import { Link } from 'gatsby'
import keygen from "keygenerator"

import "./css/Points.min.css"

const points = [
  {
    key: keygen._(),
    icon: require("./images/swiiit.png"),
    title: "Swiiit",
    to: '/products/swiiit/',
    description:
      "Swiiit is a Web Content Management System (WCMS) that allows anyone without HTML knowledge to edit webpages at ease.",
  },
  {
    key: keygen._(),
    icon: require("./images/common-academy.png"),
    title: "CommonAcademy",
    to: '/products/commonacademy/',
    description:
      "CommonAcademy is a Learning Content Management System (LCMS) that connects learners and educators virtually.",
  },
  {
    key: keygen._(),
    icon: require("./images/qoqolo.png"),
    title: "Qoqolo",
    to: '/products/qoqolo/',
    description:
      "Qoqolo is a comprehensive School Management System that fosters greater communication between parents and teachers, and reduces the time taken for teachers to perform daily work tasks.",
  },
  {
    key: keygen._(),
    icon: require("./images/dudu.png"),
    title: "Dudu",
    to: '/products/dudu/',
    description: "Dudu is an online environment for self-paced and personalised learning of the Chinese language.",
  },
  {
    key: keygen._(),
    icon: require("./images/vatitude.jpg"),
    title: "Vatitude",
    to: '/products/vatitude/',
    description: "Vatitude is a digital textbook platform that enhances and supplements teaching and learning.",
  },
  // {
  //   key: keygen._(),
  //   icon: require("./images/dudu-together.png"),
  //   title: "Dudu Together",
  //   to: '/products/dudu-tegether/',
  //   description: <Fragment>Dudu Together is a 21<sup>st</sup> century Chinese Teaching System that allows students to develop listening, reading comprehension, speaking and writing skills in the Chinese language.</Fragment>,
  // },
]

const Points = () => {
  let contents = points.map(point => {
    let { key, icon, title, to, description } = point
    return (
      <Link key={key} className="point" to={to} title={title}>
        <div className="iconArea" children={<img src={icon.default} alt={title} />} />
        <div className="descriptionArea">
          {/* <h5 children={title} /> */}
          <p children={description} />
        </div>
      </Link>
    )
  })

  return <div className="points">{contents}</div>
}

export default Points
