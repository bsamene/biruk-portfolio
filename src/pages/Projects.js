import React from 'react';
import ProjectItem from '../components/ProjectItem';
import "../styles/Projects.css";
import {ProjectList} from '../helpers/ProjectList';
function Projects() {
  return (
    <div className = "projects">
        <div className='ProjectList'>
        {ProjectList.map((project, idx) => {
            return <ProjectItem id = {idx} name = {project.name} image = {project.image}/>;
        })}
    </div>
    </div>
  );
}

export default Projects;
