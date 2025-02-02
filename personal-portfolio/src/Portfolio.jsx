import React from 'react'
import './App.css'
import Prtf1 from './assets/prtf-1.jpg'
import Prtf2 from './assets/prtf-2.jpg'
import Prtf3 from './assets/prtf-3.gif'
import Prtf4 from './assets/prtf-4.jpg'
import Prtf5 from './assets/prtf-5.jpg'
import Prtf6 from './assets/prtf-6.jpg'


function Portfolio() {
  return (
    <div className="portfolio-section">
        <div className="row portfolio-wrapper">
            <div className="col-lg-3 portfolio-text">
                <h3>PORTFOLIO</h3>
                <p>I’m a Creative Designer and I make things work.
                Turning your dreams into reality.</p>
                <button className='about-btn'>ALL OUR WORKS</button>
            </div>
            <div className="col-lg-7 portfolio-cards">
                <div className="row portfolio-cards-wrapper">
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf1} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf2} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf3} alt="" />
                    </div>
                </div>
                <div className="row portfolio-cards-wrapper">
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf4} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf5} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img className='cards-img' src={Prtf6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio