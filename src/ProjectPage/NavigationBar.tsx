import { Link } from "react-router-dom";
import React from "react";
import ThemeSwitcher from "src/ThemeSwitcher";
// Navigationbar component
// Typically the onnly component that makes up the 'header' of a page
function NavigationBar() {
    return (
            <>
    {/*Nav means a section of page containning navigation links, 
    either to other pages, or other sections*/}
    <div className="Topbar-nav-links">
        <div className="container-fluid">
        <div className="row">
            <div className="col">
            <Link to="/" className="text-decoration-none">
                Home
            </Link>
            </div>
            <div className="col">
            <a href="" className="text-decoration-none">
                Education
            </a>
            </div>
            <div className="col">
                <Link to ="/Projects" className="text-decoration-none">
                    Projects
                </Link>
            </div>
            <div className="col">
            <a
                href="https://www.linkedin.com/in/rduong08"
                className="text-decoration-none"
                target="_blank"
            >
                LinkedIn
            </a>
            </div>
            <div className="col">
            <div className="top-right">
                <ThemeSwitcher/>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    );
}

export default NavigationBar;