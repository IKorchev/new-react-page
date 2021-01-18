import React from "react"
import Jumbotron from "../components/Jumbotron"
import Cards from "../components/Projects"
import Contact from "./Contact"
const Home = (props) => {
  let text = {
    title: "Ivaylo Korchev",
    par: "Front End Web Developer. Experienced with JavaScript, React, HTML and CSS",
  }
  return (
    <div id="home" className="bg-light shadow pb-3">
      <Jumbotron text={text} />
      <h1 className="display-4 text-center" id="projects">
        Projects
      </h1>
      <Cards />
      <hr></hr>
    </div>
  )
}

export default Home
