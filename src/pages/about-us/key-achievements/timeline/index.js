import React from "react"

import PropTypes from "prop-types"

import keygen from "keygenerator"

import "./css/Timeline.min.css"

const Timeline = props => {
  let { feeds = [] } = props

  let timelineContent = feeds.map((feed, index) => {
    let reIndex = index + 1 // Position is based on this so it doesn't matter if sytle is not updated
    let positionClass =
      reIndex % 2 === 0 ? "feed-align-left" : "feed-align-right"
    let { year, description } = feed
    let key = keygen._()

    return (
      <div key={key} className={`feed-section ${positionClass}`}>
        <div className="feed-year" children={<span>{year}</span>} />
        <div className="feed-seperator" />
        <div className="feed-description" children={description} />
      </div>
    )
  })

  return <div className="timeline">{timelineContent}</div>
}

Timeline.propTypes = {
  feeds: PropTypes.array.isRequired,
}

export default Timeline
