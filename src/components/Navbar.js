import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar-logo">
          <Link to="/">
            <span>A Mongoose (Red Pill) Website</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
