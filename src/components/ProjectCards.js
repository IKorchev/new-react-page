import React from "react"

const ProjectCards = ({ projectCards }) => {
  return (
    <div className="row justify-content-center my-5" id="projects">
      {projectCards.map((project) => {
        return (
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center ">
            <a href="https://github.com" target="_blank">
              <img className="card-img-top" src={project.image} alt={project.alt} />
            </a>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.par}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCards
