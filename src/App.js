import React, { useEffect } from "react"

import "./App.css"
import gsap from "gsap"
// Pages
import Navbar from "./components/Navbar"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"
import Footer from "../src/components/Footer"
import LandingPage from "../src/components/LandingPage"
import "lazysizes"

function App() {
  return (
    <div className='bg-dark'>
      <Navbar />
      <LandingPage />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
