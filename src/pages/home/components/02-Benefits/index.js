import React, { Fragment } from "react"

import { Link } from "gatsby"

import "./css/Benefits.min.css"

const Title = () => (
  <div className="benefits-title-link-area">
    <h1>EDUCATION<br />THE GREAT DIFFERENTIATOR</h1>
  </div>
)

const SubTitle = () => <h3>We don’t just build things.</h3>

const Description = () => (
  <div className="benefits-point-explain">
    <p>
      Our educational products are based on deep technology and in-depth research, as well as a keen understanding of our users. For every product we create, we work closely and directly with our early adopters to ensure that our products are easy to use, intuitive and effective. Founded in 1999, we are a spin-off from A*STAR, and are one of the few ambitious companies in Singapore to use deep tech and adaptive learning in our applications.
    </p>
    <br />
    <p className="custom-space">
      <Link className="btn btn-primary" to="/about-us" title="Find out more">
        Find out more
      </Link>
    </p>
  </div>
)

const Benefits = () => {
  return (
    <Fragment>
      <div className="benefits-area">
        <div className="outer-container">
          <div className="container">
            <ContentDescription />
          </div>
          <img
            alt=""
            src={require("./images/girl-benefits.png").default}
            className="benefits-girl"
          />
        </div>

        <ComponentArt />
      </div>
    </Fragment>
  )
}

const ContentDescription = () => (
  <div className="benefits-description">
    <Title />
    <div className="benefits-point">
      <SubTitle />
      <Description />
    </div>
  </div>
)

const ComponentArt = () => (
  <div className="benefits-art-area">
    <img alt="" src={require("./images/blob.png")} className="mushroom" />
  </div>
)

export default Benefits
