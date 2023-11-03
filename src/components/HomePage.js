import React from 'react'
import Carousel from './Carousel'
import { FaTools, FaWrench } from 'react-icons/fa'
import{MdOutlineEngineering } from "react-icons/md"
import a from "../assets/home-about1.png"
import b from '../assets/a1.png'

import HomeBanner from './HomeBanner'
import HomeServices from './HomeServices'
import SecondBanner from './SecondBanner'
import TestimonialSlider from './Testimonial'
import BookingDragDrop from "./BookingDragDrop"
import { Parallax } from 'react-parallax'
const HomePage = () => {
  return (
    <>
      <div>
        <Carousel />
        <div>
          <Parallax bgImage={b} strength={500}>
            <div style={{ height: 500 }}>
              
            </div>
          </Parallax>
          
        </div>
        <div className='home-page section-center'>
          <div className='home-services'>
            <article className='home-service'>
              <div>
                <span>
                  <FaWrench />
                </span>
              </div>
              <div>
                <h3>quality servicing</h3>
                <p>
                  Quality Servicing Auto Repair is your go-to destination for
                  reliable and efficient car maintenance and repair services.
                  Our team of certified mechanics is dedicated to ensuring your
                  vehicle runs smoothly and safely on the road
                </p>
              </div>
            </article>
            <article className='home-service home-bg'>
              <div>
                <span>
                  <MdOutlineEngineering />
                </span>
              </div>
              <div>
                <h3>Expert Workers</h3>
                <p>
                  Meet our team of 'Expert Workers'—a group of highly skilled
                  and dedicated professionals committed to delivering
                  exceptional auto repair and maintenance services. With years
                  of experience in the automotive industry, our mechanics
                  possess the expertise and knowledge required to handle a wide
                  range of car issues, from routine maintenance to complex
                  repairs
                </p>
              </div>
            </article>
            <article className='home-service'>
              <div>
                <span>
                  <FaTools />
                </span>
              </div>
              <div>
                <h3>Modern Equipment</h3>
                <p>
                  At 'Quality Servicing Auto Repair', we are committed to
                  providing top-notch auto repair services, and a key part of
                  that commitment is our investment in Modern Equipment. Our
                  facility is outfitted with the latest in automotive
                  technology, ensuring that every diagnostic and repair job is
                  precise, efficient, and effective
                </p>
              </div>
            </article>
          </div>
          <div className='home-about section-center'>
            <article className='home-about-img'>
              <img src={a} alt='' />
            </article>
            <article className='home-about-content'>
              <span className='home-about-span'>// about us //</span>
              <h3>
                <span>Chads Auto</span>: Unrivaled Excellence in Automotive
                Maintenance and Repair
              </h3>
              <p className='home-about-p'>
                <span> At Chads Auto</span>, we redefine the standards of
                automotive care. Our commitment to excellence ensures that every
                vehicle we service receives meticulous attention and expert
                craftsmanship. With a team of seasoned professionals,
                state-of-the-art equipment, and a passion for cars, we guarantee
                top-tier maintenance and repair solutions for all makes and
                models. Whether it's a routine check-up or a complex repair,
                Chads Auto is the trusted name in ensuring your vehicle's
                optimum performance and longevity. Experience the best in auto
                care with Chads Auto.
              </p>
              <div className='home-about-number'>
                <article>
                  <div>
                    <span>01</span>
                  </div>
                  <div>
                    <h3>Masterful & Accomplished</h3>
                    <p>
                      Chads Auto boasts a Masterful & Accomplished team,
                      ensuring unparalleled precision and excellence in every
                      automotive service provided
                    </p>
                  </div>
                </article>
                <article>
                  <div>
                    <span>02</span>
                  </div>
                  <div>
                    <h3>Expert Diagnostics</h3>
                    <p>
                      At Chad's Auto, our diagnostic process ensures accurate
                      identification of your vehicle's issues, leading to
                      efficient and effective repairs.
                    </p>
                  </div>
                </article>
                <article>
                  <div>
                    <span>03</span>
                  </div>
                  <div>
                    <h3>Quality Craftsmanship</h3>
                    <p>
                      Our team at Chad's Auto Repair is dedicated to quality
                      craftsmanship, using only the best parts and practices to
                      keep your car running smoothly.
                    </p>
                  </div>
                </article>
              </div>
              <button className='btn'>read more</button>
            </article>
          </div>
        </div>
      </div>
      <HomeBanner />
      <HomeServices />
      <BookingDragDrop/>
      <SecondBanner />
      <TestimonialSlider />
    </>
  )
}

export default HomePage
