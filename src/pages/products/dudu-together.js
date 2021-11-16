import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import aside from "~content/products/aside"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "Dudu Together", to: "/products/dudu-together" },
]

const DuduTogetherPage = () => {
  let content = (
    <Fragment>
      <h1>Teach better with Dudu Together.</h1>
      <h4>Literacy strategies with proven results.</h4>
      <p>Dudu Together is our Chinese teaching system specifically designed for the 21st century Chinese language educator. It combines good reading literacy strategies with the latest technology to propel knowledge and understanding of the language.</p>
      <p>
        Dudu Together is the result of extensive research done by CommonTown in collaboration with <button type="button" className="type-link" onClick={() => window.open('https://dudu.town/ddt/research/consultant')} onKeyDown={() => window.open('https://dudu.town/ddt/research/consultant')} >Associate Professor Tan Chee Lay</button>, an accomplished Chinese language educator and writer. The system equips educators with effective teaching strategies, instructional materials and quality resources to help students to develop listening, reading comprehension, speaking and writing skills.
      </p>
      <p>Through Dudu Together’s comprehensive strategies and digital learning platform, children are empowered to develop their vocabulary, analyse texts, ask questions, express their ideas and relate the text to other readings or personal experiences.</p>
      <p>
        <img src={require("~images/products/dudutgt.png").default} className="img-responsive margin-auto block" alt="Dudu Together" />
      </p>

      <p>For more information, visit <button type="button" className="type-link" onClick={() => window.open('https://dudu.town/ddt')} onKeyDown={() => window.open('https://dudu.town/ddt')} >dudu.town/ddt</button>.</p>

      <p>For sales enquiries, email us at <a href="mailto:biz@commontown.com" alt="" >biz@commontown.com</a> or call us at <a href="tel:6848-8900" alt="">6848-8900</a>.</p>
    </Fragment>
  )
  return (
    <Sub
      title="Dudu Together"
      crumbs={crumbs}
      content={content}
      aside={aside}
    />
  )
}

export default DuduTogetherPage
