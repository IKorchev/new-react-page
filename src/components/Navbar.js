import React from "react"

const Navbar = () => {
  return (
    <nav
      id='nav'
      className='navbar navbar-light navbar-expand fixed-top d-flex justify-content-between'>
      <div className='nav'>
        <a className='nav-link' href='#home'>
          Home
        </a>
        <a className='nav-link' href='#projects'>
          Projects
        </a>
        <a className='nav-link' href='#contact'>
          Contact
        </a>
      </div>
      <div className='d-flex'>
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
      </div>
    </nav>
  )
}

export default Navbar
