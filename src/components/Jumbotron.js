import React from "react"

const Jumbotron = ({ text }) => {
  return (
    <div className="jumbotron jumbotron-fluid shadow p-1 mb-5 border-bottom border-white border-2 d-flex flex-column justify-content-center">
      <div className="container mt-5">
          <h1 className="display-2 mt-5 pt-5">{text.title}</h1>
          <p className="lead">{text.par}</p>
      </div>
    </div>
  )
}

export default Jumbotron
