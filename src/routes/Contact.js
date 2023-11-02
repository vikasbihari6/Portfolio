import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyImage2 from '../components/MyImage2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MyImage2 heading="CONTACT US." text="Let's have a chat" /> 
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
