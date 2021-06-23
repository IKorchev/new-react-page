import React from "react"
import Backtotop from "../components/backtotop"

const Footer = () => {
  return (
    <div className='footer text-center p-3 mt-1'>
      <Backtotop />
      <p className='text-info'>
        &copy; Ivaylo Korchev <br /> 2021
      </p>
    </div>
  )
}

export default Footer
