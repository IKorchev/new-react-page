import React, { createRef, useEffect, useRef, useState } from "react"
import Skill from "../components/Skill"
import AnimatedCards from "../components/animatedCards"
import Slider from "react-slick"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

function getWindowDimensions() {
  const { innerWidth: width } = window
  return width
}

const Projects = () => {
  const ref = useRef(null)
  const [data, setData] = useState([])
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  gsap.registerPlugin(ScrollTrigger)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const response = await fetch("/content", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      const json = await response.json()
      setData(json)
    } catch (err) {
      console.log(err)
    }

    function handleResize() {
      console.log(getWindowDimensions())
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: windowDimensions > 1300 ? 3 : windowDimensions > 992 ? 2 : 1,
    speed: 2000,
    slidesToScroll: 3,
  }
  return (
    <div className='container' id='projects'>
      <Skill />
      <h1 className='my-5 py-3 text-white border-bottom'>Projects</h1>
      <Slider className='container' {...settings}>
        {data.map((project, i) => (
          <AnimatedCards key={i} project={project} />
        ))}
      </Slider>
    </div>
  )
}

export default Projects
