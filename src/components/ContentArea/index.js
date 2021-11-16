import React from "react"

import "./css/ContentArea.min.css"

const ContentArea = props => {
  let { children, pathClass } = props
  return (
    <div className={`contentArea container ${pathClass}`} children={children} />
  )
}
export default ContentArea
