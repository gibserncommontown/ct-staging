import React, { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import keygen from "keygenerator"

import "./css/AsideDiv.min.css"

const AsideDiv = props => {
  let { title, items, footer } = props.aside

  let nAsideHeader =
    typeof title === "undefined" ? null : (
      <div className="aside-header" children={title} />
    )
  let nAsideBody = <div className="aside-body">{buildAside(items)}</div>
  let nAsideFooter =
    typeof footer === "undefined" ? null : (
      <div className="aside-footer" children={footer} />
    )

  let nAsideToggler = (
    <label className="aside-toggler" htmlFor="toggle-aside">
      <div className="aside-open-icon">
        <span />
        <span />
        <span />
      </div>

      <div className="aside-close-icon">
        <div>
          <span />
          <span />
        </div>
      </div>
    </label>
  )

  return (
    <Fragment>
      <input type="checkbox" className="hidden" id="toggle-aside" />
      <aside className="aside">
        <div className="aside-container">
          {nAsideHeader}
          {nAsideBody}
          {nAsideFooter}
        </div>
      </aside>
      {nAsideToggler}
    </Fragment>
  )
}

const buildAside = (aside, level = 1) => {
  return aside.map(a => {
    let { title, to, child } = a
    let key = keygen._()
    let deepLevel = level + 1

    let Anchor = () => {
      let linkAttr = {
        to,
        alt: title,
        children: title,
        activeClassName: "active",
        partiallyActive: child.length ? true : false,
      }

      let link = <Link {...linkAttr} />

      let inputAttr = {
        className: "hidden",
        type: "checkbox",
        id: `toggle-${key}`,
      }

      if (child.length) {
        return (
          <Fragment>
            <input {...inputAttr} />
            {link}
            <label className="toggler" htmlFor={`toggle-${key}`}>
              <span />
              <span />
            </label>

            <div className={`aside-group aside-group-level-${deepLevel}`}>
              {buildAside(child, deepLevel)}
            </div>
          </Fragment>
        )
      } else return link
    }

    let anchorGroup = (
      <div key={key} className={`aside-link-wrapper aside-level-${level}`}>
        <Anchor />
      </div>
    )

    return anchorGroup
  })
}

AsideDiv.propTypes = {
  aside: PropTypes.object.isRequired,
}

export default AsideDiv
