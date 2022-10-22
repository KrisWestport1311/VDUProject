import React from 'react'
import'../About/about.scss'

const AboutCard = (props) => {
  return (
    <>
    
    <h3>{props.heading}</h3>
    <p>{props.text}</p>
    </>
    )
}

export default AboutCard