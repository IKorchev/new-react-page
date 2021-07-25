import "./App.css"
// Pages
import LandingPage from "./pages/LandingPage"
import Aboutme from "../src/pages/Aboutme"
import Skill from "./components/Skill"
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"
import Footer from "../src/pages/Footer"
import SideComponent from "./components/SideComponent"

function App() {
  return (
    <div>
      <SideComponent />
      <LandingPage />
      <main className='container mx-auto bg-white text-dark'>
        <Aboutme />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
