import './MyImageStyles.css'
import IntroImage from '../assets/intro-bg.jpg'

import React from 'react'
import {Link} from 'react-router-dom'

const MyImage = () => {
  return (
    <div className='myImage'>
      <div className='mask'>
        <img className='into-img' src={IntroImage} alt="IntroImg" />
      </div>
      <div className='content'>
        <p>HI, i'M A SOFTWARE DEVELOPER.</p>
        <h1>React Developer.</h1>
      <div>
        <Link to='/project' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default MyImage
