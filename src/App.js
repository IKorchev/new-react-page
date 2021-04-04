import React, { useState, useEffect } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

// Pages
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import "lazysizes"

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
