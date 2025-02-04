import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar=() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return(
    <div className="navigation-section ">
        <div className="nav-wrapper">
          <div className="nav-logo">
              <img src={Logo} alt="" />
          </div>

          <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

          <ul className='nav-list'>
              <li className="nav-item"><button onClick={()=>handleScroll("home-section")} className="nav-link">HOME</button></li>
              <li className="nav-item"><button onClick={()=>handleScroll("about-section")} className="nav-link">ABOUT</button></li>
              <li className="nav-item"><button onClick={()=>handleScroll("services-section")} className="nav-link">SERVICES</button></li>
              <li className="nav-item"><button onClick={()=>handleScroll("portfolio-section")} className="nav-link">WORKS</button></li>
              <li className="nav-item"><button onClick={()=>handleScroll("contact-section")} className="nav-link">CONTACT</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar