import React from "react"

import keygen from "keygenerator"

import "./css/TabContent.min.css"

const TabContent = props => {
  let { bodyContent = [] } = props
  let content = bodyContent.map(each => {
    let { name, link, type, cover } = each
    let key = keygen._()

    cover = typeof cover === "string" ? cover.trim() : cover.default.trim();
    cover = encodeURI(cover);
    // cover = cover.replace('http:', 'https:');
    cover = 'url(\'' + cover + '\')';

    let anchorAttr = {
      key: `aa-${key}`,
      className: "tabContent-block",
      href: link,
      title: name,
      target: link.indexOf('http') === 0 ? "_blank" : '',
      //   style: { backgroundImage: `url(${hover})` },
    }

    let thumbnailAttr = {
      key: `ta-${key}`,
      className: "tabContent-thumbnail",
      style: { backgroundImage: cover },
      children:
        (typeof type !== "undefined" ? (
          <div className={`tabContent-tag hidden ${type}`}>
            {type.toString().replace("-", " ")}
          </div>
        ) : null),
    }

    let nameAttr = {
      children: name,
      className: "tabContent-name",
    }

    if (link === '#' || link === '/#') return (
      <div key={`static-${key}`} className="tabContent-block" >
        <div {...thumbnailAttr} />
        <div {...nameAttr} />
      </div>
    )
    else return (
      <a {...anchorAttr} key={`link-${key}`} >
        <div {...thumbnailAttr} />
        <div {...nameAttr} />
      </a>
    )
  })

  return <div className="tabContent">{content}</div>
}

export default TabContent
