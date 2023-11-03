import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'

const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false)

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
       
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#D81324', border:"none",padding:"0.5rem"
          }}
        >
          <span className='btn-up'>
            <FaArrowAltCircleUp />
          </span>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
