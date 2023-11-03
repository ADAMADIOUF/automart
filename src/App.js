import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollTop'
import LoadingAnimation from './components/LoadingAnimation'



const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={300} classNames='fade'>
        <Routes location={location}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          {/* ... other routes */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingAnimation />
  }

  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
