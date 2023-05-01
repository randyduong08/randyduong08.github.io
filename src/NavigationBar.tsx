import { Link } from "react-router-dom";
import React from "react";
import ThemeSwitcher from "src/ThemeSwitcher";
import styled from 'styled-components';
// Navigationbar component
// Typically the onnly component that makes up the 'header' of a page
function NavigationBar() {
    return (
            <>
    {/*Nav means a section of page containning navigation links, 
    either to other pages, or other sections*/}
    <TopbarNavContainer>
        <TopbarNavLinks>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    {/* listed items are href just meaning that they have embedded hyperlinks in them,
                    where the link the text leads to is determined by the link inside the string
                    Note that for fresh sites, you have to use https://www.(desiredwebsite)
                    Otherwise, if I just had google.com, the hyperlink would lead to websitedomain/google.com*/}
                    <div className="col-auto">
                    {/*<Link to="/" className="text-decoration-none">
                        Home
                        </Link>*/}
                        <NavButton as={Link} to="/" className="text-decoration-none">
                            Home
                        </NavButton>
                    </div>
                    <div className="col-auto">
                        <NavButton as={Link} to="/Contacts" className="text-decoration-none">
                            Contact/Externals
                        </NavButton>
                    </div>
                    <div className="col-auto">
                        <NavButton as={Link} to="/Projects" className="text-decoration-none">
                            Projects
                        </NavButton>
                    </div>
                    {/*<div className="col-auto">
                    <NavButton
                        as="a"
                        href="https://www.linkedin.com/in/rduong08"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </NavButton>
                    </div>*/}
                    <NoRightPaddingCol className="col-auto">
                        <div className="top-right">
                            <ThemeSwitcher/>
                        </div>
                    </NoRightPaddingCol>
                </div>
            </div>
        </TopbarNavLinks>
    </TopbarNavContainer>
    </>
    );
}

const TopbarNavContainer = styled.div`
    height: 40px; // Adjust thickness of navbar
`;

const TopbarNavLinks = styled.div`
    display: flex;
    align-items: center;
    height: 112%;
`;

const NavButton = styled.button`
  position: relative;
  overflow: hidden;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  transition-duration: 0.4s;
  color: inherit;

  &:hover {
    color: #9e9e9e;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% + 4px);
    background-color: rgba(98, 98, 214, 0.1);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.4s ease;
    
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const NoRightPaddingCol = styled.div`
    padding-right: 0;
`;

export default NavigationBar;