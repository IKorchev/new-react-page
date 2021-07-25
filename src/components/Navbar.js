import React from "react"
import { Link } from "react-scroll"
import Logo from "../assets/Logo.svg"
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-xxl'>
      <div class='container'>
        <Link to='navbar-collapse' className='navbar-brand'>
          <img src={Logo} alt='Ivaylo Korchev (logo)' />
        </Link>
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
        <div className='collapse navbar-collapse' id='navbar-collapse'>
          {/* TODO: ADD LOGO */}
          <div className='navbar-nav ms-auto'>
            <Link className='nav-link' tabIndex='1' to='home'>
              Home
            </Link>
            <Link className='nav-link' tabIndex='2' to='aboutme'>
              About me
            </Link>
            <Link className='nav-link' tabIndex='3' to='projects'>
              Projects
            </Link>
            <Link className='nav-link' tabIndex='4' to='contact'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
