import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import aside from "~content/products/aside"

import { HeadingIcon } from "~styled"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "Dudu", to: "/products/dudu" },
]

const DuduPage = () => {
  let content = (
    <Fragment>
      <HeadingIcon>
        <img src={require("~images/products/dudu.png").default} alt="Dudu" title="Dudu" />
      </HeadingIcon>
      <h1>Learn Chinese. Love Chinese.</h1>
      <h4>To master a language, read more. Dudu helps you read and improve Chinese painlessly.</h4>
      <p>Grow your child’s love for the Chinese language with Dudu’s self-paced Chinese reading system! Its unique features include an adaptive online placement test that assesses your child’s reading competency, and an automated reading programme that recommends suitable books based on your child’s ability. There are over 600 colourful and interactive Chinese e-books on Dudu covering a wide range of topics from history to science!</p>
      <p>At the end of each book, your child’s understanding of the passages will be tested with a short quiz. An automated algorithm monitors his/her progress over time and recommends new books according to his/her increased abilities.</p>
      <p>Chinese is one of the most important languages in the world today. Dudu’s reading system has proven to help children of all ages to learn Chinese better and faster, and is widely used in schools and homes.</p>
      <p>
        <img src={require('~images/products/dudu.png').default} className="img-responsive margin-auto block" alt="Dudu" />
      </p>

      <p>For more information, visit <button type="button" className="type-link" onClick={() => window.open('https://dudu.town')} onKeyDown={() => window.open('https://dudu.town')}  >dudu.town</button>.</p>

      <p>For sales enquiries, email us at <a href="mailto:biz@commontown.com" alt="">biz@commontown.com</a> or call us at <a href="tel:6848-8900" alt="" >6848-8900</a>.</p>
    </Fragment>
  )

  return <Sub title="Dudu" crumbs={crumbs} content={content} aside={aside} />
}

export default DuduPage
