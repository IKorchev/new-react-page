import React, { useEffect } from "react"

import "./App.css"
import gsap from "gsap"
// Pages
import Navbar from "./components/Navbar"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"
import Footer from "../src/pages/Footer"
import LandingPage from "./pages/LandingPage"
import Aboutme from "../src/pages/Aboutme"
import "lazysizes"

function App() {
  return (
    <div className='bg-dark'>
      <Navbar />
      <LandingPage />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
