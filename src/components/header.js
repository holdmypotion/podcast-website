import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-between items-center bg-primary-300 text-white">
      <div>
        <h1 className="text-2xl">
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
}

export default Header
