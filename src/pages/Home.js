import React from "react"
import Jumbotron from "../components/Jumbotron"
import Projects from "../pages/Projects"

const Home = () => {
  return (
    <div id="home" className="main-div bg-light pb-3">
      <Jumbotron />
      <Projects />
    </div>
  )
}

export default Home
