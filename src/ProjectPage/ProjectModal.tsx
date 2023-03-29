import React from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

interface ProjectModalProps{
    show: boolean;
    handleClose: () => void;
}

const ProjectModal = ({ show, handleClose }: ProjectModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="project-modal">
      <Modal.Header closeButton>
        <Modal.Title>Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="modal-text">Project Title</h5>
        <p className="modal-text">Sample text explaining the purpose of this project</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;