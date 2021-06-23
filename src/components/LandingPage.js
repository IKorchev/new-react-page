import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { Power1, Power4 } from "gsap"
import BGImage from "./BGImage"
import Aboutme from "../pages/Aboutme"
const LandingPage = () => {
  const headerRef1 = useRef(null)
  const headerRef2 = useRef(null)
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

  useEffect(() => {
    floatAnimation()
  }, [])
  return (
    <>
      <div className='landing-page bg-dark container-fluid p-0 ' id='home'>
        <div className='left'>
          <h1 ref={headerRef1} className='display-1 px-5 mb-5'>
            Hi, I'm Ivaylo
          </h1>
          <h2 ref={headerRef2} className=' display-3 px-5'>
            Web Developer
          </h2>
        </div>
        <div className='right-wrapper'>
          <BGImage />
        </div>
      </div>
      <Aboutme />
    </>
  )
}

export default LandingPage
