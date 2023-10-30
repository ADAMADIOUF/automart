import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faClock,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar--container section-nav'>
        <article className='topbar-left'>
          <div className='topbar-item'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='topbar-icon' />
            <span>4505 E Burdick Expy Minot north dakota, USA</span>
          </div>
          <div className='topbar-item'>
            <FontAwesomeIcon icon={faClock} className='topbar-icon' />
            <span>Mon - Fri : 09.00 AM - 09.00 PM</span>
          </div>
        </article>
        <article className='topbar-right'>
          <div className='topbar-item'>
            <FontAwesomeIcon icon={faPhoneAlt} className='topbar-icon' />
            <span>+1 701 852-3722</span>
          </div>
          <div className='topbar-socials'>
            <Link className='topbar-social' to=''>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link className='topbar-social' to=''>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link className='topbar-social' to=''>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link className='topbar-social' to=''>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Topbar
