import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"

// Pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  const handleScroll = (e) => {
    const nav = document.querySelector(".navbar")
    const navLinks = document.querySelectorAll(".nav-link")
    if (window.pageYOffset > 85) {
      nav.classList.add("navbar-scroll")
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add("nav-link-scroll")
      }
    } else {
      nav.classList.remove("navbar-scroll")
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("nav-link-scroll")
      }
    }
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
