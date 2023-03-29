import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import pimg from '../Images/nightsky.jpg';
import GithubButton from "./GithubButton";

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
                {/*test new card above*/}
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt=""
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                            <GithubButton
                                link="https://www.github.com/randyduong08"
                                text="View Github"
                            />
                        </span>
                    </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt=""
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project 2</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                        <a href="https://www.github.com/randyduong08" className="btn btn-primary">
                            View Github
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <img
                    src={pimg}
                    className="card-img-top"
                    alt=""
                    draggable="false"
                    />
                    <div className="card-body">
                    <h2 className="card-title">Project 3</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text">
                        Sample text explaining the purpose of this project
                        </p>
                        <span className="text-right">
                        <a href="https://www.github.com/randyduong08" className="btn btn-primary">
                            View Github
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
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