import React, { useState } from "react"
import { useSpring, animated as a, config } from "react-spring"
import Image from "../assets/Hai.jpg"
const AnimatedCards = ({ project }) => {
  const [toggle, set] = useState(false)
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1)" : "scale(0.5)",
    config: {
      mass: 1,
      tension: 555,
      friction: 22,
    },
  })
  return (
    <a.div
      className='col-xl-4'
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}>
      <div className='card m-2'>
        <a.img
          className='card-img lazyload'
          data-src={project.projectImage.fields.file.url}
          alt='Project screenshot'
        />
        <a.div
          style={props}
          className='card-img-overlay border border-dark d-flex bg-dark text-white text-center flex-column shadow justify-content-center align-items-center'>
          <h5 className='card-title'>{project.title}</h5>
          <p className='card-text'>{project.projectDescription}</p>
          <div>
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className='btn btn-sm btn-info mx-2'>
              View demo
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noreferrer'
              className='btn btn-sm btn-info mx-2'>
              Code <i className='fas fa-code fa-sm'></i>
            </a>
          </div>
        </a.div>
      </div>
    </a.div>
  )
}

export default AnimatedCards
