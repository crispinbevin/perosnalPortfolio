import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './About.jsx'
import Services from './Services.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-section">
        <div className="home-wrapper">
          <div className="home-subheading">WEB DEVELOPER & UX DESIGNER</div>
          <div className="switching-text">TEXT ANIMATION
          </div>
          <div className="home-text">I’m a Creative Designer and I make things <br />
          Turning your dreams into reality.</div>
        </div>
      </div>
      <About />
      <Services />
    </>
  )
}

export default Home