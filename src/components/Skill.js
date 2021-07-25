import React, { useRef, useEffect } from "react"
// ASSETS
import NodejsIcon from "../assets/node-js.svg"
import HTMLIcon from "../assets/html-5.svg"
import GitIcon from "../assets/git.svg"
import GitHubIcon from "../assets/github.svg"
import JavaScriptIcon from "../assets/javascript.svg"
import CSSIcon from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"
import BStrapIcon from "../assets/bootstrap-fill.svg"
import ExpressJsIcon from "../assets/expressjs-icon.svg"
import gsap from "gsap/gsap-core"
import { Power1 } from "gsap/all"
const skills = [
  { image: HTMLIcon, title: "HTML", alt: "HTML icon" },
  { image: CSSIcon, title: "CSS", alt: "CSS icon" },
  { image: BStrapIcon, title: "Bootstrap", alt: "Bootstrap icon" },
  { image: JavaScriptIcon, title: "JavaScript", alt: "JavaScript icon" },
  { image: ReactIcon, title: "React", alt: "ReactJS icon" },
  { image: NodejsIcon, title: "Node.js", alt: "Node.js icon" },
  { image: ExpressJsIcon, title: "Express", alt: "Express.js icon" },
  { image: GitHubIcon, title: "GitHub", alt: "Github icon" },
  { image: GitIcon, title: "GIT", alt: "Git icon" },
]

const Skill = () => {
  const ref = useRef(null)
  const playAnimation = (target) => {
    gsap.to(target, {
      duration: 0.5,
      scale: 1.1,
    })
  }
  const reverseAnimation = (target) => {
    gsap.to(target, {
      duration: 0.5,
      scale: 1,
    })
  }
  useEffect(() => {
    const xd = ref.current.children

    gsap.from([xd], {
      x: 150,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: Power1.easeOut,
      scrollTrigger: {
        trigger: xd,
        start: "top 96%",
      },
    })
  }, [ref])
  return (
    <div>
      <h1 className='h1 mt-3 px-0 py-3 border-bottom'>Skills</h1>
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
