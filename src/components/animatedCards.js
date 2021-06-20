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
          className="card-img-overlay p-5">
          <h1 className="text-center">{project.title}</h1>
          <div >
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className='btn btn-info'>
              <i className="bi bi-play-circle-fill"></i> Demo
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noreferrer'
              className='btn  btn-info ms-2'>
               <i class="bi bi-github"></i> Code
            </a>
          </div>
        </div> 
      </div>
     </div>
  )
}
export default AnimatedCards
