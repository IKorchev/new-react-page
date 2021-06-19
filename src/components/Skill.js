import React, { useRef, useEffect } from "react"
// ASSETS
import NodejsIcon from "../assets/node-js.svg"
import HTMLIcon from "../assets/html-5.svg"
import GitIcon from "../assets/git.svg"
import GitHubIcon from "../assets/github.svg"
import JavaScript from "../assets/javascript.svg"
import CSSIcon from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"
import BStrapIcon from "../assets/bootstrap-fill.svg"
import gsap from "gsap/gsap-core"

const skills = [
  { image: HTMLIcon, title: "HTML", alt: "HTML icon" },
  { image: CSSIcon, title: "CSS", alt: "CSS icon" },
  { image: BStrapIcon, title: "Bootstrap", alt: "Bootstrap icon" },
  { image: JavaScript, title: "JavaScript", alt: "JavaScript icon" },
  { image: ReactIcon, title: "React", alt: "ReactJS icon" },
  { image: NodejsIcon, title: "Node.js", alt: "Node.js icon" },
  { image: GitHubIcon, title: "GitHub", alt: "Github icon" },
  { image: GitIcon, title: "GIT", alt: "Git icon" },
]

const Skill = () => {
  const ref = useRef(null)
  const playAnimation = (target) => {
    gsap.to(target, {
      duration: 0.5,
      scale: 1.1,
      skewX: "-3deg",
    })
  }
  const reverseAnimation = (target) => {
    gsap.to(target, {
      duration: 0.5,
      scale: 1,
      skewX: "0deg",
    })
  }
  useEffect(() => {
    const xd = ref.current.children

    gsap.from([xd], {
      opacity: 0,
      x: 100,
      stagger: 0.1,
      scrollTrigger: {
        trigger: xd,
        start: "top 100%",
      },
    })
  }, [ref])
  return (
    <div className='row justify-content-center text-white py-5 mt-5'>
      <h1 className='mt-5 py-3 text-white border-bottom'>Skills</h1>
      <div ref={ref} className='skills-container'>
        {skills.map((el, i) => {
          return (
            <div key={i} className='skills-card my-3'>
              <img
                onMouseEnter={(e) => playAnimation(e.target)}
                onMouseLeave={(e) => reverseAnimation(e.target)}
                className='img'
                src={el.image}
                alt={el.alt}></img>
              <h2 className=' h5 card-title mt-2'>{el.title}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skill
