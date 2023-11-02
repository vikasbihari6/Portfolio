import "./FormStyle.css"

import React from 'react'

import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_t6yuu4a', 'template_wkc4iik', e.target, 'Jacjs2rg8Ehap-3CK')
    .then((result) => {
      console.log('Email sent successfully:', result);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}

const Form = () => {
  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows={6} placeholder="Type your message here" name="message"/>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
