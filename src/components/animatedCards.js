import React, { useRef } from "react"
import gsap from "gsap"
const AnimatedCards = ({ project }) => {
  const ref = useRef(null)

  const startAnimation = () => {
    gsap.to(ref.current, {
      opacity: 1,
      duration: 0.2,
    })
  }
  const reverseAnimation = () => {
    gsap.to(ref.current, {
      opacity: 0,
      duration: 0.2,
    })
  }

  return (
    //prettier-ignore
    <div  className='col-xl-6 w-100'>
      <div className='card m-2'>
     <img
          className='card-img'
          src={project.projectImage.fields.file.url}
          alt='Project screenshot'
        />
        <div
          //prettier-ignore
          ref={ref}
          onMouseEnter={startAnimation}
          onMouseLeave={reverseAnimation}
          className="card-img-overlay d-flex flex-column justify-content-between text-white">
          <h3 className='card-title '>{project.title}</h3>
          <div className="p-0">
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className='btn btn-info'>
              <i class="bi bi-play-circle-fill"></i> Demo
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noreferrer'
              className='btn  btn-info ms-2'>
               <i className='fas fa-code fa-sm'></i> Code
            </a>
          </div>
        </div> 
      </div>
     </div>
  )
}
export default AnimatedCards
