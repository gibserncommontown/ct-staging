import React, { Fragment } from "react"

import Sub from "~layout/sub"
import keygen from "keygenerator"

import aside from "~content/about-us/aside"

import "~content/about-us/css/BoardMembers.min.css"

const crumbs = [
  { text: "About Us", to: "/about-us" },
  { text: "Board Members", to: "/about-us/board-members" },
]

const BoardMembersPage = () => {
  let content = (
    <Fragment>
      <h1>Board Members</h1>

      <div className="board-content">
        {boardContent.map((board, index) => {
          let { name, post, title, description, key = keygen._() } = board
          let boardStyle = { order: index }
          let descriptionStyle = { order: index + boardContent.length }
          return (
            <Fragment>
              <input
                type="radio"
                name="triggerDescription"
                className="hidden"
                id={`trigger-${key}`}
              />

              <label
                key={`board-${key}`}
                className="board"
                style={boardStyle}
                htmlFor={`trigger-${key}`}
              >
                <div className="board-name" children={name} />
                <div className="board-post" children={post} />
              </label>

              <div
                key={`description-${key}`}
                className="board-description"
                style={descriptionStyle}
              >
                {title}
                {description}
              </div>
            </Fragment>
          )
        })}
      </div>
    </Fragment>
  )

  return (
    <Sub
      title="Board Members"
      content={content}
      aside={aside}
      crumbs={crumbs}
    />
  )
}

const boardContent = [
  {
    name: "Joel Loo",
    post: "Founder and CEO",
    title: (
      <div className="board-title">
        JOEL
        <br />
        LOO
      </div>
    ),
    description: (
      <Fragment>
        <p>
          Joel Loo has over 13 years of experience in research and development, and his expertise lies in creating innovative internet solutions. Passionate about <b>using technology to revolutionise learning</b>, he founded CommonTown in 1999 and turned it into a profit-making company in three short years.
        </p>
        <p>
          Prior to CommonTown, Joel was a pioneer at the Institute of Systems Science (ISS) where he developed several ground-breaking intelligent systems in collaboration with Singapore Museum, Singapore Airlines and JTC. He also managed several R&D projects involving advanced programming languages and courseware. In 1995, he spearheaded ISS’s partnership with Times Publishing Group and led a team to produce a series of courseware titles which won the Singapore Designers’ Award (Merit) the following year.
        </p>
        <p>
          Joel has also worked in the United States, pioneering research in online collaborative technologies at the Microelectronics and Computer Corporation (MCC) headquarters in Austin, Texas. He graduated from the National University of Singapore in 1986 and holds a Bachelor of Science degree in Computer Science.
        </p>
      </Fragment>
    ),
  },

  {
    name: "Evelyn Chew",
    post: "Co-founder and Chief Technical Officer",
    title: (
      <div className="board-title">
        Evelyn
        <br />
        Chew
      </div>
    ),
    description: (
      <Fragment>
        <p>
          Evelyn Chew co-founded CommonTown with Joel Loo in 1999 and transformed it from a dotcom with $0 revenue to a successful web portal and e-learning company with a reputation for being swift, innovative and nimble. Since then, she has led major repository projects including MOE edumall2.0 and MOE iSHARE System. Her expertise in large federated repositories and interoperable solutions, and her deep knowledge of the wide and complex range of internet technologies are keys to the success of the company.
        </p>
        <p>
          Prior to CommonTown, Evelyn was with Kent Ridge Digital Labs where she spent six years doing research and development work. Evelyn was also the lead programmer in the Times Publishing CDROM courseware project, which won the Singapore Designers’ Award in 1996.
        </p>
        <p>
          Evelyn completed her Bachelor of Science in 1992 and received her Masters in Knowledge Engineering in 2001.
        </p>
      </Fragment>
    ),
  },

  {
    name: "Wong Seng Hon",
    post: "Board Member",
    title: (
      <div className="board-title">
        Wong
        <br />
        Seng Hon
      </div>
    ),
    description: (
      <Fragment>
        <p>
          Wong Seng Hon has been a board member of CommonTown since its founding, and brings with him over 30 years of experience in information technology management and business venture development. He is also a board member of BuzzCity, and was consultant to the National Library Board for its Library 21 master plan and business development. From 1999 to 2002, he ran the Incubator at Kent Ridge Digital Labs which spun off more than a dozen new companies funded by venture capital and corporate investors.
        </p>
        <p>
          Seng Hon began his career at the Ministry of Defence where he managed a portfolio of advanced information technology programmes such as office automation, networking, computer aided instruction and combat simulation systems.
        </p>
        <p>
          Thereafter, he joined the National Computer Board as Senior Director. He supported the Board’s role as Singapore’s IT master-planner by setting up the environment scanning and corporate planning systems, and spent four years as the Board's representative in Silicon Valley.
        </p>
        <p>
          Seng Hon also served as the CEO of Sembawang Media from 1995 to 1998, starting up a string of Internet businesses, including Pacific Internet, for Sembawang Corporation. He seed-funded pioneering Internet companies like Silkroute Ventures and Information Frontiers, and was a founder and board member of Asia Internet Holding.
        </p>
        <p>
          Seng Hon has an MA from Cambridge University and a MSc specialising in Operational Research and Industrial Engineering from the National University of Singapore.
        </p>
      </Fragment>
    ),
  },

  {
    name: "Tan Peck Joo",
    post: "Board Member",
    title: (
      <div className="board-title">
        Tan
        <br />
        Peck Joo
      </div>
    ),
    description: (
      <Fragment>
        <p>
          Peck Joo is a top-level leader with a multi-faceted record of business experiences in Asia Pacific. She has a unique profile because she has assumed multiple results-driven roles in auditing, finance, private equity funds, business acquisitions and development, franchising, and general management; across a diversified portfolio of industries including education, healthcare, O2O travel, traditional &amp; digital media, FMCG, F&amp;B retail, real estate, white goods, semiconductors and risk assurance. Peck Joo also has a wealth of operational experiences in MNCs listed on NYSE, NASDAQ, ASX, IDX, SGX, Government-linked entities, private entities, franchisees and start-ups. Very well travelled, she has moved with job and lived in 8 cities in ASEAN, China, India, and UK. Hence Peck Joo possesses deep understanding of cultural nuances throughout Asia Pacific, adopting a different stroke for different folk philosophy.
        </p>
      </Fragment>
    ),
  },
]

export default BoardMembersPage
