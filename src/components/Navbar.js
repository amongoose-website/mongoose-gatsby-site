import React from 'react'
import { Link } from 'gatsby'
import { Pivot as Hamburger } from 'hamburger-react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: true,
    };
  }

  render() {
    return (
      <nav className={`navbar`}>
        <div className={`navbar__hamburger`}>
          <Hamburger 
            size={20}
            onToggle={() => this.setState({open: !this.state.open})}/>
        </div>
        <div className="navbar__logo">
          <Link to="/">
            <span>Amongoose</span>
          </Link>
        </div>  
        <div className={`navbar__links ${this.state.open ? 'navbar-open' : ''}`}>
          <ul>
            <li><Link to="/">The Trunk</Link></li>
            <li><Link to="/the-choice">The Choice</Link></li>
            <li><Link to="/news">Trending News</Link></li>
            <li>Charts</li>
            <li><a href="https://tv.amongoose.com">Videos</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
