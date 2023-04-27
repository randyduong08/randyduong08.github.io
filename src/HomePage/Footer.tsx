import React from "react";
import resumePDF from "../externalfiles/Resume.pdf";
import styled, { keyframes } from "styled-components";
import gitHubIcon from "../Images/gitHubIcon.png";
import linkedInIcon from "../Images/LinkedInBlackIcon.png";
import resumeIcon from "../Images/resumeAlternateIcon.png";
import GithubButton from "src/ProjectPage/GithubButton";
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
                GitHub
              </a>
              <img src={gitHubIcon} alt="GitHub Icon" className="external-link-icon" />
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
              <img src={linkedInIcon} alt="LinkedIn Icon" className="external-link-icon"/>
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
              <img src={resumeIcon} alt="Resume Icon" className="external-link-icon"/>
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
  animation-delay: 1.8s; //set to +0.3 seconds after last Main page fade-in animation


  //For footer icons for externals
  .external-link-icon {
    width: 24px;
    height: 24px;
    margin-left: 8px;
    vertical-align: middle;
  }
`;