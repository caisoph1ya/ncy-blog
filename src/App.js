import React from 'react'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/hero'

const App = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App