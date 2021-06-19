import React from "react"
import { Link } from "react-scroll"
import Resume from "../assets/Ivaylo_Korchev_CV.docx"
const Navbar = () => {
  return (
    <nav
      id='nav'
      className='navbar bg-dark text-white navbar-expand-lg fixed-top d-flex justify-content-between'>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarCollapse'
        aria-controls='navbar-collapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='bi bi-list fs-1'></i>
      </button>
      <div className='collapse navbar-collapse navbar-nav ' id='navbarCollapse'>
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
        <div className='links d-flex'>
          <a
            className='nav-link'
            href='https://github.com/ikorchev/'
            target='_blank'
            aria-label='Link to my Github'
            rel='noreferrer'>
            <i className='fab fa-github fa-lg' alt='Link to my Github'></i>
          </a>
          <a
            className='nav-link'
            aria-label='Link to my Github'
            href='https://www.linkedin.com/in/ivaylo-korchev'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-linkedin fa-lg' alt='Link to my Linkedin'></i>
          </a>
          <a
            className='nav-link'
            aria-label='Link to download my resume'
            href={Resume}
            target='_blank'
            rel='noreferrer'
            download>
            <i className='fas fa-file-download'></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
