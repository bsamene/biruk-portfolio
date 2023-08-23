import { Instagram } from '@material-ui/icons'
import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

import "../styles/Home.css"

function Home() {
  return <div className = "home">
    <div className = "about">
     <h2> Biruk Amene </h2>
     <div className = "prompt">
        <p> CS @ Duke University</p>
        <a href = "https://instagram.com/biruk_sa?igshid=MmIzYWVlNDQ5Yg==">
        <InstagramIcon />
        </a>
        <a href = "https://www.linkedin.com/in/biruk-amene-274316219/">
        <LinkedInIcon />
        </a>
        <a href = "https://github.com/bsamene">
        <GitHubIcon />
        </a>
     </div>
     </div>

    </div>

}

export default Home

