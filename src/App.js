import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
// Pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
