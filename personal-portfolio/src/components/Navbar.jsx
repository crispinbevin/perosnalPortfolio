import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navigation-section">
        <div className="nav-logo">
            <img src={Logo} alt="" />
        </div>
        <ul className='nav-list'>
            <Link to="/" className="nav-link"><li className='nav-item'>Home</li></Link>
            <Link className="nav-link"><li className='nav-item'>About</li></Link>
            <Link className="nav-link"><li className='nav-item'>Services</li></Link>
            <Link className="nav-link"><li className='nav-item'>Works</li></Link>
            <Link className="nav-link"><li className='nav-item'>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar