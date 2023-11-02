import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyImage from '../components/MyImage'
import Work from "../components/Work"
import About from "../routes/About"
import Contact from "../routes/Contact"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MyImage></MyImage>
      <Work />
      <Footer></Footer>
    </div>
  )
}

export default Home
