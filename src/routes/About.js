import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyImage2 from '../components/MyImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <MyImage2 heading="About." text="I'm a Software Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
