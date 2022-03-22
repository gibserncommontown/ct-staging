import React from "react"
import { Link } from "gatsby"
import "./css/Breadcrumbs.min.css"

const BreadcrumbsComponent = props => {
  const crumbs = [...props.crumbs]

  if (crumbs.length === 0)
    return null


  crumbs.unshift({ text: "Home", to: "/" })

  const list = crumbs.map(crumb => (
    <Link
      key={crumb.to}
      to={crumb.to}
      alt={crumb.text}
      children={crumb.text} />
  ))

  return (
    <div className="container">
      <div className="breadcrumbs_">{list}</div>
    </div>
  )
}

export default BreadcrumbsComponent
