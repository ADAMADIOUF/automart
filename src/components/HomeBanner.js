import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { FaProjectDiagram, FaSmile, FaUserCog, FaWrench } from 'react-icons/fa'

import ScrollTrigger from 'react-scroll-trigger'
const HomeBanner = () => {
  const [count, setCount] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setCount(true)
    }, 2000)

    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <div className='home-banner'>
      <div className='home-banner-container section-center'>
        <div className='overlay'></div>
        <section className='progress-content'>
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <div className='progress-bar'>
              <article>
                <span>
                  <FaWrench />
                </span>
                <h3>
                  {count && (
                    <CountUp start={0} end={15} duration={2} delay={0} />
                  )}
                 
                </h3>
                <span>Years Experience</span>
              </article>
              <article>
                <span>
                  <FaUserCog />
                </span>
                <h3>
                  {count && (
                    <CountUp start={0} end={9} duration={2} delay={0} />
                  )}
                 
                </h3>
                <span>Expert Technicians</span>
              </article>
              <article>
                <span>
                  <FaSmile />
                </span>
                <h3>
                  {count && (
                    <CountUp start={0} end={1250} duration={2} delay={0} />
                  )}
                
                </h3>
                <span>Satisfied Clients</span>
              </article>
              <article>
                <span>
                  <FaProjectDiagram />
                </span>
                <h3>
                  {count && (
                    <CountUp start={0} end={1220} duration={2} delay={0} />
                  )}
                
                </h3>
                <span>Completed Projects</span>
              </article>
            </div>
          </ScrollTrigger>
        </section>
      </div>
    </div>
  )
}

export default HomeBanner
