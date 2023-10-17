import React from 'react'
import Nav from './components/nav'
import Presentation from './components/presentation'
import Footer from './components/footer'
import Projects from './components/projects'
import Contact from './components/contact'
import Skills from './components/skills'
import './App.css'

const App = () => {
  return (
    <div>
      <Nav />
      <Presentation />
      <Skills />
      <Projects /> 
      {/* <Contact />  */}
      <Footer />
    </div>
  )
}

export default App