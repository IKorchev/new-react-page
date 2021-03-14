import React from "react"
import ProjectCards from "../components/ProjectCards"
import Skill from "../components/Skill"

// ASSETS
import NasaApp from "../assets/nasa-app.png"
import WeatherApp from "../assets/weather-app.png"
import TravelAgency from "../assets/TravelAgency.png"
import HTML from "../assets/html-5.svg"
import GIT from "../assets/git.svg"
import GitHub from "../assets/github.svg"
import JavaScript from "../assets/javascript.svg"
import CSS from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"
import BootstrapIcon from "../assets/bootstrap-fill.svg"
import MFC from "../assets/MyFragranceCollection.png"
const Projects = () => {
  const projectCards = [
    {
      image: MFC,
      alt: "An app that I made for people with a big collection of perfumes.",
      title: "My Fragrance Collection",
      par: `An app that I made for people with a big collection of perfumes. Let's them Register and Log in using Firebase Auth. Let's them search for a perfume using the Bing Image Search API and add the perfume and an Image of it to their collection which is stored in Firestore.`,
      code: "https://github.com/IKorchev/randomiser",
      hosted: "https://www.myfragrancecollection.co.uk/",
      id: 0,
    },
    {
      image: TravelAgency,
      alt: "Travel Agency Website",
      title: "Agency Website",
      par: `A simple static site built with Bootstrap HTML CSS and Javascript`,
      code: "https://github.com/IKorchev/travel-agency",
      hosted: "https://ikorchev.github.io/travel-agency/",
      id: 3,
    },
    {
      image: NasaApp,
      alt: "Nasa App",
      title: "Nasa Project",
      par: `An app built with HTML CSS and JavaScript. It fetches images from the NASA API and shows the picture for a given date.`,
      code: "https://github.com/IKorchev/apod-nasa-project",
      hosted: "https://ikorchev.github.io/apod-nasa-project/",
      id: 1,
    },
    {
      image: WeatherApp,
      alt: "Weather App",
      title: "Weather App",
      par: `Simple weather app, shows the current weather in a given location.`,
      code: "https://github.com/IKorchev/weather-app",
      hosted: "https://ikorchev.github.io/weather-app/",
      id: 2,
    },
  ]

  const skills = [
    {
      image: HTML,
      title: "HTML",
      alt: "HTML icon",
    },
    {
      image: CSS,
      title: "CSS",
      alt: "CSS icon",
    },
    {
      image: JavaScript,
      title: "JavaScript",
      alt: "JavaScript icon",
    },
    {
      image: ReactIcon,
      title: "React",
      alt: "ReactJS icon",
    },
    {
      image: GitHub,
      title: "GitHub",
      alt: "Github icon",
    },
    {
      image: GIT,
      title: "GIT",
      alt: "Git icon",
    },
    {
      image: BootstrapIcon,
      title: "Bootstrap",
      alt: "Bootstrap icon",
    },
  ]

  return (
    <div className='row gx-0 justify-content-center' id='projects'>
      <Skill skill={skills} />
      <ProjectCards projectCards={projectCards} />
    </div>
  )
}

export default Projects
