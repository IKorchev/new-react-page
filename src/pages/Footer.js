import React from "react"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <div className='footer text-center p-3 mt-1'>
      <Link to='navbar-collapse' className='scroll-btn fw-bold'>
        <i class='bi bi-arrow-up-circle-fill'></i>
      </Link>
      <p className='text-info'>
        &copy; Ivaylo Korchev <br /> 2021
      </p>
    </div>
  )
}

export default Footer
