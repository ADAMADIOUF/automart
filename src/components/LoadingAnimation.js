import React, { useState, useEffect } from 'react'
import a from "../assets/animation1.png"
const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10
        if (newProgress === 100) {
          clearInterval(interval)
        }
        return newProgress
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='loading-container'>
      <h3>welcome to Chads Auto</h3>
      <div className='road-progress-bar'>
        <div className='road-progress' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}

export default LoadingAnimation
