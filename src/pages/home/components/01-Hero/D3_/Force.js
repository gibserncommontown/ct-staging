import React, { Component } from "react"

import {
  select,
  forceSimulation,
  forceCollide,
  forceLink,
  // forceX,
  // forceY,
} from "d3"

import "./css/Force.min.css"

export default class Force extends Component {
  componentDidMount = () => {
    const playNodes = [
      { id: 0, fontFamily: "", fontSize: "", label: "", targets: [] }, //
      { id: 1, fontFamily: "", fontSize: "", label: "", targets: [0] },
      { id: 2, fontFamily: "", fontSize: "", label: "", targets: [1] },
      { id: 3, fontFamily: "", fontSize: "", label: "", targets: [0, 1, 2] },
      { id: 4, fontFamily: "", fontSize: "", label: "", targets: [0, 1, 3] },
      { id: 5, fontFamily: "", fontSize: "", label: "", targets: [3, 4] },
      { id: 6, fontFamily: "", fontSize: "", label: "", targets: [1, 3, 4] },
      { id: 7, fontFamily: "", fontSize: "", label: "", targets: [3, 5, 6] },
      { id: 8, fontFamily: "", fontSize: "", label: "", targets: [3, 6, 7] },
      { id: 9, fontFamily: "", fontSize: "", label: "", targets: [5, 7, 8] },
      {
        id: 10,
        fontFamily: "Times New Roman",
        fontSize: "20",
        label: "p<tspan dy='10'>i</tspan> <tspan dy='-7'>(θ)</tspan>",
        targets: [5, 7, 9],
      },
      { id: 11, fontFamily: "", fontSize: "", label: "", targets: [10] },
      { id: 12, fontFamily: "", fontSize: "", label: "", targets: [9, 10, 11] },
      {
        id: 13,
        fontFamily: "Roboto",
        fontSize: "24",
        label: "polytomous",
        targets: [9, 10, 12],
      },
      { id: 14, fontFamily: "", fontSize: "", label: "知", targets: [9, 13] },
      { id: 15, fontFamily: "", fontSize: "", label: "", targets: [11, 12] },
      {
        id: 16,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [11, 12, 15],
      },
      {
        id: 17,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [12, 13, 14, 16],
      },
      { id: 18, fontFamily: "", fontSize: "", label: "", targets: [15, 16] },
      {
        id: 19,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [15, 16, 18],
      },
      {
        id: 20,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [13, 14, 16, 19],
      },
      { id: 21, fontFamily: "", fontSize: "", label: "", targets: [18, 19] },
      {
        id: 22,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [19, 20, 21],
      },
      { id: 23, fontFamily: "", fontSize: "", label: "", targets: [20, 22] },
      {
        id: 24,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [21, 22, 23],
      },
      {
        id: 25,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [21, 22, 24],
      },
      { id: 26, fontFamily: "", fontSize: "", label: "", targets: [21, 25] },
      { id: 27, fontFamily: "", fontSize: "", label: "", targets: [23, 24] },
      {
        id: 28,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [24, 25, 26],
      },
      {
        id: 29,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [24, 27, 28],
      },
      {
        id: 30,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [24, 27, 29],
      },
      {
        id: 31,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [23, 27, 30],
      },
      { id: 32, fontFamily: "", fontSize: "", label: "", targets: [30, 31] },
      { id: 33, fontFamily: "", fontSize: "", label: "", targets: [29, 30] },
      {
        id: 34,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [29, 30, 33],
      },
      { id: 35, fontFamily: "", fontSize: "", label: "", targets: [29, 34] },
      {
        id: 36,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [29, 34, 35],
      },
      {
        id: 37,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [28, 29, 36],
      },
      { id: 38, fontFamily: "", fontSize: "", label: "", targets: [28, 37] },
      {
        id: 39,
        fontFamily: "",
        fontSize: "",
        label: "",
        targets: [25, 26, 28, 37, 38],
      },
      { id: 40, fontFamily: "", fontSize: "", label: "", targets: [39] },
      {
        id: 41,
        fontFamily: "Roboto",
        fontSize: "30",
        label: "outcomes",
        targets: [39, 40],
      },
      {
        id: 42,
        fontFamily: "Noto Sans SC",
        fontSize: "24",
        label: "自适应",
        targets: [38, 39, 40, 41],
      },
    ]

    const animationDuration = 2500
    const area = document.getElementById(`graphContainer`)
    let width = +area.clientWidth
    let height = +area.clientHeight
    let centerX = width / 2
    let centerY = height / 2

    let svg = select(`#graphArea`)
    svg.attr("width", width).attr("height", height)

    let nodes = []
    let links = []

    // Create a simulation of nodes
    // Note; This will not draw the nodes to the svg

    let simulation = forceSimulation(nodes)
      .force("collide", forceCollide(45).iterations(16))
      .force("link", forceLink(links))
      .force("charge", null)
      .on("tick", ticked)

    // Initialize
    let g = svg
      .append("g")
      .attr("transform", `translate(${centerX}, ${centerY})`)
    let node = g
      .append("g")
      .attr("class", "node")
      .selectAll("circle")
    let link = g
      .append("g")
      .attr("class", "lines")
      .selectAll("line")
    let text = g
      .append("g")
      .attr("class", "texts")
      .selectAll("text")

    restart()

    let index = 0
    let playControl = setInterval(() => {
      let dNode = playNodes[index]
      const { id, fontFamily, fontSize, label, distance } = dNode

      nodes.push({ id, fontFamily, fontSize, label })

      if (dNode.targets.length > 0) {
        dNode.targets.map(subIndex => {
          let source = nodes[index]
          let target = nodes[subIndex]

          links.push({ source, target, distance })
          return null
        })
      }

      restart()

      index++

      if (index === playNodes.length) clearInterval(playControl)
    }, animationDuration)

    function restart() {
      // Draw Node
      node = node.data(nodes, d => d.id)
      node
        .exit()
        .transition()
        .duration(animationDuration)
        .attr("opacity", 0)
        .remove()
      node = node
        .enter()
        .append("circle")
        .attr("r", 4)
        .attr("fill", "#afdffa")
        .call(node => node.transition().attr("opacity", 1))
        .merge(node)

      text = text.data(nodes)
      text.exit().remove()
      text = text
        .enter()
        .append("text")
        .html(d => d.label)

        .attr("fill", "#c1e9ff")
        .attr("opacity", 1)
        .attr("font-size", d => d.fontSize)
        .attr("font-family", d => d.fontFamily)
        .merge(text)

      // Draw link
      link = link.data(links, d => `${d.source.id}-${d.target.id}`)
      link
        .exit()
        .transition()
        .duration(animationDuration)
        .attr("stroke-opacity", 1)
        .remove()

      link = link
        .enter()
        .append("line")
        .attr("stroke", "#afdffa")
        .call(link => {
          link.transition().attr("stroke-opacity", 1)
        })
        .merge(link)

      simulation.nodes(nodes)
      simulation.force("link").links(links)
      simulation.alpha(1).restart()
    }

    // Animate Drawing
    function ticked() {
      node.attr("cx", d => d.x).attr("cy", d => d.y)
      text.attr("x", d => d.x + 14).attr("y", d => d.y + 5)

      link
        .attr("x1", d => d.source.x)
        .attr("x2", d => d.target.x)
        .attr("y1", d => d.source.y)
        .attr("y2", d => d.target.y)
    }

    // Helper
    select(window).on("resize", handleResize)
    function handleResize() {
      width = +area.clientWidth
      height = +area.clientHeight

      centerX = width / 2
      centerY = height / 2

      svg.attr("width", width).attr("height", height)
      g.attr("transform", `translate(${centerX}, ${centerY})`)
      simulation.restart()
    }
  }

  UNSAFE_componentWillUnmount = () => {
    select(`#graphContainer`).remove()
  }

  render = () => {
    return (
      <div id={`graphContainer`} className="graph">
        <svg id={`graphArea`} />
      </div>
    )
  }
}
