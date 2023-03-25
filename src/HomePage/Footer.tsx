import React from "react";
//Footer component


function Footer(){
    return(
        <footer className="header-footer">
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
                href="externalfiles/Resume.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </footer>
    );

}

export default Footer;