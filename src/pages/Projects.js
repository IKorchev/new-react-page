import React, { useEffect, useRef, useState } from "react"
import AnimatedCards from "../components/AnimatedCards"
import { sliderAnimation } from "../components/Animations"
import Slider from "react-slick"

const getWindowDimensions = () => {
  const { innerWidth: width } = window
  return width
}

const Projects = () => {
  const sliderRef = useRef(null)
  //State

  const [data, setData] = useState([])
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    //Fetch data from server
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
    //animation
    sliderAnimation(sliderRef.current)

    // Handle resize for carousel
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  //Determine window size (for carousel)
  //prettier-ignore
  const numberBasedOnWidth = () => windowDimensions > 1300 ? 3 : windowDimensions > 992 ? 2 : 1;
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: numberBasedOnWidth(),
    speed: 1000,
    slidesToScroll: 1,
  }
  return (
    <div className='container' id='projects'>
      <h1 className='section-title px-0 h1 my-5 py-3 text-white border-bottom'>
        Projects
      </h1>
      <div ref={sliderRef}>
        <Slider className='container' {...settings}>
          {data.map((project, i) => (
            <AnimatedCards key={i} project={project} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
