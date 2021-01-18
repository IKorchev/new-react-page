import React from "react"
import NasaApp from "../assets/nasa-app.png"
import WeatherApp from "../assets/weather-app.png"
import TravelAgency from "../assets/TravelAgency.png"
import ProjectCards from "../components/ProjectCards"

const Projects = () => {
  const projectCards = [
    {
      image: NasaApp,
      alt: "Nasa App",
      title: "Nasa Project",
      par: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
    {
      image: WeatherApp,
      alt: "Weather App",
      title: "Weather App",
      par: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
    {
      image: TravelAgency,
      alt: "Travel Agency Website",
      title: "Agency Website",
      par: `Some quick example text to build on the card title and make up
      the bulk of the card's content.`,
    },
  ]

  return (
    <>
      <ProjectCards projectCards={projectCards} />
      {/* <div className="row justify-content-center my-5" id="projects">
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center ">
            <a href="https://github.com" target="_blank">
              <img
                className="card-img-top"
                src={WeatherApp}
                alt="Weather App"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
        </div>
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center">
            <a href="https://github.com" target="_blank">
              <img className="card-img-top" src={NasaApp} alt="Project two" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Astronomy Picture of the Day</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
          </div>
        </div>
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center">
            <a href="https://github.com" target="_blank">
              <img
                className="card-img-top"
                src={TravelAgency}
                alt="Project three"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Travel Agency Website</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default Projects
