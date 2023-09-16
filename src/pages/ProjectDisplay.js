import React from 'react';
import { useParams } from "react-router-dom";
import {ProjectList} from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
    const githubRepoUrl = "https://github.com/bsamene/HackDuke2023"
    return (
        <div className = "project">
        <h1> {project.name} </h1>
        <img src = {project.image} />
        <p>Written in {project.skills} </p>
        <p>{project.description}</p>
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
        </a>
   </div>
  );
}

export default ProjectDisplay;
