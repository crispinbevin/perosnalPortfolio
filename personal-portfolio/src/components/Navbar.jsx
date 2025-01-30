import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navigation-section">
        <div className="nav-wrapper">
          <div className="nav-logo">
              <img src={Logo} alt="" />
          </div>
          <ul className='nav-list'>
              <Link to="/" className="nav-link"><li className='nav-item'>HOME</li></Link>
              <Link className="nav-link"><li className='nav-item'>ABOUT</li></Link>
              <Link className="nav-link"><li className='nav-item'>SERVICES</li></Link>
              <Link className="nav-link"><li className='nav-item'>WORKS</li></Link>
              <Link className="nav-link"><li className='nav-item'>CONTACT</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar