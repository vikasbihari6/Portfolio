import './FooterStyle.css'
import { FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin,FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <p>Kamaldah Sitamarhi Bihar.</p>
                    <p>India</p>
                </div>

                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91 9135687393
                    </h4>
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                vikasbihari6@gmail.com
                    </h4>
                </div>

                
            </div>
            <div className='right'>
                <h4>
                    About Me.
                </h4>
                <p>
                I'm Vikas Kumar.As a Software Engineer, I have a strong foundation in C++, Java, and a rich skill set spanning front-end development (HTML, CSS, JavaScript, React.js, Redux, Bootstrap, Ejs) and back-end technologies (Node.js, Express.js, MongoDB). What sets me apart is my passion for problem-solving, reflected in my ability to tackle and solve more than 600 challenging problems on platforms like LeetCode and GeeksforGeeks.
                </p>
                <div className='social'>
                <Link to="https://www.facebook.com/vikash.bihari.984349/"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
                <Link to="https://www.instagram.com/vikasbihari91/"><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
                <Link to="https://www.linkedin.com/in/vikas-kumar-992584253/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
                <Link to="https://twitter.com/vikasBihari91"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
