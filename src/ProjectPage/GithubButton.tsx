//Button that will lead you to a link when clicked
//For the github redirects in the project page
import React from "react";

interface Props {
    link: string;
    text: string;
}

const GithubButton: React.FC<Props> = ({link, text}) => {
    return(
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">
            {text}
        </a>
    );
};

export default GithubButton;