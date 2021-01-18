import React from "react"
import Skill from "../components/Skill"
import HTML from "../assets/html-5.svg"
import GIT from "../assets/git.svg"
import GitHub from "../assets/github.svg"
import JavaScript from "../assets/javascript.svg"
import CSS from "../assets/css.svg"
import ReactIcon from "../assets/structure.svg"

const Skills = () => {
  const skill = [
    {
      image: HTML,
      name: "HTML",
    },
    {
      image: CSS,
      name: "CSS",
    },
    {
      image: JavaScript,
      name: "JavaScript",
    },
    {
      image: ReactIcon,
      name: "React",
    },
    {
      image: GitHub,
      name: "GitHub",
    },
    {
      image: GIT,
      name: "GIT",
    },
  ]

  return (
    <div className="bg-light pb-5" id="skills">
      <h1 className="display-4 text-center" >
        Skills
      </h1>
      <Skill skill={skill} />
      <hr></hr>
    </div>
  )
}

export default Skills
