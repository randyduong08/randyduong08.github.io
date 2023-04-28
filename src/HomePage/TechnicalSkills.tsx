import React from "react";
import styled from "styled-components";
import typescriptImage from "../Images/TypeScriptIcon.png";
import pythonImage from "../Images/PythonIcon.png";

const skills = [
    {
        title: "Python",
        image: pythonImage
    },
    {
        title: "TypeScript",
        image: typescriptImage
    }
];

function TechnicalSkills(){
    return (
        //<p>Temp, insert technical skill cards here (ex: Python, C#, etc.)</p>
        <SkillsSection>
            <div className="container">
                <div className="row">
                    {skills.map((skill, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <SkillCard>
                                <h6>{skill.title}</h6>
                                <img src={skill.image} alt={skill.title} />
                            </SkillCard>
                        </div>
                    ))}
                </div>
            </div>
        </SkillsSection>
    );
}

export default TechnicalSkills;

const SkillsSection = styled.section`
    && {
        padding: 2rem 0;
        margin-bottom: 1rem;
    }
`;

const SkillCard = styled.div`
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    text-align: center;
    width: calc(100% - 2rem);
    max-width: 200px;

    h6 {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        max-height: 150px;
    }
`;