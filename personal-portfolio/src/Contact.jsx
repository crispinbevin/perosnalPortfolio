import React from 'react'

function Contact() {
  return (
    <>
      <div className="contact-subsection1" id='contact-section'>
        <div className="csection1-wrapper">
          <h1>A CREATIVE STUDIO IN MELBOURNE,<br />
          PASSIONATE ABOUT DESIGN, ART AND <br />
          CREATIVITY, SINCE 1950.
        </h1>
        <button className='about-btn'>CONTACT US</button>
        </div>
      </div>
      <div className="contact-subsection2">
        <div className="row csection2-wrapper">
          <div className="col-lg-6 contact-form">
            <h3>LETS WORK TOGETHER <br /> SEND AN EMAIL HERE</h3>
            <div className="contact-textfields">
              <div className="text-field-wrapper">
                <label htmlFor="name">NAME</label>
                <input className='contact-textfield' type="text" name='name'/><label htmlFor=""></label>
              </div>
              <div className="text-field-wrapper">
                <label htmlFor="name">EMAIL</label>
                <input className='contact-textfield' type="text" name='name'/><label htmlFor=""></label>
              </div>
            </div>
            <div className="text-area-wrapper">
              <label htmlFor="feedback">MESSAGE</label>
              <input className='contact-text-area' type="text-area" name='feedback'/>
            </div>
            <button className='about-btn'>SEND MESSAGE</button>
          </div>
          <div className="col-lg-6 map" >map here</div>
        </div>
      </div>
    </>
  )
}

export default Contact