import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";

interface CardProps {
    imgSrc: string;
    title: string;
    description: string;
    githubLink: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, description, imgSrc, githubLink }) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <StyledCard onClick={handleShow}>
                <Card.Img variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" href={githubLink} target="_blank">
                        View Github
                    </Button>
                </Card.Body>
            </StyledCard>
            <ProjectModal show={show} handleClose={handleClose} />
        </>
    );
};

const StyledCard = styled(Card)`
    cursor: pointer;
`;

export default ProjectCard;