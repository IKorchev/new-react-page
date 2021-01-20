import React from "react"

const Jumbotron = ({ text }) => {
  return (
    <div className="jumbotron jumbotron-fluid shadow p-5 mb-5">
      <div className="container py-5">
        <h1 className="display-2">{text.title}</h1>
        <p className="lead">{text.par}</p>
      </div>
    </div>
  )
}

export default Jumbotron
