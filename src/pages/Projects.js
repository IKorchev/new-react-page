import React, { useEffect, useState } from "react"
import Skill from "../components/Skill"
import AnimatedCards from "../components/animatedCards"
// ASSETS
import NodejsIcon from "../assets/node-js.svg"
import HTMLIcon from "../assets/html-5.svg"
import GitIcon from "../assets/git.svg"
import GitHubIcon from "../assets/github.svg"
import JavaScript from "../assets/javascript.svg"
import CSSIcon from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"
import BStrapIcon from "../assets/bootstrap-fill.svg"

const Projects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await fetch("/content", { method: "POST" })
      const json = await data.json()
      return setData(json)
    })()
  }, [])

  //prettier-ignore
  const skills = [
    { image: HTMLIcon,   title: "HTML",       alt: "HTML icon" },
    { image: CSSIcon,    title: "CSS",        alt: "CSS icon" },
    { image: BStrapIcon, title: "Bootstrap",  alt: "Bootstrap icon" },
    { image: JavaScript, title: "JavaScript", alt: "JavaScript icon" },
    { image: ReactIcon,  title: "React",      alt: "ReactJS icon" },
    { image: NodejsIcon, title: "Node.js",    alt: "Node.js icon" },
    { image: GitHubIcon, title: "GitHub",     alt: "Github icon" },
    { image: GitIcon,    title: "GIT",        alt: "Git icon" },]

  return (
    <div className='container' id='projects'>
      <Skill skill={skills} />
      <div className='row justify-content-center'>
        <h1 className='text-center my-5'>Projects</h1>
        {data.map((project) => (
          <AnimatedCards project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
