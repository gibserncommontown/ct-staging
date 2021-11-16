import React, { Component } from "react"

// import Parallax from "parallax-js"
// import "./css/ParallaxLayers.min.css"

class ParallaxLayers extends Component {
  // componentDidMount() {
  //   let scene = document.getElementById("scene")
  //   let parallaxInstance = new Parallax(scene, {
  //     limitX: 50,
  //     limitY: 50,
  //   })
  // }

  render() {
    return (
      <div id="scene">
        <div className="layer" data-depth="0.25">
          <img src={require("./art1.png")} alt="" />
        </div>
        <div className="layer" data-depth="0.4">
          <img src={require("./art2.png")} alt="" />
        </div>
        <div className="layer" data-depth="0.35">
          <img src={require("./art3.png")} alt="" />
        </div>
      </div>
    )
  }
}

export default ParallaxLayers
