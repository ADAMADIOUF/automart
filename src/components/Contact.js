import React from 'react'
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa'
import ContactForm from './ContactForm'
import Map from './Map'

const Contact = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <div className='overlay-1'></div>
        <div className='title'>
          <h3>Contact </h3>
        </div>
      </div>
      <div className='contact section-center'>
        <div className='title'>
          <span>contact us</span>
          <h3>Contact for any query </h3>
        </div>
        <div className='contact-details-container'>
          <article className='contact-details'>
            <h3>// booking //</h3>
            <div>
              <span>
                <FaEnvelope />
              </span>
              <p>chadsautoRepair@gmail.com</p>
            </div>
          </article>
          <article className='contact-details'>
            <h3>// general //</h3>
            <div>
              <span>
                <FaPhone />
              </span>
              <p>+1 701-721-8650</p>
            </div>
          </article>
          <article className='contact-details'>
            <h3>// technical //</h3>
            <div>
              <span>
                <FaMapMarker />
              </span>
              <p>4505 E Burdick Expy Minot north dakota, USA</p>
            </div>
          </article>
        </div>
        <div className="contact-form-container">
         <article>
         <Map/>
         </article>
         <article className="form-contact">
<ContactForm/>
         </article>
        </div>
      </div>
    </div>
  )
}

export default Contact
