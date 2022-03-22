import React, { Fragment } from "react"
import Evolve from "../home/components/05-Evolve"
import keygen from "keygenerator"

import Sub from "~layout/sub"
import { Overwrite } from '~styled'
import "./css/Career.min.css"

const crumbs = [{ text: "Career", to: "/career" }]

const handleChecked = e => {
  e.preventDefault();
  let id = e.target.getAttribute('for');
  id = id ? id : e.target.parentNode.getAttribute("for");

  if (id) {
    let box = document.getElementById(id)
    let nValue = !box.checked
    box.checked = nValue
  }

}

const CareerPage = () => {
  let content = (
    <Fragment>
      <h1>At CommonTown, we don’t just push boundaries. <br /> We scale new heights.</h1>
      <Overwrite>
        <Evolve /><br /><br />
      </Overwrite>
      <div className="career-layout">
        <div className="career-description">
          <p>
            With every software application we create, we are helping people to learn faster and better. Our work is not only creative, it’s meaningful. If you think developing software application is fun, wait till you join our team.
          </p>
          <br />
          <p>
            Come and make a difference with us. <br />
            We are looking for:
          </p>
        </div>

        <div className="career-accordians">
          {careerContent.map(department => {
            let { title, items } = department
            let pkey = keygen._()


            return (
              <div className="career-group" key={pkey}>
                <h5>{title}</h5>
                <div className="accordion-items">
                  {items.map(item => {
                    let key = keygen._()
                    let { title, description } = item
                    let id = `acc-${key}`

                    return (
                      <div key={key}>
                        <input
                          type="radio"
                          name="same-name"
                          className="accordion-control hidden"
                          id={id} />
                        <button type="button" htmlFor={id} onClick={handleChecked} onKeyDown={handleChecked} >
                          {title}
                          <div className="symbol" />
                        </button>

                        <div
                          className="accordion-description"
                          children={description}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )

            // let { title, description } = each
            // return (
            //   <div className="career-block">
            //     <h3>{title}</h3>
            //     {description}
            //     <br />
            //     <a
            //       href={`mailto:career@commontown.com?subject=Application for ${title}`}
            //       title={title}
            //       alt={title}
            //       className="btn btn-primary"
            //     >
            //       Apply now
            //     </a>
            //   </div>
            // )
          })}
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <p>
        Please forward your detailed resume and photo to career@commontown.com and state your:
      </p>
      <ul>
        <li>Reasons for leaving (past &amp; present employment)</li>
        <li>Last drawn salary</li>
        <li>Expected salary</li>
        <li>Date of availability</li>
      </ul>
    </Fragment>
  )
  return <Sub title="Career" crumbs={crumbs} content={content} />
}

const PMContent = {
  title: "PROJECT MANAGER",
  items: [
    {
      title: "Group Project Manager",
      description: (
        <Fragment>
          <Fragment>
            <u>Responsibilities:</u>
            <ul>
              <li>Plan and manage the development and implementation of IT solutions and applications</li>
              <li>Plan, implement and track development schedules leading to on time and cost delivery</li>
              <li>Plan and utilize resources with maximum efficiency and effectiveness</li>
              <li>Drive process and standard and prepare documentation</li>
              <li>Coaching of the junior project and product managers</li>
            </ul>
            <u>Required Skills/Qualifications:</u>
            <ul>
              <li>Degree in Information Technology or business discipline equivalent</li>
              <li>Candidates with relevant project management and tech certifications are preferred (eg. PMP, Scrum)</li>
              <li>IT professional with at least 8 years&rsquo; experience in project management</li>
              <li>Familiar with Project Management methodology</li>
              <li>Experience in handling government IT projects will be a big plus</li>
              <li>Strong written and oral communication skills</li>
              <li>Be proactive in identifying issues and recommending solutions</li>
            </ul>
          </Fragment>
        </Fragment>
      )
    },//
    {
      title: "IT Project Coordinator / Project Manager (Multiple Openings)",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>
              Plan and manage the development and implementation of IT solutions
              and applications.
            </li>
            <li>
              Plan, implement and track development schedules leading to on time
              and on cost delivery.
            </li>
            <li>
              Plan and utilise resources with maximum efficiency and
              effectiveness.
            </li>
            <li> Drive process and standard and prepare documentation.</li>
          </ul>
          <u>Required Skills/Qualifications:</u>
          <ul>
            <li>
              Diploma/Degree in Computer Science/Information Technology or
              equivalent.
            </li>
            <li>
              IT professional with at least 2 years’ experience in project
              management.
            </li>
            <li>Experience in handling Software Application projects.</li>
            <li>Familiar with Project Management methodology.</li>
            <li>Strong written and oral communication skills.</li>
            <li>
              Be proactive in identifying issues and recommending solutions.
            </li>
            <li>Fresh graduates are welcomed, training provided.</li>
          </ul>
        </Fragment>
      ),
    },//
  ],
}

const ENContent = {
  title: "ENGINEER",
  items: [
    {
      title: 'Backend Software Engineer',
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>Analyse, design, develop and implement mobile and/or web-based applications.</li>
            <li>Develop Front-end and/or back-end applications.</li>
            <li>Support product implementation and maintenance.</li>
          </ul>
          <u>Requirements:</u>
          <ul>
            <li>Diploma/Degree in Computer Science</li>
            <li>Strong programming skills and good problem-solving skills</li>
            <li>At least 2 years of extensive experience in 1 or more of these toolsets:<ol>
              <li>PHP, Nodejs, MySQL, JSON and Bootstrap, or</li>
              <li>Java technologies (Spring Framework, RESTful/SOAP)</li>
            </ol>
            </li>
            <li>Working experience with these tools: NPM, Docker, Git is an advantage</li>
            <li>Knowledge of AWS development/DevOps is an advantage</li>
            <li>Proactive, able to multitask and work independently.</li>
          </ul>
        </Fragment>
      )
    },
    {
      title: "Cloud Engineer",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>Design, configuration and management of systems and cloud infrastructure (AWS)</li>
            <li>Ensure day-to-day operations and system maintenance are performed</li>
            <li>Conduct routine audits of environments to ensure compliance</li>
            <li>Automating all aspect of provision, monitoring, patching etc where possible</li>
            <li>Prepare manuals and technical documents</li>
          </ul>
          <u>Required Skills/Qualifications:</u>
          <ul>
            <li>Diploma/Degree in Computer Science</li>
            <li>Minimum 2 years experience in system administration (Linux) and cloud engineering</li>
            <li>Experience in Cloud AWS VPC, IAM, S3, EC2, Cloudtrail, cloudwatch</li>
            <li>Knowledge in virtualisation, cloud and container technology (VMware vSphere, AWS, Docker, KVM)</li>
            <li>Network experience with switches, routers, firewalls, VPNs, and load balancer - Capable of writing technical documentation</li>
            <li>Work independently and be self-motivated to meet the needs of working in a virtual team environment.</li>
          </ul>
        </Fragment>
      ),
    },
    {
      title: "Software Engineer",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>
              Analyse, design, develop and implement software applications.
            </li>
            <li>Develop Front-end and/or back-end applications.</li>
            <li>Support product implementation and maintenance.</li>
          </ul>
          <u>Required Skills/Qualifications:</u>
          <ul>
            <li>Diploma/Degree in Computer Science.</li>
            <li>Strong programming skills and good problem solving skills.</li>
            <li>
              At least 3 years of extensive experience in ONE OR MORE of these
              tool sets:
            </li>
          </ul>
          <ol>
            <ol>
              <li>ReactJS/Redux, CRA/DVA, React-Router, MUI/Antd, or&nbsp;</li>
              <li>PHP, MySQL, JSON and Bootstrap, or&nbsp;</li>
              <li>Golang with ML/DA packages.</li>
            </ol>
          </ol>
          <ul>
            <li>
              Working experience with these tools: Yarn/NPM, Docker, Git, SVM.
            </li>
            <li>Knowledge of GraphQL, AWS, Alicloud, R is an advantage.</li>
            <li>Proactive, able to multitask and work independently.</li>
          </ul>
        </Fragment>
      ),
    },
    {
      title: "Software Engineer (ReactJS)",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>Develop web-based apps using ReactJS framework.</li>
            <li>Contribute ideas and innovate in a team environment.</li>
            <li>Support product implementation and maintenance.</li>
          </ul>
          <u>Required Skills/Qualifications:</u>
          <ul>
            <li>Degree in Computer Science.</li>
            <li>
              At least 3-year working experience and at least 1-year intensive
              development using ReactJS/Redux.
            </li>
            <li>
              Proficiency with React, Npm and Webpack in cross platform
              development.
            </li>
            <li>
              Strong computer science fundamentals, programming skills and good
              problem solving skills.
            </li>
            <li>
              Proactive and able to perform effectively in an Agile development
              team.
            </li>
            <li>
              Good working knowledge of NoSQL, MySQL, Golang and PHP is a plus.
            </li>
          </ul>
        </Fragment>
      ),
    },
  ],
}

