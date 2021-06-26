import { useState } from "react"
import "leaflet"

const Contact = () => {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [textInput, setTextInput] = useState("")

  return (
    <div className='container mx-auto py-5 mt-2' id='contact'>
      <h1 className='section-title my-5 py-3 border-bottom'>Contact</h1>
      <div className='row justify-content-center'>
        <form
          action='/sent'
          method='post'
          className='d-flex flex-column col-md-4 text-dark '>
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
        <div className='col-md-4 text-center d-flex flex-column justify-content-around align-items-center'>
          <div>
            <h2 className='h3 text-center my-3'>Socials</h2>
            <a href='https://github.com/IKorchev' target='_blank' rel='noreferrer'>
              <i className='bi bi-github icons m-2 fs-2'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/ivaylo-korchev-b87bba19b/'
              target='_blank'
              rel='noreferrer'>
              <i className='bi bi-linkedin icons m-2 fs-2'></i>
            </a>
          </div>
          <div>
            <h2 className='h3 my-3'>Email me:</h2>
            <p className='h6'>korchev94@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
