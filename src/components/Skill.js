import React from "react"

const Skill = ({ skill }) => {
  return (
    <div className="row justify-content-center my-4 " id="projects">
      <h1 className="display-6 text-center">Skills</h1>
      {skill.map((el) => {
        
          return (
            <div className="skillsCard mt-5">
              <img className="img" src={el.image} alt={el.alt}></img>
              <h6 className="card-title mt-2">{el.title}</h6>
            </div>
          )
        } 
        
      )}
    </div>
  )
}

export default Skill
