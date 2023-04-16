//Combine all Contact page components in this one
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scripts,styles/index.css';
import ContactsContainer from "./ContactsContainer";

function ContactApp(){
    return(
        <div>
            <ContactsContainer/>
        </div>
    );
}

export default ContactApp;