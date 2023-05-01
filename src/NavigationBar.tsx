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
    <div className="Topbar-nav-container">
        <div className="Topbar-nav-links">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    {/* listed items are href just meaning that they have embedded hyperlinks in them,
                    where the link the text leads to is determined by the link inside the string
                    Note that for fresh sites, you have to use https://www.(desiredwebsite)
                    Otherwise, if I just had google.com, the hyperlink would lead to websitedomain/google.com*/}
                    <div className="col-auto">
                    <Link to="/" className="text-decoration-none">
                        Home
                    </Link>
                    </div>
                    <div className="col-auto">
                        <Link to ="/Contacts" className="text-decoration-none">
                            Contact/Externals
                        </Link>
                    </div>
                    <div className="col-auto">
                        <Link to ="/Projects" className="text-decoration-none">
                            Projects
                        </Link>
                    </div>
                    <div className="col-auto">
                    <a
                        href="https://www.linkedin.com/in/rduong08"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    </div>
                    <NoRightPaddingCol className="col-auto">
                        <div className="top-right">
                            <ThemeSwitcher/>
                        </div>
                    </NoRightPaddingCol>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

const NoRightPaddingCol = styled.div`
    padding-right: 0;
`;

export default NavigationBar;