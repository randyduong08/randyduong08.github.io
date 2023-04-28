//Combine all Projects Page components in this one
import ProjectsContainer from "./ProjectsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scripts,styles/projects.css';
import '../scripts,styles/index.css';
import React, { useEffect } from "react";


function ProjectApp() {
    useEffect(() => {
      // Add the overflow style to the body when the component is mounted
      document.body.style.overflow = "hidden";
  
      // Remove the overflow style from the body when the component is unmounted
      return () => {
        document.body.style.overflow = "";
      };
    }, []);
  
    return (
      <div>
        <ProjectsContainer />
      </div>
    );
  }

export default ProjectApp;