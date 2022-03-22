import React, { Fragment } from "react"

import Sub from "~layout/sub"
import feeds from "~content/about-us/key-achievements"

import "~content/about-us/css/Key-achievements.min.css"
import Timeline from "./timeline"

const crumbs = [
  { text: "About Us", to: "/about-us" },
  { text: "Key Achievements", to: "/about-us/key-achievements" },
]
const KeyAchievementsPage = () => {
  let content = (
    <Fragment>
      <div className="text-center">
        <h1>Key Achievements</h1>
        <div className="key-achievements-description">
          {/* <p>
            We help our clients to meet their diverse challenges with tailored portal solutions. At the Ministry of Education (MOE), we developed a platform that houses all MOE-HQ Teaching and Learning digital contents that are accessed by teachers and students. This system emphasizes an integrated content and user management mechanism and provides for the rapid on-going growth of digital assets at national level.
          </p> */}
        </div>
      </div>
      <Timeline feeds={feeds} />
    </Fragment>
  )

  return (
    <Sub
      title="Key Achievements | CommonTown"
      crumbs={crumbs}
      content={content}
    />
  )
}

export default KeyAchievementsPage
