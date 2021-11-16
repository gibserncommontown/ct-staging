import React from "react"

import "./css/Hero.min.css"

// import ParallaxLayer from "./ParallaxLayers"
import Force from "./D3/Force"

// Editables
// const Title = "WE IGNITE CURIOUS MINDS"
// const SubTitle = "GENERATING AN EVOLUTION OF LEARNING"

const Title = "GENERATING AN EVOLUTION OF LEARNING";

const Description =
  "We are best known for EdTech. We are passionate about applying deep technology and research to transform learning, making it faster, better and more effective."

// Actual Component
const Hero = () => (
  <div className="hero-banner">
    <div className="heroArea">
      <HeroGraph />
      {/* <ParallaxLayer /> */}
      <HeroDescription />
    </div>
  </div>
)

// Content
const HeroGraph = () => <div className="heroGraph" children={<Force />} />

const HeroDescription = () => (
  <div className="hero-space-shell">
    <img
      alt=""
      src={require("./images/blob2.png").default}
      className="hero-mushroomArt"
    />

    <div className="outer-container">
      <div className="container">
        <div className="hero-intro">
          <div className="hero-title" children={Title} />
          {/* <div className="hero-subtitle" children={SubTitle} /> */}
          <div className="hero-description" children={Description} />
        </div>
      </div>
    </div>

    <div className="hero-circle-wrapper">
      <div className="container" />
    </div>
  </div>
)

export default Hero
