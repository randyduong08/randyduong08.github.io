//Combine all index components in this one
import MainSection from "./MainSection";
import Footer from "./Footer";
import React from "react";
import Skills from "./Skills";

function IndexApp(){
    return(
        <div>
            <MainSection />
            <Skills />
            <Footer />
        </div>
    );
}

export default IndexApp;