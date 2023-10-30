import React from 'react'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CustomCarousel = () => {
  return (
    <div className='container-fluid p-0 mb-5'>
      <Carousel
        id='header-carousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <Carousel.Item>
          <img
            className='w-100 img-carousel'
            src='https://media.istockphoto.com/id/1468178137/photo/close-up-side-view-of-an-orange-luxury-sports-car.webp?b=1&s=612x612&w=0&k=20&c=5ZRUWK8cdXPjnjH_xCsxasbsdgNpo3VJKsa7yK85vZQ='
            alt='First slide'
          />
          <Carousel.Caption className='d-flex align-items-center'>
            <div className='container'>
              <div className='row align-items-center justify-content-center justify-content-lg-start'>
                <div className='col-10 col-lg-7 text-center text-lg-start'>
                  
                  <h1 className='display-3 text-white mb-4 pb-3'>
                    Auto Repair Essentials: A Comprehensive Guide
                  </h1>
                  <a href='#' className='btn btn-primary py-3 px-5'>
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className='ms-3' />
                  </a>
                </div>
                <div className='col-lg-5 d-none d-lg-flex'>
                  <img
                    className='img-fluid '
                    src='https://media.istockphoto.com/id/1468178137/photo/close-up-side-view-of-an-orange-luxury-sports-car.webp?b=1&s=612x612&w=0&k=20&c=5ZRUWK8cdXPjnjH_xCsxasbsdgNpo3VJKsa7yK85vZQ='
                    alt='Car'
                  />
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='w-100 img-carousel'
            src='https://media.istockphoto.com/id/1490548716/photo/asian-car-mechanic-shakes-hands-with-young-asian-male-customer-wide-shot.jpg?s=612x612&w=0&k=20&c=o43FcGOd9C_Iqd9NMU-prknZ87prJqRTiy5UhdpDlis='
            alt='Second slide'
          />
          <Carousel.Caption className='d-flex align-items-center'>
            <div className='container'>
              <div className='row align-items-center justify-content-center justify-content-lg-start'>
                <div className='col-10 col-lg-7 text-center text-lg-start'>
                  
                  <h1 className='display-3 text-white mb-4 pb-3'>
                    Under the Hood: Mastering Car Repairs
                  </h1>
                  <a href='#' className='btn btn-primary py-3 px-5'>
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className='ms-3' />
                  </a>
                </div>
                <div className='col-lg-5 d-none d-lg-flex'>
                  <img
                    className='img-fluid'
                    src='https://media.istockphoto.com/id/575132103/photo/mechanic-under-car-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=eBsTuTY_oRaL43CM0dd1rFzZ9E1b7kzrUo5g9L-dDoo='
                    alt='Car Wash'
                  />
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
