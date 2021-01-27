import React from "react"

const ProjectCards = ({ projectCards }) => {
  return (
    <>
      <h1 className="display-4 text-center my-5">Projects</h1>
      {projectCards.map((project) => {
        return (
          <div className="card col-xl-3 projectCard m-3 align-items-center text-center rounded">
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
    </>
   )
}

export default ProjectCards
