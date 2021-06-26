import { useEffect, useRef } from "react"
import { headerAnimation, floatAnimation } from "../components/Animations"
import BGImage from "../components/BGImage"
import { Link } from "react-scroll"

const LandingPage = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    headerAnimation(contentRef.current.children)
    floatAnimation()
  }, [])
  return (
    <div className='container-fluid p-0 d-flex flex-column'>
      <div className='landing-page bg-dark container-fluid px-0' id='home'>
        <div className='left'>
          <div className='left-content d-flex flex-column' ref={contentRef}>
            <h1 className='display-1'>Hi, I'm Ivaylo</h1>
            <h2 className=' display-2'>Web Developer</h2>
            <div>
              <a
                id='cto-button'
                target='_blank'
                rel='noreferrer'
                href='https://linkedin.com/in/ivaylo-korchev'>
                Contact me
              </a>
              <a
                id='cto2-button'
                target='_blank'
                rel='noreferrer'
                href='https://linkedin.com/in/ivaylo-korchev'>
                My GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='right-wrapper'>
          <BGImage />
        </div>
      </div>
      <Link className='scroll-btn d-flex flex-column align-items-center' to='aboutme'>
        <i class='bi bi-arrow-down-circle'></i>
        <span className='text-reset'>Learn more</span>
      </Link>
    </div>
  )
}

export default LandingPage
