import { Instagram } from '@material-ui/icons'
import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css"
import Typewriter from "typewriter-effect";
function Home() {
  return <div className = "home">
    <div className = "about">
     <h2>
      <Typewriter
      onInit = {(typewriter) => {
        typewriter.typeString("Biruk Amene").start();
      }}
      />
     </h2>
     <div className = "prompt">
        <p> CS @ Duke University</p>
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
     </div>
     </div>

    </div>

}

export default Home

