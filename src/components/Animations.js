import gsap, { Power1 } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const floatAnimation = () => {
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

export const headerAnimation = (ref) => {
  gsap.from(ref, {
    opacity: 0,
    y: -50,
    duration: 0.7,
    stagger: 0.2,
  })
}

export const sliderAnimation = (ref) => {
  gsap.from(ref, {
    y: 150,
    opacity: 0,
    duration: 2,
    ease: "back",
    scrollTrigger: {
      trigger: ref,
      start: "top 85%",
    },
  })
}
