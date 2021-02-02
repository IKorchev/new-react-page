import React from "react"
import NasaApp from "../assets/nasa-app.png"
import WeatherApp from "../assets/weather-app.png"
import TravelAgency from "../assets/TravelAgency.png"
import ProjectCards from "../components/ProjectCards"
import Skill from "../components/Skill"


 // ASSETS 

import HTML from "../assets/html-5.svg"
import GIT from "../assets/git.svg"
import GitHub from "../assets/github.svg"
import JavaScript from "../assets/javascript.svg"
import CSS from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"
import BootstrapIcon from "../assets/bootstrap-fill.svg"

const Projects = () => {
  const projectCards = [
    {
      image: NasaApp,
      alt: "Nasa App",
      title: "Nasa Project",
      par: `An app built with HTML CSS and JavaScript. It fetches images from the NASA API and shows the picture for a given date.`,
      code: "https://github.com/IKorchev/apod-nasa-project",
      hosted: "https://ikorchev.github.io/apod-nasa-project/",
      id:1
    },
    {
      image: WeatherApp,
      alt: "Weather App",
      title: "Weather App",
      par: `Simple weather app, shows the current weather in a given location.`,
      code: "https://github.com/IKorchev/weather-app",
      hosted: "https://ikorchev.github.io/weather-app/",
      id: 2
    },
    {
      image: TravelAgency,
      alt: "Travel Agency Website",
      title: "Agency Website",
      par: `A simple static site built with Bootstrap HTML CSS and Javascript`,
      code: "https://github.com/IKorchev/travel-agency",
      hosted: "https://ikorchev.github.io/travel-agency/",
      id:3
    },
  ]

  const skill = [
    {
      image: HTML,
      title: "HTML",
      id: 0
    },
    {
      image: CSS,
      title: "CSS",
      id: 1

    },
    {
      image: JavaScript,
      title: "JavaScript",
      id: 2

    },
    {
      image: ReactIcon,
      title: "React",
      id: 3

    },
    {
      image: GitHub,
      title: "GitHub",
      id: 4

    },
    {
      image: GIT,
      title: "GIT",
      id: 5

    },
    {
      image: BootstrapIcon,
      title: "Bootstrap",
      id: 6

    },
  ]

  return (
    <div className="row gx-0 justify-content-center" id="projects">
      <Skill skill={skill} />
      <ProjectCards projectCards={projectCards} />
    </div>
  )
}

export default Projects
