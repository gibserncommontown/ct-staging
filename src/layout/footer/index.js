import React from "react"
import { Link } from "gatsby"

import "./css/Footer.min.css"
import "font-awesome/css/font-awesome.min.css"

import ScrollToTop from "react-scroll-up"

const logo = require("~images/footer-logo.png");
const address_idle = require("~images/address-normal.png");
const address_active = require("~images/address-active.png");
const phone_idle = require("~images/phone-normal.png");
const phone_active = require("~images/phone-active.png");
const email_idle = require("~images/email-normal.png");
const email_active = require("~images/email-active.png");

const Footer = () => {
  const year = new Date().getFullYear()
  const scrollTopSettings = {
    showUnder: 100,
    duration: 800,
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-1">
          <CompanyDescription />
          <Products />
          <ContactUs />
          <Socials />
        </div>
        <div className="footer-2">
          Copyright &copy; {year} CommonTown Pte Ltd. All rights reserved.
          <div className="footer-dividor"></div>
          <Link to="/privacy-policy" title="Site Map" >
            Privacy Policy
          </Link>
          <div className="footer-dividor"></div>
          <Link to="/sitemap" title="Site Map">
            SiteMap
          </Link>

        </div>
      </div>
      <ScrollTopButton scrollTopSettings={scrollTopSettings} />
    </footer>
  )
}

const CompanyDescription = () => (
  <div className="company-description">
    <div className="company-logo">
      <img src={logo.default} alt="Common Town Footer Logo" />
    </div>
    <div className="company-context">
      A spin-off company from A*STAR Singapore, has a strong research and development capability, and specializes in Education Technology. We are passionate about applying deep technology and research to transform learning, making it faster, better and more effective.
    </div>
  </div>
)

const ContactUs = () => {
  return (
    <div className="address">
      <h6>Contact Us</h6>
      <address >
        <div className="icon">
          <img src={address_idle.default} alt="address-normal" />
          <img src={address_active.default} alt="address-normal" />
        </div>

        Address: 33 Ubi Avenue 3, #08-72,
        Vertex (Tower A) Singapore 408868
      </address>
      <a className="contact" title="Contact Us" href="tel:+65 6848-8900">
        <div className="icon">
          <img src={phone_idle.default} alt="phone-normal" />
          <img src={phone_active.default} alt="phone-normal" />
        </div>

        +65 6848-8900
      </a>
      <a className="email" title="Contact Support" href="mailto: support@commontown.com">
        <div className="icon">
          <img src={email_idle.default} alt="email-normal" />
          <img src={email_active.default} alt="email-normal" />
        </div>
        support@commontown.com
      </a>
    </div>
  )
}

const Socials = () => {
  let _socials = [
    { type: "linkedin-square", href: "https://www.linkedin.com/company/commontown-pte-ltd" },
    { type: "facebook-official", href: "https://www.facebook.com/CommonTown/" },
    {
      type: "youtube-play",
      href: "https://www.youtube.com/user/CommonTownvideos",
    },
  ]

  const socials_el = _socials.map(_social => {
    let { type, href } = _social
    const ace = {
      key: href,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      title: type,
    }

    return (
      <a {...ace}>
        <i className={`fa fa-${type}`} />
      </a>
    )
  })

  return (
    <div className="socials col">
      <h6>Follow Us</h6>
      <div className="social-icons">{socials_el}</div>
    </div>
  )
}

const Products = () => (
  <div className="Footer-products">
    <h6>Products</h6>
    <Link to="/products/commonacademy/" title="CommonAcademy" >CommonAcademy</Link>
    <a href="https://dudu.town/" target="_blank" rel="noopener noreferrer" title="Dudu" >Dudu</a>
    <a href="https://www.qoqolo.com/" target="_blank" rel="noopener noreferrer" title="Qoqolo" >Qoqolo</a>
    <a href="https://www.swiiit.com/" target="_blank" rel="noopener noreferrer" title="Swiiit" >Swiiit</a>
    <Link to="/products/vatitude/" title="Vatitude" >Vatitude</Link>
  </div>
)

const ScrollTopButton = ({ scrollTopSettings = {} }) => (
  <div id="footer-scroll-to-top">
    <ScrollToTop {...scrollTopSettings}>
      <div className="scrollToTop"></div>
    </ScrollToTop>
  </div>
)

export default Footer
