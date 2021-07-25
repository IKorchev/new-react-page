import React, { useRef } from "react"
import gsap from "gsap"
const AnimatedCards = ({ project }) => {
  const ref = useRef(null)

  const revealAnimation = (way) => {
    const tl = gsap.timeline()
    way &&
      tl.to(ref.current, {
        duration: 0.5,
        opacity: 1,
      })

    !way &&
      tl.to(ref.current, {
        opacity: 0,
        duration: 0.5,
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
          onMouseEnter={() => revealAnimation(true)}
          onMouseLeave={() => revealAnimation(false)}
          className="card-img-overlay p-5">
          <h1 className="text-center">{project.title}</h1>
          <div >
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className='btn project-button'>
              <i className="bi bi-play-circle-fill"></i> Demo
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noreferrer'
              className='btn project-button ms-2'>
               <i class="bi bi-github"></i> Code
            </a>
          </div>
        </div> 
      </div>
     </div>
  )
}
export default AnimatedCards
