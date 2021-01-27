import React, { useEffect } from "react"
import Typed from "typed.js"

const Jumbotron = () => {
  useEffect(function () {
    const typed1 = new Typed("#typed1", {
      strings: ["Ivaylo Korchev"],
      typeSpeed: 25,
      loop: false,
      showCursor: false,
    })
    const typed2 = new Typed("#typed2", {
      strings: ["Web Developer. Profficient with <span id='whitetext'> HTML, CSS and JavaScript </span>"],
      loop: false,
      typeSpeed: 50,
      startDelay: 1500,
      showCursor: false,
    })
  }, [])

  const downArrowHandler = () => {
    if (window.innerWidth <= 880) {
      window.scrollTo(0, 400)
    } else {
      window.scrollTo(0, 600)
    }
  }

  return (
    <div className="jumbotron jumbotron-fluid py-1 mb-3 border-bottom border-white border-2 d-flex flex-column justify-content-center">
      <div className="container mt-5 text-white">
        <h1 id="typed1" className="display-1 text-center my-2"></h1>
        <h6 id="typed2" className="display-6 text-center"></h6>
        <div id="downarrow">
          <i className="far fa-caret-square-down fa-2x" onClick={downArrowHandler}></i>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
