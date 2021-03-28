import React from "react"

const ProjectCards = ({ projectCards }) => {
  return (
    <>
      <h1 className='text-center my-5'>Projects</h1>
      {projectCards.map((project) => {
        return (
          <div
            key={project.title}
            className='card col-xl-3 projectCard m-3 align-items-center text-center rounded'>
            <a href={project.hosted} target='_blank' rel='noreferrer'>
              <img
                className='card-img-top lazyload'
                data-src={project.image}
                alt={project.alt}
              />
            </a>
            <div className='card-body'>
              <h1 className='h5 card-title'>{project.title}</h1>
              <p className='card-text'>{project.par}</p>
              <a
                href={project.hosted}
                target='_blank'
                rel='noreferrer'
                className='btn btn-info mx-2'>
                View project
              </a>
              <a
                href={project.code}
                target='_blank'
                rel='noreferrer'
                className='btn btn-info mx-2'>
                View Code <i className='fas fa-code fa-sm'></i>
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProjectCards
