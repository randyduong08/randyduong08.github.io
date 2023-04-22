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
        <ParentContainer>
            <StyledContactsContainer>
                {contacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        index={index}
                        title={contact.title}
                        imageSrc={contact.imageSrc}
                        link={contact.link} 
                    />
                ))}
            </StyledContactsContainer>
        </ParentContainer>
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

// Parent Container used to center the first row of contact cards to the middle of the screen
// If more than 4 contact cards, can probably remove this styling (also means to remove the <ParentContainer> div on line 38 and 49)
const ParentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export default ContactsContainer;