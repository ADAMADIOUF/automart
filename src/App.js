import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
