import React from "react"

const ProjectCards = ({ projectCards }) => {
  return (
    <div className="row justify-content-center" id="projects">
      <h1 className="display-4 text-center mb-3">Projects</h1>
      {projectCards.map((project) => {
        return (
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center">
            <a href={project.hosted} target="_blank" rel="noreferrer" target="_blank">
              <img className="card-img-top" src={project.image} alt={project.alt} />
            </a>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.par}</p>
              <a href={project.hosted} target="_blank" rel="noreferrer" className="btn btn-info mx-2">
                View project
              </a>
              <a href={project.code} target="_blank" rel="noreferrer" className="btn btn-info mx-2">
                View Code <i class="fas fa-code fa-sm"></i>
              </a>
            </div>
          </div>
          
        )
      })}
    </div>
  )
}

export default ProjectCards
