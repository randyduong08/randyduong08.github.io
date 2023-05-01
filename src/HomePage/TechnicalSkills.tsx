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
        <SkillsWrapper>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <h6>{skill.title}</h6>
              <img src={skill.image} alt={skill.title} />
            </SkillCard>
          ))}
        </SkillsWrapper>
      </SkillsSection>
    );
}

export default TechnicalSkills;

const SkillsSection = styled.section`
    margin: 4rem 1rem 2rem; // Top, right and left set to 1rem, bottom set to 2rem
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; // Change this from center to flex-start
  gap: 1rem;
  max-width: 90%; // Add a max-width
  margin: 0 auto; // Center the container
`;

const SkillCard = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  width: calc(100% - 2rem);
  max-width: 200px;

  h6 {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    max-height: 250px;
  }
`;