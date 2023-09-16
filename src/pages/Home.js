
import React from 'react'

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

import "../styles/Home.css"

function Home() {
  return <div className = "home">
    <div className = "about">
     <h2> Biruk Amene </h2>
     <div className = "prompt">
     <p> CS <span class="highlight">@</span> Duke University</p>
        <a href = "https://www.linkedin.com/in/biruk-amene-274316219/" target="_blank">
        <LinkedInIcon style={{ fontSize: '40px' }}/>
        </a>
        <a href = "https://github.com/bsamene" target="_blank">
        <GitHubIcon style={{ fontSize: '40px' }}/>
        </a>
     </div>
     </div>

    </div>

}

export default Home

