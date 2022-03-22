import React, { Fragment } from "react"

import Sub from "~layout/sub"
import aside from "~content/products/aside"

import { HeadingIcon } from "~styled"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "Swiiit", to: "/products/swiiit" },
]

const SwiiitPage = () => {
  let content = (
    <Fragment>
      <HeadingIcon>
        <img src={require("~images/products/swiiit.png").default} alt="Swiiit" title="Swiiit" />
      </HeadingIcon>
      <h1>Creating a website has never been easier.</h1>
      <h4>
        Simply point and type, drag and drop with our all-in-one tool bar!
      </h4>

      <p>
        Swiiit is a web content management system that allows you to create and manage your website easily on your own. Choose from over 70 templates and personalise your website from layout to photos and fonts. Simply point and type to create content, and drag and drop to insert images and web applications—that’s it!
      </p>

      <p>
        Swiiit is also scalable, enabling medium and large enterprises to create microsites, fast. Its powerful feature, Access Control, allows them to assign editing rights not just to different people, but also to different sections of a website.
      </p>

      <p>
        <img
          src={require("~images/products/swiiit1.png").default}
          alt="Swiiit 1"
          className="img-responsive margin-auto block"
        />
      </p>

      <p>
        Swiiit is the selected content management system provider to Singapore government agencies and Ministry of Education schools under the <i>Info-communications Media Development Authority (IMDA) (T)1374 Content Websites Platform (CWP) tender</i>. More than 270 schools in Singapore use SWIIT for their websites because of its intuitive features and ease of use.
      </p>

      <p>
        Interested in a CWP partnership with us? Contact us at <a href="mailto:partnership@commontown.com" alt="" >partnership@commontown.com</a> today.
      </p>


      <p>
        For sales enquiries, drop us an email
        at <a href="mailto:biz@commontown.com" alt="">biz@commontown.com</a> or call us at <a href="tel:6848 8900" alt="" >6848 8900</a>.</p>
      <p>
        For more information, visit <button type="button" className="type-link" onClick={() => window.open('https://www.swiiit.com')} onKeyDown={() => window.open('https://www.swiiit.com')}  >www.swiiit.com</button>.
      </p>
    </Fragment>
  )

  return <Sub title="Swiiit" crumbs={crumbs} content={content} aside={aside} />
}

export default SwiiitPage
