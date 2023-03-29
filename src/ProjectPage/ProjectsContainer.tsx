import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import pimg from '../Images/nightsky.jpg';

const ProjectsContainer = () => {
    return(
        <StyledProjectsPage>
        <h1>My Projects</h1>
        <div className="card-deck">
          <ProjectCard
            title="Project 1"
            description="Sample text explaining the purpose of this project"
            imgSrc={pimg}
            githubLink="https://github.com/randyduong08"
          />
          <ProjectCard
            title="Project 2"
            description="Sample text explaining the purpose of this project"
            imgSrc={pimg}
            githubLink="https://github.com/randyduong08"
          />
          <ProjectCard
            title="Project 3"
            description="Sample text explaining the purpose of this project"
            imgSrc={pimg}
            githubLink="https://github.com/randyduong08"
          />
        </div>
      </StyledProjectsPage>
    );
};

const StyledProjectsPage = styled.div`
  h1 {
    text-align: center;
    margin-top: 50px;
  }

  .card-deck {
    margin-top: 50px;
  }
`;

export default ProjectsContainer;