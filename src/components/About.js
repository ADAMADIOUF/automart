import React, { useEffect, useRef } from 'react'
import { FaTools, FaWrench } from 'react-icons/fa'
import { MdOutlineEngineering } from 'react-icons/md'
import a from "../assets/about1.png"
const About = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
    
  }, [])
  
  return (
    <div className='about'>
      <div className='about-header'>
        <div className='overlay-1'></div>
        <div className='title'>
          <h3>about us</h3>
        </div>
      </div>
      <div className='home-services section-center'>
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
              reliable and efficient car maintenance and repair services. Our
              team of certified mechanics is dedicated to ensuring your vehicle
              runs smoothly and safely on the road
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
              Meet our team of 'Expert Workers'—a group of highly skilled and
              dedicated professionals committed to delivering exceptional auto
              repair and maintenance services. With years of experience in the
              automotive industry, our mechanics possess the expertise and
              knowledge required to handle a wide range of car issues, from
              routine maintenance to complex repairs
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
              At 'Quality Servicing Auto Repair', we are committed to providing
              top-notch auto repair services, and a key part of that commitment
              is our investment in Modern Equipment. Our facility is outfitted
              with the latest in automotive technology, ensuring that every
              diagnostic and repair job is precise, efficient, and effective
            </p>
          </div>
        </article>
      </div>
      <div className='aboutContainer section-center'>
        <div className='imageContainer'>
          <img src={a} alt="Chad's Auto Repair Shop" className='aboutImage' />
        </div>
        <div className='contentContainer'>
          <h1 className='title-text'>Chad's Auto Repair</h1>
          <p className='description-text'>
            Welcome to Chad's Auto Repair - your trusted partner in automotive
            care. Our expert team is dedicated to providing top-notch repair
            services with a focus on precision, efficiency, and customer
            satisfaction. With years of experience and a commitment to
            excellence, we ensure your vehicle is in the best hands.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
