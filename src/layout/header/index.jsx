import React from "react"
import { Link } from "gatsby"

import Logo from "~images/logo.png"
import "./css/Header.min.css"

const Header = props => {
    let { headerOverlay = false } = props
    let divClass = headerOverlay ? "headerOverlay" : ""

    return (
        <header className={divClass}>
            <div className="container">
                <input type="checkbox" className="hidden" id="headerBurger" />
                <HeaderLogo />
                <HeaderBurger />
                <HeaderLink />
            </div>
        </header>
    )
}

const HeaderLogo = () => (
    <Link id="logo" to="/" alt="Common Town">
        <img src={Logo} alt="Common Town" />
    </Link>
)

const HeaderLink = () => {
    return (
        <div className="header-links">
            {headerLinks.map(link => {
                let linkAttr = {
                    ...link,
                    children: link.alt,
                    className: `link-level-1`,
                    activeClassName: "active",
                    partiallyActive: true,
                },
                    { children = [] } = link

                return <div className={`header-link-wrapper${children.length ? ' has-child' : ''}`} key={link.key} >
                    <Link {...linkAttr} />
                    {children.length ? <div className="header-link-dropdown">
                        {children.map(sublink => {
                            let linkAttr = {
                                ...sublink,
                                children: sublink.alt,
                                className: `link-level-2`,
                                activeClassName: "active",
                            }
                            return <Link {...linkAttr} />
                        })}
                    </div> : null}
                </div>
            })}
            {/* <Search /> */}
        </div>
    )
}

const HeaderBurger = () => (
    <label className="headerBurger" htmlFor="headerBurger">
        <div className="line-wrapper">
            <span />
            <span />
            <span />
        </div>
    </label>
)

const aboutUsChildren = [
    // { key: 11, alt: "History", to: "/about-us/history/" },
    { key: 13, alt: "Key Achievements", to: "/about-us/key-achievements/" },
    { key: 12, alt: "Board Members", to: "/about-us/board-members/" },
    { key: 14, alt: "Our Culture", to: "/about-us/our-culture/" },
]

const productsChildren = [
    { key: 21, alt: "Swiiit", to: "/products/swiiit/" },
    { key: 22, alt: "CommonAcademy", to: "/products/commonacademy/" },
    { key: 23, alt: "Qoqolo", to: "/products/qoqolo/" },
    // { key: 24, alt: "Qoqolo Elderly", to: "/products/qoqolo-elderly/" },
    { key: 25, alt: "Dudu", to: "/products/dudu/" },
    // { key: 26, alt: "Dudu together", to: "/products/dudu-together/" },
    { key: 27, alt: "Vatitude", to: "/products/vatitude/" },
]

const headerLinks = [
    { key: 1, alt: "About Us", to: "/about-us/", children: [...aboutUsChildren] },
    { key: 2, alt: "Products", to: "/products/", children: [...productsChildren] },
    { key: 21, alt: "News", to: "/news" },
    { key: 3, alt: "Showcase", to: "/showcase/" },
    { key: 4, alt: "Career", to: "/career/" },
    { key: 5, alt: "Contact Us", to: "/contact-us/" },
]

export default Header
