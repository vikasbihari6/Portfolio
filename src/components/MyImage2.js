import "./MyImage2Style.css"

import React from 'react'

const MyImage2 = (props) => {
  // console.log(props.heading);
  // console.log(props.text);
  return (
    <div className="my-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default MyImage2
