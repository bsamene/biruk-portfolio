import React from 'react'
import "../styles/About.css"
import AboutUsImage from "../assets/AboutUsImage.jpg"
function About() {
  return (
    <>
    <h1 className = "aboutTitle">About Me</h1>
    <div className = "aboutDescription">

        <p>Hi there! My name is Biruk Amene. I'm currently studying computer science at Duke University, concentrating in software systems. When I'm not programming, you'll catch me playing basketball, NYT Games, watching One Piece, and doing escape rooms. This site highlights some of my computer science related ventures during my time at Duke, feel free to explore!</p>
        <img src={AboutUsImage} alt="About Me" className="aboutImage" />
    </div>
    </>
  )
}

export default About
