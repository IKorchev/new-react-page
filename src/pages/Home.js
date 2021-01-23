import React from "react"
import Jumbotron from "../components/Jumbotron"
import Projects from "../pages/Projects"
const Home = () => {
  let text = {
    title: "Ivaylo Korchev",
    par: "Front End Web Developer. Experienced with JavaScript, React, HTML and CSS",
  }

  return (
    <div id="home" className="main-div bg-light shadow pb-3">
      <Jumbotron text={text} />
      <div className="container bg-light shadow rounded pb-3">
        <Projects />
      </div>
    </div>
  )
}

export default Home
