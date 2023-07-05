import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
//Jumbotron component
// Uses bootstrap jumbotron class

interface ButtonProps {
  onClick: () => void;
  text: string;
}

function Button(props: ButtonProps) {
  return(
    <StyledButton onClick={props.onClick} data-text={props.text}>
      {props.text}
    </StyledButton>
  );
}

function Jumbotron() {

  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Projects");
  }; 

  return (
    <StyledJumbotron className="jumbotron">
      <div className="container text-center">
        <h1>Randy Duong</h1>
        <div className="intro-text">
          <p>I'm a third year student at the University of Windsor studying Computer Science, with a specialization in Software Engineering.</p>
          <p>I am passionate about programming, with a particular interest in Machine Learning and Game Development.</p>
          <p>I also love working with front-end related concepts, specifically using React, Flask, and TypeScript to develop full-scale web applications.</p>
        </div>
        <Button onClick={handleButtonClick} text="Check out my work" />
      </div>
    </StyledJumbotron>
  )
}

const fadeInSkew = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) skewX(-15deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) skewX(-15deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledButton = styled.button`
  position: relative;
  background-color: rgba(211, 211, 211, 0.3);
  color: #007bff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  transform: skewX(-15deg);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 100%;
    background-color: #add8e6;
    transform: skewX(0deg);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    transform: skewX(-15deg);
    clip-path: polygon(0 0, 0% 100%, 0% 100%, 0 0);
    transition: all 0.3s ease;
  }

  &:hover {
    color: transparent;
  }

  &:hover:before {
    left: 0;
    opacity: 1;
    transition: all 0.3s ease, opacity 0s;
  }

  &:hover:after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const StyledJumbotron  = styled.div`
  & h1,
  .intro-text p {
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
  }

  & h1 {
    animation-delay: 0.3s;
    margin-bottom: 2.2rem; //separate h1 from rest of content below it
  }

  .intro-text p {
    &:nth-child(1) {
      animation-delay: 0.6s;
    }
    &:nth-child(2) {
      animation-delay: 0.9s;
    }
    &:nth-child(3) {
      animation-delay: 1.2s;
    }
  }

  ${StyledButton} {
    opacity: 0;
    animation: ${fadeInSkew} 1s forwards;
    animation-delay: 1.5s;
  }
`;


export default Jumbotron;