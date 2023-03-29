import React from "react";
import ProjectCard from "./ProjectCard";
import pimg from '../Images/nightsky.jpg';

const ProjectsContainer = () => {
    return(
        <div className="scroll-container">
        <div
            id="card-track"
            className="container"
            data-mouse-down-at={0}
            data-prev-percentage={0}
        >
            <div className="scroll-content">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                {/*Project cards go here, in the middle main column*/}
                {/*test new card*/}
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
                {/*test new card above*/}
                </div>
                <div className="col-md-1" />
            </div>
            </div>
        </div>
        </div>
    );
};


export default ProjectsContainer;

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