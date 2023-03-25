//Header component
//Typically should just have the navigation bar
import NavigationBar from "./NavigationBar";
import React from "react";

function Header(){
    return(
        <header className="header-footer">
            <NavigationBar />
        </header>
    );
}

export default Header;