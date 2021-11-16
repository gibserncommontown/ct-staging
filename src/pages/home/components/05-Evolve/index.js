import React, { Fragment } from "react"

import { Link } from "gatsby"
import keygen from "keygenerator"

import "./css/Evolve.min.css"

const EvolveWithUs = () => {
  return (
    <div className="evolve-with-us section">
      <div className="container ">
        <div className="containedContent">
          <Title />
          <Paragraph1 />
        </div>
        <DepartmentCells />
      </div>
    </div>
  )
}

const Title = () => <h2>EVOLVE WITH US</h2>
const Paragraph1 = () => (
  <Fragment>
    <p>
      Do you share our passion in powering education through technology? Do you
      have what it takes to embark on this bold mission with us?
    </p>
    <p>
      Are you ready for not just a job, but an exciting and fulfilling career?
      We want you.
    </p>
    <p>
      <Link
        to="/career"
        alt="Career"
        title="Career"
        className="evolve-link-arrow"
      >
        I’m interested
      </Link>
    </p>
  </Fragment>
)

const DepartmentCells = () => {
  const departments = departmentContent.map(content => {
    const {
      cover_image,
      department,
      image_story,
      the_story,
      the_person,
      the_role,
    } = content

    const coverbackgroundImage = { backgroundImage: `url(${cover_image}` }
    const storybackgroundImage = { backgroundImage: `url(${image_story}` }

    return (
      <div
        key={keygen._()}
        className="departmentCell"
        style={coverbackgroundImage}
      >
        <div className="departmentContent">
          <div className="department-type">{department}</div>
          <div className="department-cover" style={storybackgroundImage}></div>
          <div className="department-details">
            <div className="department-story">{the_story}</div>
            <div className="department-person">- {the_person}</div>
            <div className="department-role">{the_role}</div>
          </div>
        </div>
      </div>
    )
  })

  return <div className="departmentCellBlock">{departments}</div>
}

const departmentContent = [
  {
    cover_image: require("./images/engineer1-compressor.jpg").default,
    department: "Engineer",
    image_story: require("./images/engineer2-compressor.jpg").default,
    the_story:
      "Individual effort matters much but here is where you can find a good team and environment that will bring you far.",
    the_person: "Seakon",
    the_role: "Senior Software Engineer",
  },

  {
    cover_image: require("./images/designer1-compressor.jpg").default,
    department: "Designer",
    image_story: require("./images/designer2-compressor.jpg").default,
    the_story:
      "Art is a higher type of knowledge than experience and CommonTown is a place where i can freely express myself creatively.",
    the_person: "Yan Min",
    the_role: "Senior UI/UX Designer",
  },

  {
    cover_image: require("./images/project-manager1-compressor.jpg").default,
    department: "Project Manager",
    image_story: require("./images/project-manager2-compressor.jpg").default,
    the_story:
      "CommonTown is like a big family, in which we support and nurture one another through patient guidance.",
    the_person: "Joan",
    the_role: "Senior Project Manager",
  },

  {
    cover_image: require("./images/sales_support1-compressor.jpg").default,
    department: "Sales / Support",
    image_story: require("./images/sales_support2-compressor.jpg").default,
    the_story:
      "Growing takes time, but environment cultivates progress.",
    the_person: "Wei Qi",
    the_role: "IT Support Manager",
  },
]

export default EvolveWithUs