const DEContent = {
  title: "DESIGNER",
  items: [
    {
      title: "Senior Web Designer",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>
              Responsible for conceptualization and design of solutions from
              concept to completion.
            </li>
            <li>
              Leading the creative aspects of a project and guide the user
              interface design with strong UX acumen.
            </li>
            <li>Pitching for projects with new or existing clients.</li>
            <li>
              Work with developers and project manager for implementation of
              designs, project goals and feasibility to create highly detailed
              design specification.
            </li>
          </ul>
          <u>Required Skills/Qualifications:</u>
          <ul>
            <li>
              Diploma/Bachelor Degree/Professional Degree in a related field.
            </li>
            <li>At least two years relevant working experience.</li>
            <li>
              Strong understanding of responsive web design and web development.
            </li>
            <li>
              Willing to embrace new challenges and sensitive to new trends in
              web design.
            </li>
            <li>
              Be accountable, organised, efficient and have attention to
              details.
            </li>
            <li>Experienced in design of creative websites and animation.</li>
            <li>Working knowledge of HTML5, CSS3 and RWD.</li>
            <li>Well-versed in Adobe Creative Suite.</li>
          </ul>
        </Fragment>
      ),
    },
    {
      title: "UXD Consultant",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>
              Responsible for conceptualization and design of UI solutions from
              concept to completion.
            </li>
            <li>
              Leading the UX design aspects of projects and execute tactical
              steps to validate the proposed solutions.
            </li>
            <li>
              Managing and facilitating UXD process which include card sorting,
              focus group study, user survey, heuristic evaluation, usability
              testing, etc.
            </li>
            <li>
              Creating UI prototypes to illustrate and validate proposed UX
              design.
            </li>
            <li> Pitching for projects with new or existing clients.</li>
            <li>
              Work with developers and project manager for implementation of
              designs, project goals and feasibility to create highly detailed
              design specification.
            </li>
          </ul>
          <u>Requirements</u>
          <ul>
            <li>Bachelor Degree/Professional Degree in a related field.</li>
            <li> At least two years relevant working experience.</li>
            <li>
              {" "}
              Strong understanding of human-computer interaction theories.
            </li>
            <li>
              Willing to embrace new challenges and sensitive to new trends in
              web design.
            </li>
            <li>Well-versed in UX prototyping applications.</li>
            <li>
              Good command of written English and strong presentation skills.
            </li>
          </ul>
        </Fragment>
      ),
    },
  ],
}

