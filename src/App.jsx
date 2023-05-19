import './App.css'
import Navbar from './Components/Navbar.jsx'
import Intro from './Components/Intro.jsx'
import MyServices from './Components/MyServices.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Projects from './Components/Projects.jsx'
import Footer from './Components/Footer.jsx'



function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
