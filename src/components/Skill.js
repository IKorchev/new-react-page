import React from "react"

const Skill = ({ skill }) => {
  return (
    <div className="row justify-content-center my-5" id="projects">
      {skill.map((el) => {
        return (
          <div className="card col-md-1 mx-5 my-3  skillsCard">
            <img className="card-img" src={el.image}></img>
            <h2 className="card-title">{el.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Skill
