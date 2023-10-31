import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-nav'>
        <div>
          <h3>Address</h3>
          <p>
            <FaMapMarkerAlt />
            4505 E Burdick Expy Minot north dakota, USA
          </p>
          <p>
            <FaPhone /> (123) 456-7890
          </p>
          <p>
            <FaEnvelope /> email@example.com
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            <FaFacebook /> Facebook
          </p>
          <p>
            <FaTwitter /> Twitter
          </p>
          <p>
            <FaInstagram /> Instagram
          </p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>Monday to Friday: 11:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li>Diagnostic</li>
            <li>Engine Servicing</li>
            <li>Tires Replacement</li>
            <li>Oil Changing</li>
            <li>Car Dealership</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          borderTop: '1px solid #fff',
          paddingTop: '10px',
        }}
      >
        <p>Auto Mart&copy; {new Date().getFullYear()} adamadiouf</p>
      </div>
    </div>
  )
}

export default Footer
