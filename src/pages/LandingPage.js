import { useRef } from "react"
import { Link } from "react-scroll"
import Navbar from "../components/Navbar"
import BottomBlob from "../assets/Bottom-blob.svg"
const LandingPage = () => {
  const contentRef = useRef(null)

  return (
    <div className='landing-page-wrapper container-fluid p-0 d-flex flex-column'>
      <Navbar />
      <img src={BottomBlob} alt='bottom blob background' className='bottom-blob' />
      <div
        className='landing-page-content container mx-auto d-flex flex-column'
        ref={contentRef}>
        <h1 className='display-2 my-2'>Hi, I'm Ivaylo</h1>
        <h2 className=' display-5 my-2'>Web Developer</h2>
        <div className='cto-buttons-container my-5'>
          <a
            className='cto-buttons'
            id='cto-button'
            target='_blank'
            rel='noreferrer'
            href='https://linkedin.com/in/ivaylo-korchev'>
            Contact me
          </a>
          <Link className='cto-buttons' id='cto2-button' to='projects'>
            My work
          </Link>
        </div>
      </div>
      <Link className='scroll-btn d-flex flex-column align-items-center' to='aboutme'>
        <i class='bi bi-arrow-down-circle'></i>
        <span className='text-reset'>Learn more</span>
      </Link>
      <br></br>
    </div>
  )
}

export default LandingPage
