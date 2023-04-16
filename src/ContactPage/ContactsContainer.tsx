import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';
import linkedinimg from '../Images/linkedInIcon.png';
import resumeimg from '../Images/resumeIcon.png';
import emailimg from '../Images/emailIcon.png';
import resumePDF from '../externalfiles/Resume.pdf';
import githubimg from '../Images/gitHubIcon.png';

interface ContactsContainerProps {}

const ContactsContainer: React.FC<ContactsContainerProps> = () => {
    const contacts = [
        {
            title: "Email",
            imageSrc: emailimg,
            link: "mailto:randyduong08@gmail.com"
        },
        {
            title: "LinkedIn",
            imageSrc: linkedinimg,
            link: "https://www.linkedin.com"
        },
        {
            title: "Resume",
            imageSrc: resumeimg,
            link: resumePDF
        },
        {
            title: "GitHub",
            imageSrc: githubimg,
            link: "https://github.com/randyduong08"
        }
    ]


    return(
        <StyledContactsContainer>
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    title={contact.title}
                    imageSrc={contact.imageSrc}
                    link={contact.link} 
                />
            ))}
        </StyledContactsContainer>
    );
};

const StyledContactsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @mediate (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export default ContactsContainer;