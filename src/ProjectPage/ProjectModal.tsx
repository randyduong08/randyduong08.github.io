import React, { useContext } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { ThemeContext } from "src/ThemeContext";

interface ProjectModalProps{
    show: boolean;
    handleClose: () => void;
}

const ProjectModal = ({ show, handleClose }: ProjectModalProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Modal show={show} onHide={handleClose} centered className="project-modal">
      <Modal.Header closeButton className="modal-box">
        <Modal.Title>Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-box">
        <StyledText theme={theme} className="modal-text">
          <h5>Project Title</h5>
          <p>Sample text explaining the purpose of this project</p>
        </StyledText>
      </Modal.Body>
      <Modal.Footer className="modal-box">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const StyledText = styled.div<{ theme: "light" | "dark" }>`
  color: ${({ theme }) => (theme === "light" ? "#333" : "#ffffff")};
`;

export default ProjectModal;