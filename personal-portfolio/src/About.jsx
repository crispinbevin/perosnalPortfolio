import React from 'react'
import aboutImage from './assets/about-background.jpg'

function About() {
  return (
    <div className="about-section">
        <div className="about-text">
          <div className="about-header">
            ABOUT US
          </div>
          <br />
          <p>
          I’m a Graphic Designer and I make things work.without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
          <br />
          <br />
        Completely synergize resource taxing relationships premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
          </p>
          <br />
          <br />
        <button className='about-btn'>SEE OUR WORKS</button>
        
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>
    </div>

  )
}

export default About