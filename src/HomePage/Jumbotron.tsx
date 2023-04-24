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
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }

`;


export default Jumbotron;