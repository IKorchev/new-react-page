import React from "react"
import Jumbotron from "../components/Jumbotron"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"
import Aboutme from "../pages/Aboutme"

const Home = () => {
 
  return (
    <div id='home' className='main-div bg-light pb-3'>
      <Jumbotron />
      <Aboutme />
      <Projects  />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
