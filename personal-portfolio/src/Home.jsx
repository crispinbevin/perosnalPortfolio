import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './About.jsx'
import Services from './Services.jsx' 
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import 'react-social-icons'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/pinterest'
import 'react-social-icons/twitter'
import 'react-social-icons/behance'
import { SocialIcon } from 'react-social-icons/component'
import Carousel from './components/Carousel.jsx'
// import {Carousel} from 'react-bootstrap/Carousel';
// import {CarouselItem} from 'react-bootstrap/esm/CarouselItem.js'

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-section" id="home-section">
        <div className="home-wrapper">
          <div className="home-subheading">WEB DEVELOPER & UX DESIGNER</div>
          <div className="switching-text">
            <Carousel />
          </div>
          <div className="home-text">I’m a Creative Designer and I make things <br />
          Turning your dreams into reality.</div>
          <br />
          <div className="socials-list">
            <SocialIcon className="socials-icon" url='facebook.com' bgColor='rgb(0,0,0,0) ' fgColor='currentColor'/>
            <SocialIcon className="socials-icon" url='twitter.com' bgColor='rgb(0,0,0,0)' fgColor='currentColor'/>
            <SocialIcon className="socials-icon" url='instagram.com' bgColor='rgb(0,0,0,0)' fgColor='currentColor'/>
            <SocialIcon className="socials-icon" url='pinterest.com' bgColor='rgb(0,0,0,0)' fgColor='currentColor'/>
            <SocialIcon className="socials-icon" url='behance.com' bgColor='rgb(0,0,0,0)' fgColor='currentColor'/>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home