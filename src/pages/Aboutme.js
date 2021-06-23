import React, { useEffect } from "react"


export const Aboutme = () => {
  useEffect(() => {}, [])
  return (
    <div className='container mx-auto mt-5 text-white' id='aboutme'>
      <h1 className='section-title h1 mb-3 py-3 border-bottom'>About me</h1>
      <p className='lead'>
        Hello! My name is Ivaylo and I am a passionate Web Developer based in London. I
        believe in learning by building! I love to build projects and improve with each
        one of them. As you can see below I have experience building projects with lots of
        up-to-date technologies. Currently I'm focusing my time on React and Node.js.
      </p>
    </div>
  )
}
export default Aboutme
