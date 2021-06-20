import React from "react"
import { Link } from "react-scroll"
import Resume from "../assets/Ivaylo_Korchev_CV.docx"
const Navbar = () => {
  return (
    <nav
      id='nav'
      className='navbar py-2 px-5 bg-dark text-white navbar-expand-lg fixed-top'>
      <button
        className='navbar-toggler ms-auto'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbar-collapse'
        aria-controls='navbar-collapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='bi bi-list fs-1'></i>
      </button>
      <div
        className='collapse navbar-collapse navbar-nav flex-row justify-content-end'
        id='navbar-collapse'>
        {/* TODO: ADD LOGO */}
        <Link className='nav-link' to='home'>
          Home
        </Link>
        <Link className='nav-link' to='aboutme'>
          About me
        </Link>
        <Link className='nav-link' to='projects'>
          Projects
        </Link>
        <Link className='nav-link' to='contact'>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
