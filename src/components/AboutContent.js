import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"
import Vikas_image from "../assets/Vikas_image.jpg"
import programming from "../assets/programming.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
        I'm Vikas Kumar.As a Software Engineer, I have a strong foundation in C++, Java, and a rich skill set spanning front-end development (HTML, CSS, JavaScript, React.js, Redux, Bootstrap, Ejs) and back-end technologies (Node.js, Express.js, MongoDB).

        </p>
        <Link to="/contact">
            <button className="btn">
                Contact
            </button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img" alt="vikas"/>
            </div>
            <div className="img-stack bottom">
                <img src={programming} className="img" alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
