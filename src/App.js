import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
// Pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import "lazysizes"
function App() {
  const handleScroll = (e) => {
    const nav = document.querySelector(".navbar")
    window.pageYOffset > 80
      ? nav.classList.add("navbar-scroll")
      : nav.classList.remove("navbar-scroll")
  }

  document.addEventListener("scroll", handleScroll)

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
