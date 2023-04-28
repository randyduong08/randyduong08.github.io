//Combine all index components in this one
import MainSection from "./MainSection";
import Footer from "./Footer";
import React from "react";
import TechnicalSkills from "./TechnicalSkills";

function IndexApp(){
    return(
        <div>
            <MainSection />
            <TechnicalSkills />
            <Footer />
        </div>
    );
}

export default IndexApp;