import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyImage2 from '../components/MyImage2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <MyImage2 heading="PROJECTS." text="Some of My works." />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
