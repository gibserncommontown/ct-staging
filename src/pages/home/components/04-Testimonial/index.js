import React from "react"

import { Link } from "gatsby"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./css/Testimonial.min.css"

import Slider from "react-slick"
import keygen from "keygenerator"

const Quote = () => (
  <img
    src={require("./images/open-quote.png").default}
    alt="Quote"
    className="testimonial-quote"
  />
)

const MakingOurMark = () => {
  return (
    <div className="making-our-mark section">
      <div className="making-our-mark-blob ">
        <div className="outer-container">
          <Testimonial />
        </div>
      </div>
    </div>
  )
}

// Company Strength Score
const Testimonial = () => (
  <div className="container">
    <Title1 />
    <AnalyticBoard />

    <div className="testmonialContainer">
      <Title2 />
      <Quote />
      <TestimonialBoard />
      <Cta />
    </div>
  </div>
)

const Title1 = () => <h2>MAKING OUR MARK</h2>

const AnalyticBoard = () => {
  const analyticItems = analytics.map(analytic => {
    const { score, text } = analytic
    return (
      <div key={keygen._()} className="scoreBlock">
        <div className="score">{score}</div>
        <div className="text">{text}</div>
      </div>
    )
  })

  return <div className="scoreContainer">{analyticItems}</div>
}

const analytics = [
  {
    score: "450+",
    text: "Education & corporate centres",
  },
  {
    score: "450,000+",
    text: "Combined users on our platforms",
  },

  {
    score: "6",
    text: "Key products",
  },

  {
    score: "20+",
    text: "Years of experience",
  },
]

// Testimonial
const Title2 = () => <h2>Success Stories</h2>

const TestimonialBoard = () => {
  // Slides

  const testmonialBlock = testimonials.map(testimonial => {
    const { author, description } = testimonial
    const key = keygen._()

    return (
      <div key={key} className="testimonialBlock">
        <div className="description">{description}</div>
        <div className="author">- {author}</div>
      </div>
    )
  })

  // Slider
  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
  }

  return (
    <div className="testimonialSlider">
      <Slider {...settings}>{testmonialBlock}</Slider>
    </div>
  )
}

const testimonials = [
  {
    author: "Mrs Tay, Head Administrative Manager of Tung Ling Kindergarten",
    description:
      "Qoqolo’s online portal helps us to communicate better with our parents, as well as organise our admin work by using the templates to create progress reports and portfolios.",
  },

  {
    author: "Kenny Yap, Executive Chairman and Managing Director of Qianhu",
    description:
      "We can update our web pages at any time with the user-friendly web builder, reducing the wait time and dependency on external vendors. Web pages can be created or updated by point-and-type and drag-and-drop options, without the need to learn any new programming.",
  },

  {
    author: "Mrs Low, mother of two boys",
    description:
      "Dudu assesses my children’s Chinese reading level by asking them questions based on Chinese comprehension passages, and then recommend books based on their abilities. If my children stumble upon difficult words, there is an auto-reader and pinyin display option to help them. My children’s confidence in reading has increased after using Dudu, and I’d recommend it to parents.",
  },
]

const Cta = () => (
  <div className="testimonial-cta">
    <Link
      title="Achievements"
      to="/about-us/key-achievements/"
      className="btn btn-primary btn-block"
    >
      Our Achievements
    </Link>

    <Link
      title="Showcase"
      to="/showcase"
      className="btn btn-primary  btn-block"
    >
      Showcase
    </Link>
  </div>
)

export default MakingOurMark
