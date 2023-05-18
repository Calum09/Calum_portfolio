import './App.css'
import Navbar from './Components/Navbar.jsx'
import Intro from './Components/Intro.jsx'
import MyServices from './Components/MyServices.jsx'
import AboutMe from './Components/AboutMe.jsx'
import MyWork from './Components/MyWork.jsx'
import Footer from './Components/Footer.jsx'



function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  )
}

export default App
