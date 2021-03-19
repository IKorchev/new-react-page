/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react"
import Typewriter from "typewriter-effect"

const Jumbotron = () => {
  useEffect(() => {
    console.log(document.querySelector(".Typewriter"))
  }, [])

  return (
    <div className='jumbotron jumbotron-fluid py-1 mb-3 border-bottom border-white border-2 d-flex flex-column justify-content-center'>
      <div className='container mt-5 text-white'>
        <h1 id='typed1' className='text-center text-lg-start display-2'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi! I'm Ivaylo").start()
            }}
          />
        </h1>
        <h2 id='typed2' className='text-center text-lg-start display-6'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString("And I'm a Web Developer")
                .start()
                .pauseFor(500)
                .deleteChars(13)
                .pauseFor(500)
                .typeString("JavaScript Developer")
                .start()
                .pauseFor(500)
                .deleteChars(20)
                .pauseFor(500)
                .typeString("Front End Developer")
                .start()
                .pauseFor(500)
                .deleteChars(24)
                .pauseFor(500)
                .typeString(" love JavaScript and Web Development")
            }}
          />
        </h2>
      </div>
    </div>
  )
}

export default Jumbotron
