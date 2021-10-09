import React from 'react'
import { Link } from 'gatsby'

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
          <li><Link to="/the-choice">The Choice</Link></li>
          <li>Trending News</li>
          <li>Charts</li>
          <li>Videos</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
