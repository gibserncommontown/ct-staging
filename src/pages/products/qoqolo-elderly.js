import React, { Fragment } from "react"

import Sub from "~layout/sub"
import aside from "~content/products/aside"

const crumbs = [
    { text: "Products", to: "/products" },
    { text: "Qoqolo Elderly", to: "/products/qoqolo-elderly" },
]

const QoqoloElderlyPage = () => {
    let content = <Fragment>
        <h1>Elderly care management made simple.</h1>
        <h4>Streamline your elderly care services with our centralised management system.</h4>
        <p>Qoqolo Elderly is a secure centralised management system designed to improve your centre’s operational efficiency and information technology capability. It caters to both day care and home services, and helps your centre to save time, better organise and coordinate clients’ paperwork, and be more productive.</p>
        <p>Through the Integrated Referral Management System (IRMS), your staff can now easily retrieve real-time referral information for admission of clients who need intermediate or long-term care services from the Agency for Integrated Care (AIC). It combines good literacy strategies with the latest technology to propel knowledge and understanding of the language.</p>
        <p>
            With Qoqolo Elderly, your staff now has a centralised place to update client’s information, schedule appointments, take attendance, issue invoices and collect fees.
        </p>
        <p>
            For more information or sales enquiries, email us at <a href="mailto:biz@commontown.com" alt="">biz@commontown.com</a> or call us at <a href="tel:6848 8900" alt="">6848 8900</a>.
        </p>
    </Fragment>
    return (
        <Sub title="Qoqolo Elderly" crumbs={crumbs} content={content} aside={aside} />
    )
}

export default QoqoloElderlyPage
