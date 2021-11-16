import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import aside from "~content/products/aside"

import { HeadingIcon } from "~styled"

const crumbs = [
  { text: "Products", to: "/products" },
  { text: "Qoqolo", to: "/products/qoqolo" },
]

const QoqoloPage = () => {
  let content = (
    <Fragment>
      <HeadingIcon>
        <img src={require("~images/products/qoqolo.png").default} alt="Qoqolo" title="Qoqolo" />
      </HeadingIcon>
      <h1>Smart solutions for your pre-school.</h1>
      <h4>Paperless documentation. More communication.</h4>
      <p>Qoqolo is a preschool management system that helps to lessen teachers’ workload through paperless documentation and communication. It is easy to use, provides paperless storage and supports multi-languages.</p>

      <p>
        With Qoqolo, teachers can organise students’ information such as attendance reports and health records, generate progress reports, share photos and class activities with parents, as well as manage staff information and centre operations.
      </p>

      <p>
        Teachers are more productive when they spend less time documenting. They are also able to communicate better and more effectively with parents using this portal.
      </p>

      <h5>Student Management</h5>

      <p>
        <img src={require('~images/products/qql 1.png').default} alt="Qoqolo 1" className="margin-auto block img-responsive" />
      </p>

      <h5>Parent Engagement</h5>


      <p>
        <img src={require('~images/products/qql2.png').default} alt="Qoqolo 1" className="margin-auto block img-responsive" />
      </p>

      <p>To learn more, visit <button type="button" className="type-link" onClick={() => window.open('https://www.qoqolo.com')} onKeyDown={() => window.open('https://www.qoqolo.com')} >www.qoqolo.com</button> or <button type="button" className="type-link" onClick={() => window.open('https://www.facebook.com/CTqoqolo')} onKeyDown={() => window.open('https://www.facebook.com/CTqoqolo')}  >Qoqolo’s Facebook</button>.</p>

      <p>For sales enquiries, email us at <a href="biz@commontown.com" alt="">biz@commontown.com</a> or call us at <a href="tel:68488900" alt="">6848 8900</a>.</p>
    </Fragment>
  )


  return <Sub title="Qoqolo" crumbs={crumbs} content={content} aside={aside} />
}

export default QoqoloPage
