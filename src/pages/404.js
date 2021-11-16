import React, { Fragment } from "react"

import Sub from "~layout/Sub"

const NotFoundPage = () => {
  let content = (
    <Fragment>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Fragment>
  )
  return <Sub title="404: Not found" content={content} />
}

export default NotFoundPage
