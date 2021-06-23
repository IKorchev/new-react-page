import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Power1, Power4 } from "gsap"
import BGImage from "../components/BGImage"
import Aboutme from "./Aboutme"
const LandingPage = () => {
  const contentRef = useRef(null)
  const floatAnimation = () => {
    const tl = gsap.timeline({ repeat: -1 })
    const shapesTL = gsap.timeline({ repeat: -1 })

    tl.to("#Person", { y: "-=10", duration: 2, ease: Power1.easeInOut }).to("#Person", {
      y: "+=10",
      duration: 2,
      ease: Power1.easeInOut,
    })

    shapesTL.to(".Rectangle", {
      y: "-=15",
      duration: 2,
    })
    shapesTL.to(".Rectangle", {
      y: "+=15",
      duration: 2,
    })
    shapesTL.to(".Ellipse", {
      x: "+=5",
      duration: 2,
      ease: Power1.easeInOut,
    })
    shapesTL.to(".Ellipse", {
      x: "-=5",
      duration: 2,
      ease: Power1.easeInOut,
    })
  }

  const headerAnimation = () => {
    const tl = gsap.timeline()
    tl.from(contentRef.current.children, {
      opacity: 0,
      y: -50,
      duration: 0.7,
      stagger: 0.2,
    }).to(contentRef.current.children[2].children[0], {
      backgroundColor: "black",
    })
  }
  useEffect(() => {
    headerAnimation()
    floatAnimation()
  }, [])
  return (
    <>
      <div className='landing-page bg-dark container-fluid px-0' id='home'>
        <div className='left'>
          <div className='left-content d-flex flex-column' ref={contentRef}>
            <h1 className='display-1'>Hi, I'm Ivaylo</h1>
            <h2 className=' display-3'>Web Developer</h2>
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
    </>
  )
}

export default LandingPage
