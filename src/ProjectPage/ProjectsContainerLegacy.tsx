import pimg from '../Images/nightsky.jpg';
import React from "react";
import GithubButton from './GithubButton';

function ProjectsContainer(){
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
}

export default ProjectsContainer;


/*

                <ProjectCard
                    title="Twitch AI Outcome Predictor"
                    description="Predict the outcome of MK games on Twitch streams"
                    imgSrc={pimg}
                    githubLink="https://github.com/randyduong08"
                    modalTitle="Outcome Predictor"
                    modalDesc="Python program that uses regressional model to predict 
                                the outcome of Mario Kart games on Twitch streams.
                                Uses OpenCV and pytesseract, for Computer Vision and
                                OCR respectively."
                    index = {0}
                />
                <ProjectCard
                    title="Real-Time Occupancy Monitoring System"
                    description="Monitors and actively updates the status of people/pets"
                    imgSrc={pimg}
                    githubLink="https://github.com/randyduong08"
                    modalTitle="Monitoring System"
                    modalDesc="Python Program that monitors the number of people inside/outside the house.
                                Using regression models to predict the activities of people when they go out.
                                Uses YOLO to detect familiar people in/out the household."
                    index = {1}
                />
                <ProjectCard
                    title="Unity Game Project"
                    description="Multiplayer game in Unity"
                    imgSrc={pimg}
                    githubLink="https://github.com/randyduong08"
                    modalTitle="Unity Game"
                    modalDesc="Developed a game in Unity, that has network capabilities for multiplayer with sever-client or peer-to-peer connection."
                    index = {2}
                />
*/