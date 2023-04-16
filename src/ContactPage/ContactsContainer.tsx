import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';
import linkedinimg from '../Images/linkedInIcon.png';
import resumeimg from '../Images/resumeIcon.png';
import emailimg from '../Images/emailIcon.png';

interface ContactsContainerProps {}

const ContactsContainer: React.FC<ContactsContainerProps> = () => {
    const contacts = [
        {
            title: "Email",
            imageSrc: "../Images/emailIcon.png",
            link: "mailto:randyduong08@gmail.com"
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

    @media (max-widdth: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @mediate (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export default ContactsContainer;