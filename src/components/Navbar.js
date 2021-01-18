import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
      <a className="ms-3 navbar-brand" href="#home">
        Home
      </a>
      <div className="navbar-nav navbar-light">
        <a className="nav-link nav-item px-3 mx-2" href="#projects">
          Projects
        </a>
        <a className="nav-link nav-item px-3 mx-2" href="#skills">
          Skills
        </a>
        <a className="nav-link nav-item px-3 mx-2" href="#">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
