import React from "react"
import LinkedinIcon from "../assets/linkedin.svg"
import GitHubIcon from "../assets/github-contact.svg"
import { useState } from "react"
import "leaflet"
import MapComponent from "../components/map"

const Contact = () => {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [textInput, setTextInput] = useState("")

  return (
    <div className="container-fluid bg-light shadow pb-5" id="contact">
      <h1 className="display-6 text-center my-4">Contact</h1>
      <div className="row justify-content-center">
        <div className="col-sm-auto mt-3">
          <form action="/sent" method="post" className="form-control d-flex flex-column">
            <h3 className="text-center my-3">Contact Form</h3>
            <label htmlFor="firstName">Name</label>
            <input
              required
              value={nameInput}
              name="name"
              type="text"
              id="firstName"
              placeholder="Name"
              onChange={(e) => setNameInput(e.target.value)}
            />
            <label htmlFor="lastName">Email</label>
            <input
              required
              value={emailInput}
              name="email"
              type="text"
              id="lastName"
              placeholder="email@example.com"
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <label htmlFor="textarea">Message</label>
            <textarea
              required
              value={textInput}
              name="message"
              placeholder="Your message"
              id="textarea"
              cols="50"
              rows="4"
              onChange={(e) => setTextInput(e.target.value)}
            />
            <input type="submit" className="btn btn-info mt-2" />
          </form>
        </div>
        <div className="col-xl-3 my-3 text-center d-flex flex-column justify-content-center align-items-center">
          <div>
            <h3 className="text-center">Socials</h3>
            <a href="https://github.com/IKorchev" target="_blank" rel="noreferrer">
              <img src={GitHubIcon} className="icons m-2" alt="GitHub Icon" />
            </a>
            <a href="https://www.linkedin.com/in/ivaylo-korchev-b87bba19b/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} className="icons m-2" alt="LinkedIn Icon" />
            </a>
          </div>
          <div className="mt-4 rounded">
            <MapComponent />
          </div>
        </div>
        <div className="col-xl-3 mt-4 text-center my-3">
          <h3>Email me:</h3>
          <h6>korchev94@gmail.com</h6>
        </div>
      </div>
    </div>
  )
}

export default Contact
