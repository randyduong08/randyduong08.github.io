//Combine all index components in this one
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import React from "react";

function IndexApp(){
    return(
        <div>
            <Header />
                <MainSection />
            <Footer />
        </div>
    );
}

export default IndexApp;