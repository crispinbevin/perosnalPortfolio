import React from 'react'
import { GoStack } from "react-icons/go";

function Services() {
  return (
    <div className="services-section">
      <div className="row services-wrapper">
        <div className="col-lg-3 col-sm-12 services-text">
          <h1>SERVICES</h1>
          <p>I’m a Creative Designer and I make things work.
          Turning your dreams into reality.</p>
        </div>
        <div className="col-lg-7 col-sm-12 service-cards">
          <div className="row service-cards-wrapper">
            <div className="col-lg-4 col-md-6 pd-15 service-card">
              <div className="service-card-wrapper">
                <div className="service-icon"><GoStack /></div>
                <br />
                <h3>INTERFACE DESIGN</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6   service-card">
              <div className="service-icon"><GoStack /></div>
              <br />
              <h3>INTERFACE DESIGN</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
            </div>
            <div className="col-lg-4 col-md-6   service-card">
              <div className="service-icon"><GoStack /></div>
              <br />
              <h3>INTERFACE DESIGN</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
            </div>
            
          </div>
          <div className="row service-cards-wrapper">
            <div className="col-lg-4 col-md-6   service-card">
              <div className="service-icon"><GoStack /></div>
              <br />
              <h3>INTERFACE DESIGN</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
            </div>
            <div className="col-lg-4 col-md-6   service-card">
              <div className="service-icon"><GoStack /></div>
              <br />
              <h3>INTERFACE DESIGN</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
            </div>
            <div className="col-lg-4 col-md-6   service-card">
              <div className="service-icon"><GoStack /></div>
              <br />
              <h3>INTERFACE DESIGN</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, impedit.</p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services