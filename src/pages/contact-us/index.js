import React, { Fragment, createRef, useState } from "react"

import { requestXHR } from "../../library/library"

import Sub from "~layout/Sub"
import "./css/Contact.min.css"

const crumbs = [{ text: "Contact Us", to: "/contact-us" }]

const ContactUsPage = () => {
  let checkbox = createRef();
  const [showSuccess, setSuccess] = useState(false);
  const allowed = new Date() <= new Date('31 May 2020');
  const temp_contact = allowed ? <Fragment>
    <br />
    <a
      href="tel:+65 6634 6217"
      alt="Alternative Main"
      title="Alternative Main"
    >+65 6634 6217 (Valid till 31 May 2020)</a>
  </Fragment> : null;

  let content = (
    <Fragment>
      <h1>Contact Us</h1>

      <div className="contact-us-row-1">
        <div className="contact-us-form">
          <PopUpForm checkbox={checkbox} />
        </div>
        <div className="contact-us-paragraph">
          <p>
            For enquiries on our products or services, feel free to contact us via
            any of the means below:
          </p>
          <br />
          <b>Address:</b>
          <br />

          <address>
            33 Ubi Avenue 3<br />
            #08-72, Vertex (Tower A)
            <br />
            Singapore 408868
          </address>

          <br />
          <b>Phone:</b>
          <br />
          <p className="hidden" >
            Sales Enquiries / Customer Support:{" "}
            <a
              href="tel:+65 6848-8900"
              alt="Sales Enquiries / Customer Support"
              title="Sales Enquiries / Customer Support"
            >+65 6848-8900</a>
          </p>
          <p>
            <a
              href="tel:+65 6848-8900"
              alt="Main"
              title="Main"
            >+65 6848-8900 (Main)</a>
            {temp_contact}
          </p>
          <br />
          <b>E-mail:</b>
          <br />
          <p>
            Sales Enquiries:{" "}
            <a
              href="mailto:biz@commontown.com"
              alt="Sales Enquiries"
              title="Sales Enquiries"
            >
              biz@commontown.com
            </a>
            <br />Partnership Enquiries:{" "}
            <a
              href="mailto:partnership@commontown.com"
              alt="Partnership Enquiries"
              title="Partnership Enquiries"
            >
              partnership@commontown.com
            </a>
            <br />
            Customer Support:{" "}
            <a
              href="mailto:support@commontown.com"
              alt="Customer Support"
              title="Customer Support"
            >support@commontown.com</a>
          </p>
        </div>
      </div>

      <div className="contact-us-row-2">
        <div className="contact-us-map">
          <h2>Our Location</h2>
          <MapIframe />
        </div>
        <div className="contact-us-location">
          <img
            src={require("~images/location.jpg").default}
            alt="Location"
            title="Location"
            className="block margin-auto"
          />
        </div>
      </div>

      <SuccessMsg />
    </Fragment>
  )

  function MapIframe() {
    return (
      <iframe
        title="CommonTown | Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7376760513876!2d103.89199651535343!3d1.3335590619975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f3a87fa405%3A0xd78cff52f4e1c155!2sCommonTown%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1566964857159!5m2!1sen!2ssg"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
      ></iframe>
    )
  }

  function PopUpForm() {

    let fields = [
      {
        label: '',
        type: 'hidden',
        name: 'form_984',
        required: false,
        placeholder: '',
        value: ''
      },
      {
        label: '',
        type: 'hidden',
        name: 'func',
        required: false,
        placeholder: '',
        value: 'submit'
      },
      {
        label: '',
        type: 'hidden',
        name: 'id',
        required: false,
        placeholder: '',
        value: '984'
      },
      {
        label: "First Name",
        type: "text",
        name: "field1850",
        required: true,
        placeholder: "Adam",
        value: '',
      },
      {
        label: "Last Name",
        type: "text",
        name: "field1851",
        required: "",
        placeholder: "Joe",
        pattern: "",
        value: '',
      },
      {
        label: "Email Address",
        type: "email",
        name: "field1854",
        required: true,
        placeholder: "name@domain.com",
        pattern: "",
        value: '',
      },
      {
        label: "Contact No.",
        type: "tel",
        name: "field1853",
        required: false,
        placeholder: "+65 1234 5678",
        pattern: "[0-9]{2} [0-9]{4} [0-9]{4}",
        value: '',
      },
      {
        label: "Designation",
        type: "telephone",
        name: "field1855",
        required: true,
        placeholder: "Head of Human Resource",
        pattern: "",
        value: '',
      },
      {
        label: "Company Name",
        type: "text",
        name: "field1856",
        required: true,
        placeholder: "Example Company Name",
        pattern: "",
        value: '',
      },
      {
        label: "Enquiry",
        type: "textarea",
        name: "field1857",
        required: true,
        placeholder: "We would like to enquire about ...",
        pattern: "",
        value: '',
      },
    ]

    function FormBody() {
      return <form
        id="contact-form"
        method="post"
        encType="multipart/form-data"
        action="/cos/o.x?c=/qws/campaign&func=view&ptid=3009844&cid=984"
        className="contact-us-form"
      >
        <h3>General Enquiries</h3>
        {fields.map(field => {
          let { label, type, name, required, placeholder, pattern, value = '' } = field
          required = required ? "required" : ""

          return (
            <div key={name} className={`${required} field-group field-type-${type}`}>
              <label htmlFor={`h-${name}`}>{label}</label>
              {type !== "textarea" ? (
                <input
                  id={`h-${name}`}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  pattern={pattern}
                  required={required ? true : false}
                  defaultValue={value}
                />
              ) : (
                <textarea
                  id={`h-${name}`}
                  name={name}
                  placeholder={placeholder}
                  pattern={pattern}
                  required={required ? true : false}
                  defaultValue={value}
                />
              )}
            </div>
          )
        })}
      </form>
    }

    function FormContainer() {
      // const state_control = "contact-us-overlay-control"
      return <Fragment>
        {/* <input
          type="checkbox"
          className="hidden"
          id={state_control}
          ref={checkbox}
        /> */}
        <div className="contact-us-overlay">
          <div className="contact-us-container">
            {/* <label htmlFor={state_control} className="contact-us-cancel" /> */}
            <button
              id="contact-form-submit"
              form="contact-form"
              type="submit"
              className="btn btn-block btn-primary btn-reverse default-edge"
              onClick={e => {
                e.preventDefault()
                e.nativeEvent.stopImmediatePropagation()
                handleSubmit()
              }}
            >
              Submit
            </button>
            <FormBody />
          </div>
        </div>
      </Fragment>
    }

    return <FormContainer />
  }

  function handleSubmit() {
    // Handle Button Loading
    let submitBtn = document.getElementById("contact-form-submit")
    submitBtn.classList.add("loading")

    let fields = document.querySelectorAll("#contact-form input, #contact-form textarea")
    let dataset = {};
    let error = false;
    Object.values(fields).forEach(i => {
      let { type, name, value, required } = i;
      dataset[name] = value;

      if (value === '' && required === true) {
        error = true;
        let have_error = document.querySelector(`*[name='${name}']`);
        have_error.classList.add('has-error');
        have_error.onfocus = function () {
          this.classList.remove('has-error');
        }
      }

      if (type === 'email' && !validateEmail(value)) {
        error = true;
        i.classList.add('has-error');
        i.onfocus = function () {
          this.classList.remove('has-error');
        }
      }
    });

    if (!error) {
      let options = {
        method: 'post',
        rawResult: true,
        data: { ...dataset }
      }

      let response = requestXHR(`https://commontown3.commonwork.net/cos/o.x?c=/qws/campaign&func=view&ptid=3009844&cid=984&key=j1FNN565hj2kj12h3hEF12hj312hj3123123ss012CCQ831023`, options)
      response.then(() => {
        submitBtn.classList.remove("loading")
        Object.values(fields).forEach(i => { i.value = ''; })
        //checkbox.current.checked = false;
        setSuccess(true);
      })
    }
    else {
      submitBtn.classList.remove("loading")
    }


  }

  function validateEmail(email) {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function SuccessMsg() {
    return <div className={`contact-us-success-message ${showSuccess ? 'show' : ''}`} >

      <div className="success-message-dialog" >
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <p className="text-center">Thank you very much for your enquiry! We will be contacting you soon.</p>
        <p>
          <button type="button" onClick={() => setSuccess(false)} className="btn btn-primary" >Close</button>
        </p>
      </div>

    </div >
  }

  return (
    <Sub
      title="Contact Us"
      crumbs={crumbs}
      content={content}
    />
  )
}

export default ContactUsPage
