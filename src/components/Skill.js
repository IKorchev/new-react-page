import React from "react"

const Skill = ({ skill }) => {
  return (
    <div className='row justify-content-center'>
      <h1 className='text-center'>Skills</h1>
      {skill.map((el) => {
        return (
          <div key={el.title} className='skillsCard mt-5'>
            <img className='img lazyload' data-src={el.image} alt={el.alt}></img>
            <h2 className=' h5 card-title mt-2'>{el.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Skill
