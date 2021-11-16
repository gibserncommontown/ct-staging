import React from "react"
import "./css/about-global.min.css"

const aside = {
  asideWrapper: children => <div className="about-aside" children={children} />,
  title: "About Us",
  items: [
    // {
    //   title: "History",
    //   to: "/about-us/history",
    //   child: [],
    // },
    {
      title: "Key Achievements",
      to: "/about-us/key-achievements/",
      child: [],
    },
    {
      title: "Board Members",
      to: "/about-us/board-members/",
      child: [],
    },

    {
      title: "Our Culture",
      to: "/about-us/our-culture/",
      child: [
        {
          title: "Story of Shimmer Art",
          to: "/about-us/our-culture/story-of-shimmer-art/",
          child: [],
        },
      ],
    },
  ],
  footer: null,
}

export default aside
