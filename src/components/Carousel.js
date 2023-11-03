import React from 'react'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import a from "../assets/s1.png"
import b from '../assets/s3.png'
import { Link } from 'react-router-dom'

const CustomCarousel = () => {
  return (
    <div className='container-fluid p-0 mb-5'>
      <Carousel
        id='header-carousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <Carousel.Item>
          <div className='img-overlay'></div>
          <img className='w-100 img-carousel' src={a} alt='First slide' />
          <Carousel.Caption className='d-flex align-items-center'>
            <div className='container'>
              <div className='row align-items-center justify-content-center justify-content-lg-start'>
                <div className='col-10 col-lg-7 text-center text-lg-start'>
                  <h1 className='display-3 text-white mb-4 pb-3'>
                    Auto Repair Essentials: A Comprehensive Guide
                  </h1>
                  <Link to='/about' className='btn btn-primary py-3 px-5'>
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className='ms-3' />
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className='img-overlay'></div>
          <img className='w-100 img-carousel' src={b} alt='Second slide' />
          <Carousel.Caption className='d-flex align-items-center'>
            <div className='container'>
              <div className='row align-items-center justify-content-center justify-content-lg-start'>
                <div className='col-10 col-lg-7 text-center text-lg-start'>
                  <h1 className='display-3 text-white mb-4 pb-3'>
                    Under the Hood: Mastering Car Repairs
                  </h1>
                  <Link to='/about' className='btn btn-primary py-3 px-5'>
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className='ms-3' />
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CustomCarousel