const SAContent = {
  title: "SALES SUPPORT",
  items: [
    // {
    //   title: "Support Engineer",
    //   description: (
    //     <Fragment>
    //       <u>Responsibilities:</u>
    //       <ul>
    //         <li>Document troubleshooting and problem resolution steps.</li>
    //         <li>Assist in website content migration and testing.</li>
    //         <li>Proactive approach towards solving customer issues.</li>
    //         <li>
    //           Provide excellent customer services to ensure total customer
    //           satisfaction.
    //         </li>
    //       </ul>
    //       <u>Required Skills/Qualifications:</u>
    //       <ul>
    //         <li>Diploma/Degree in IT related studies.</li>
    //         <li>Possess good verbal communication and interpersonal skills.</li>
    //         <li>Prior experience in IT Helpdesk is an advantage.</li>
    //         <li>Experience with website development and HTML.</li>
    //         <li>MySQL database and PHP experience is a plus.</li>
    //         <li>Committed, responsive and dynamic working attitude.</li>
    //       </ul>
    //     </Fragment>
    //   ),
    // },


    {
      title: "Sales Executive / Manager",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>
              Build relationship and identify sales opportunities within
              assigned accounts.
            </li>
            <li> Manage and source for new business opportunities/accounts.</li>
            <li>Perform account servicing and business development.</li>
            <li> Prepare quotations and proposals.</li>
            <li>
              Update sales funnel and submit sales reports comprehensively and
              timely.
            </li>
            <li>Achieve sales targets.</li>
          </ul>
          <u>Required Skills / Qualifications:</u>
          <ul>
            <li>Diploma/Degree in IT/ Business or related fields.</li>
            <li> At least 2 years relevant experience.</li>
            <li> With software solutions sales experiences preferred.</li>
            <li>
              Experience in handling education sector accounts will have added
              advantage.
            </li>
            <li> Proficient with Microsoft Office and web-based solutions.</li>
            <li>Good interpersonal &amp; communication skills.</li>
            <li>
              Strong client management &amp; account servicing experience.
            </li>
            <li>
              Self-driven and independent, but ability to work in cross- team
              effort.
            </li>
            <li> Earn excellent sales commission.</li>
          </ul>
        </Fragment>
      ),
    },
  ],
}

const BDContent = {
  title: "Business Development",
  items: [
    {
      title: "Business Development Manager",
      description: (
        <Fragment>
          <u>Responsibilities:</u>
          <ul>
            <li>Attend to sales enquiries, write proposals and generate quotations</li>
            <li>Engage clients by presenting products and solutions</li>
            <li>Maintain existing client accounts and develop new clientele base</li>
            <li>Prepare sales reports, sales documents and coordinate the sales process</li>
            <li>Develop market development strategy for new sectors and new markets</li>
            <li>Execute related duties required in the sales/business development process</li>
          </ul>
          <u>Requirements:</u>
          <ul>
            <li>Diploma or Bachelor degree in any discipline</li>
            <li>Minimum 2 years of experience from a similar position, preferably in the education technology or related field</li>
            <li>Experience with business sales and a proven track record</li>
            <li>Proactive, disciplined, self-motivated individual with a passion for developing new business</li>
            <li>Strong planning, organizational and decision-making skills</li>
            <li>Possess excellent written and verbal communication, negotiation and presentation skills</li>
          </ul>
        </Fragment>
      )
    }
  ]
}

const careerContent = [PMContent, BDContent, ENContent, DEContent, SAContent]

export default CareerPage
