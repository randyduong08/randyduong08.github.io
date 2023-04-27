import React from "react";
import resumePDF from "../externalfiles/Resume.pdf";
import styled, { keyframes } from "styled-components";
//Footer component


function Footer(){
    return(
        <StyledFooter className="header-footer">
        <div className="row">
          <div className="col-sm-4">
            <h6>Contact information</h6>
            <p className="footer-text">Randy Duong</p>
            <p className="footer-text">Personal: randyduong08@gmail.com</p>
            <p className="footer-text">School: duong51@uwindsor.ca</p>
          </div>
          <div className="col-sm-4">
            <h6>Page Navigation</h6>
            <p className="footer-text">Sample text</p>
            <p className="footer-text">Sample text</p>
            <p className="footer-text">Sample text</p>
          </div>
          <div className="col-sm-4">
            <h6>External links</h6>
            <p className="footer-text">
              <a
                href="https://github.com/randyduong08"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
            <p className="footer-text">
              <a
                href="https://www.linkedin.com/in/rduong08"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="footer-text">
              <a 
                href={resumePDF} 
                target="_blank" 
                rel="noreferrer" 
                className="text-decoration-none"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </StyledFooter>
    );

}

export default Footer;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledFooter = styled.footer`
  opacity: 0;
  animation: ${slideUp} 1s forwards;
  animation-delay: 1.8s; //set to 0.3 seconds after last Main page fade-in animation
`;