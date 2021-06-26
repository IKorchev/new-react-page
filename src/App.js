import "./App.css"
// Pages
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import Aboutme from "../src/pages/Aboutme"
import Skill from "./components/Skill"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"
import Footer from "../src/pages/Footer"
import SideComponent from "./components/SideComponent"

function App() {
  return (
    <div className='bg-dark'>
      <SideComponent />
      <Navbar />
      <LandingPage />
      <Aboutme />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
