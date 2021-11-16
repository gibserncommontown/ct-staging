import React from "react"

import { Link } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./css/OurApp.min.css"

import Slider from "react-slick"
import keygen from "keygenerator"

const OurApp = () => {
  return (
    <div className="OurApp">
      <div className="outer-container">
        <Carousel />
        <img
          alt="node-art"
          src={require("./images/node-art.png").default}
          className="explore-network"
        />
      </div>
    </div>
  )
}

const Carousel = () => (
  <div className="container">
    <h2>EXPLORE OUR CREATIONS</h2>
    <div className="OurApp--block">
      <CarouselBlock />
    </div>
  </div>
)

const CarouselBlock = () => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {slides.map((slide, i) => {
        let { title, description, logo, href } = slide,
          key = keygen._();

        return (
          <div key={key} className="product-block">
            <div className="product-name" children={title} />
            <div className="product-detail">
              <p children={description} />

              <div
                className="product-logo"
                style={{ backgroundImage: `url(${logo.default})` }}
              />

              <Link to={href} alt={title} title={title}>
                Read More
              </Link>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

const slides = [
  {
    logo: require("./images/swiiit.png"),
    title: "Swiiit",
    description: "Build your website with our one-stop service, easy self-service update and secure hosting.",
    href: "/products/swiiit/",
  },
  {
    logo: require("./images/common-academy.png"),
    title: "CommonAcademy",
    description:
      "Enables online language learning with latest speech technologies and authentic learning tasks.",
    href: "/products/commonacademy/",
  },
  {
    logo: require("./images/qoqolo.png"),
    title: "Qoqolo",
    description:
      "Manages preschools effortlessly and engages parents with timely information feeds.",
    href: "/products/qoqolo/",
  },
  // {
  //   logo: require("./images/qoqolo.png"),
  //   title: "Qoqolo Elderly",
  //   description:
  //     "Improve operations and elderly care services with a centralised management system.",
  //   href: "/qoqolo-elderly/",
  // },
  {
    logo: require("./images/dudu.png"),
    title: "Dudu",
    description:
      "To master a language, read more. Dudu system uses AI technologies to help you read and improve Chinese painlessly.",
    href: "/products/dudu/",
  },
  {
    logo: require("./images/vatitude.jpg"),
    title: "Vatitude",
    description:
      "Enables publishers to deliver digital textbooks and interactive learning resources.",
    href: "/products/vatitude/",
  },

  // {
  //   logo: require("./images/dudu-together.png"),
  //   title: "Dudu Together",
  //   description:
  //     "Teach better with Dudu Together, our Chinese teaching system specifically designed for the 21st century Chinese language educator.",
  //   href: "/products/dudu-together/",
  // },
]

export default OurApp
