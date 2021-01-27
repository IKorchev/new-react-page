import React from "react"
import Backtotop from './backtotop'
const Footer = () => {
  return (
    <div className="footer text-center bg-light p-3 mt-1">
      <Backtotop/>
      <p className="lead">
        &copy; Ivaylo Korchev <br /> 2021
      </p>
    </div>
  )
}

export default Footer
