import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div>
    <ul className="flex">
      <li className="pr-5">
        <Link to="/">Episodes</Link>
      </li>
      <li className="pr-5">
        <Link to="/">About</Link>
      </li>
      <li className="pr-5">
        <Link to="/">Contact Us</Link>
      </li>
      <li className="pr-5">
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
