/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react"
import Typed from "typed.js"

const Jumbotron = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const typed1 = new Typed("#typed1", {
      strings: ["Ivaylo Korchev"],
      typeSpeed: 25,
      loop: false,
      showCursor: false,
    })
    // eslint-disable-next-line no-unused-vars
    const typed2 = new Typed("#typed2", {
      strings: [
        "Web Developer. Profficient with <span> HTML, CSS and JavaScript </span>",
      ],
      loop: false,
      typeSpeed: 50,
      startDelay: 1500,
      showCursor: false,
    })
  }, [])

  return (
    <div className='jumbotron jumbotron-fluid py-1 mb-3 border-bottom border-white border-2 d-flex flex-column justify-content-center'>
      <div className='container mt-5 text-white'>
        <h1 id='typed1' className='display-2 text-center my-2'></h1>
        <h2 id='typed2' className='display-6 text-center'></h2>
      </div>
    </div>
  )
}

export default Jumbotron
