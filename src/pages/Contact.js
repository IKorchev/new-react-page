import { useState } from "react"
import "leaflet"

const Contact = () => {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [textInput, setTextInput] = useState("")

  return (
    <div className='container mx-auto py-4 mt-2' id='contact'>
      <h1 className='section-title my-5 pb-3 border-bottom'>Contact</h1>
      <div className='row justify-content-around'>
        <form
          action='/sent'
          method='post'
          className='d-flex flex-column col-lg-4 text-dark '>
          <h2 className='h3 text-center my-3 text-white'>Contact Form</h2>
          <div className='form-floating mb-3'>
            <input
              className='form-control'
              required
              value={nameInput}
              name='name'
              type='text'
              id='firstName'
              placeholder='Name'
              onChange={(e) => setNameInput(e.target.value)}
            />
            <label htmlFor='firstName'>Name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              required
              value={emailInput}
              name='email'
              type='text'
              id='lastName'
              placeholder='email@example.com'
              className='form-control'
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <label htmlFor='lastName'>Email</label>
          </div>
          <div className='form-floating '>
            <textarea
              className='form-control'
              required
              value={textInput}
              name='message'
              placeholder='Your message'
              id='textarea'
              cols='50'
              rows='5'
              onChange={(e) => setTextInput(e.target.value)}
            />
            <label htmlFor='textarea'>Message</label>
          </div>
          <button type='submit' id='form-btn' value='SUBMIT' className='btn mt-2'>
            SUBMIT
          </button>
        </form>
        <div className='socials-container col-lg-4 text-center d-flex flex-column justify-content-start'>
          <h2 className='h3 text-start mb-5 text-white'>Links</h2>

          <div className='social-links d-flex flex-column align-items-start'>
            <a
              href='https://github.com/IKorchev'
              className='text-white my-3  fs-4 icons d-flex justify-content-center align-items-center'
              target='_blank'
              rel='noreferrer'>
              <i className='bi bi-github mx-2'></i>GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/ivaylo-korchev-b87bba19b/'
              target='_blank'
              className='text-white my-3  fs-4 icons d-flex justify-content-center align-items-center'
              rel='noreferrer'>
              <i className='bi bi-linkedin mx-2'></i>Linkedin
            </a>

            <a
              href='mailto:korchev94@gmail.com'
              className='text-white my-3 fs-4 icons d-flex justify-content-center align-items-center'>
              <i className='bi bi-envelope-fill mx-2'></i>korchev94@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
