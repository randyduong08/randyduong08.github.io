import React from "react";
import ProjectCard from "./ProjectCard";
import pimg from '../Images/nightsky.jpg';

const projectData = [
    {
        title:"Twitch AI Outcome Predictor",
        description:"Predict the outcome of MK games on Twitch streams",
        imgSrc:pimg,
        githubLink:"https://github.com/randyduong08",
        modalTitle:"Outcome Predictor",
        modalDesc:"Python program that uses regressional model to predict the outcome of Mario Kart games on Twitch streams. Uses OpenCV and pytesseract, for Computer Vision and OCR respectively."
    },
    {
        title:"Real-Time Occupancy Monitoring System",
        description:"Monitors and actively updates the status of people/pets",
        imgSrc:pimg,
        githubLink:"https://github.com/randyduong08",
        modalTitle:"Monitoring System",
        modalDesc:"Python Program that monitors the number of people inside/outside the house. Using regression models to predict the activities of people when they go out. Uses YOLO to detect familiar people in/out the household."
    },
    {
        title:"Unity Game Project",
        description:"Multiplayer game in Unity",
        imgSrc:pimg,
        githubLink:"https://github.com/randyduong08",
        modalTitle:"Unity Game",
        modalDesc:"Developed a game in Unity, that has network capabilities for multiplayer with sever-client or peer-to-peer connection."
    }
]

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
                {/*Mapping of project data here*/}
                {projectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        index={index}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.imgSrc}
                        githubLink={project.githubLink}
                        modalTitle={project.modalTitle}
                        modalDesc={project.modalDesc}
                    />
                ))}
                </div>
                <div className="col-md-1" />
            </div>
            </div>
        </div>
        </div>
    );
};


export default ProjectsContainer;
