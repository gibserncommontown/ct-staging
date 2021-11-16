import React from "react"

import Home from "~layout"

import Hero from "./components/01-Hero"
import Benefits from "./components/02-Benefits"
import OurApp from "./components/03-OurApp"
import Testimonial from "./components/04-Testimonial"
import Evolve from "./components/05-Evolve"

const IndexPage = () => {

  return (
    <Home title="Home" headerOverlay="true">
      <Hero />
      <Benefits />
      <OurApp />
      <Testimonial />
      <Evolve />
    </Home>
  )
}

export default IndexPage
