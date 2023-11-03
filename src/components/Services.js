import React, { useEffect } from 'react'
import HomeServices from './HomeServices'
import SecondBanner from './SecondBanner'

const Services = () => {
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
          <h3>services</h3>
        </div>
        
         
       
      </div>
      <HomeServices/>
      <SecondBanner/>
      
    </div>
  )
}
export default Services