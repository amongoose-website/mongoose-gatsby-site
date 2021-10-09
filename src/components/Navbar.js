import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <span>Amongoose</span>
        </Link>
      </div>  
      <div className="navbar__links">
        <ul>
          <li>The Choice</li>
          <li>Trending News</li>
          <li>Charts</li>
          <li>Videos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
