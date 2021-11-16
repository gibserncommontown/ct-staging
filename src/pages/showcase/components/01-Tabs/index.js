import React, { createRef } from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import keygen from "keygenerator"

import "./css/tab.min.css"

const Tab = props => {

  let { tabdata = [], active = '' } = props,
    tabLinks = tabdata.map(tab => (
      <Link to={tab.to} alt={tab.title} key={keygen._()} activeClassName="active" className={active === tab.title ? 'active' : ''} >
        {tab.title}
      </Link>
    )),
    ref = createRef()

  return <div className="tab-Wrapper">
    <div className="label">Show: </div>
    <div className="tabs" role="button" tabIndex={0} ref={ref} onClick={() => toggleClass()} onKeyDown={() => toggleClass()} >{tabLinks}</div>
  </div>

  function toggleClass() {
    ref.current.classList.toggle('focus')
  }
}


Tab.propTypes = {
  tabdata: PropTypes.array.isRequired,
}

export default Tab
