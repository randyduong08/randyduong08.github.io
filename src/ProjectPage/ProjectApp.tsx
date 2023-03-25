//Combine all Projects Page components in this one
import ProjectsContainer from "./ProjectsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scripts,styles/projects.css';
import '../scripts,styles/index.css';
import React from "react";

function ProjectApp(){
    return(
        <div>
            <ProjectsContainer/>
        </div>
    );
}

export default ProjectApp;