import React from "react"
import "./css/Aside.min.css"

const aside = {
  asideWrapper: children => (
    <div className="product-aside" children={children} />
  ),
  title: "Products",
  items: [
    {
      title: "SWIIIT",
      to: "/products/swiiit/",
      child: [],
    },
    {
      title: "CommonAcademy",
      to: "/products/commonacademy/",
      child: [],
    },
    {
      title: "Qoqolo",
      to: "/products/qoqolo/",
      child: [],
    },
    // {
    //   title: "Qoqolo Elderly",
    //   to: "/products/qoqolo-elderly/",
    //   child: [],
    // },
    {
      title: "Dudu",
      to: "/products/dudu/",
      child: [],
    },
    // {
    //   title: "Dudu Together",
    //   to: "/products/dudu-together/",
    //   child: [],
    // },
    {
      title: "Vatitude",
      to: "/products/vatitude/",
      child: [],
    },
  ],
  footer: null,
}

export default aside
