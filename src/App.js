import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
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
