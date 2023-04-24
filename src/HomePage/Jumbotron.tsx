import React from "react";
import styled from "styled-components";
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
    <div className="jumbotron">
      <div className="container text-center">
        <h1>Randy Duong</h1>
        <div className="intro-text">
          <p>3rd year back-end software developer</p>
          <p>sample text</p>
          <p>sample text</p>
        </div>
        <Button onClick={handleButtonClick} text="Check out my work" />
      </div>
    </div>
  )
}

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


export default Jumbotron;