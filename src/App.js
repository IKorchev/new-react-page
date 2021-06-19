import React from "react"
import "./App.css"
// Pages
import Navbar from "./components/Navbar"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"
import Footer from "../src/components/Footer"
import LandingPage from "../src/components/LandingPage"
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
