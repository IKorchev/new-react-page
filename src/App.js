import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
// Pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </>
  )
}

export default App
