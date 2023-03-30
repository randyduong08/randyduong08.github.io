import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";

interface CardProps {
    imgSrc: string;
    title: string;
    description: string;
    githubLink: string;
    modalTitle: string;
    modalDesc: string;
}

const handleGitHubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
}

const ProjectCard: React.FC<CardProps> = 
({ title, description, imgSrc, githubLink, modalTitle, modalDesc }) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <StyledCard onClick={handleShow}>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                    <Card.Text>{description}</Card.Text>
                    <span className="text-right">
                        <Button variant="primary" href={githubLink} target="_blank" onClick={handleGitHubClick}>
                            View Github
                        </Button>
                    </span>
                    </div>
                </Card.Body>
            </StyledCard>
            <ProjectModal show={show} handleClose={handleClose} title={modalTitle} 
              description={modalDesc} />
        </>
    );
};

const StyledCard = styled(Card)`
  cursor: pointer;

  @media (min-width: 480px) {
    width: 100%;
    max-width: 480px;
  }

  @media (min-width: 576px) {
    width: 100%;
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    width: 100%;
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    width: 100%;
    max-width: 960px;
  }
  
  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1140px;
  }
  width: 67rem;
  margin-right: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }

  .card-img-top {
    height: 15rem;
    object-fit: cover;
  }

  .card-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .card-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

export default ProjectCard;