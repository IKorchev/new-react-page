import React from "react"
import LinkedinIcon from "../assets/linkedin.svg"
import GitHubIcon from "../assets/github-contact.svg"

const Contact = () => {
  return (
    <div className="container-fluid bg-light p-3 shadow">
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <h3 className=" text-center mb-5">Contact Form</h3>
          <form className="form-control d-flex flex-column">
            <label htmlFor="firstName">Name</label>
            <input type="text" id="firstName" placeholder="Name" />
            <label htmlFor="lastName">Email</label>
            <input type="text" id="lastName" placeholder="email@example.com" />
            <label htmlFor="textarea">Message</label>
            <textarea placeholder="Your message" id="textarea" cols="50" rows="4" />
          </form>
        </div>
        <div className="col-lg-3 text-center">
          <h3 className="text-center">Socials</h3>
          <a href="https://github.com/IKorchev" target="_blank">
            <img src={GitHubIcon} className="icons m-2" alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/ivaylo-korchev-b87bba19b/" target="_blank">
            <img src={LinkedinIcon} className="icons m-2" alt="LinkedIn Icon" />
          </a>
        </div>
        <div className="col-lg-3 text-center">
          <h3 className="">Email me:</h3>
          <h6>korchev94@gmail.com</h6>
        </div>
      </div>
    </div>
  )
}

export default Contact
