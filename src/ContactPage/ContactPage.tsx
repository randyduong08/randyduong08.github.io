import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';

interface ContactsContainerProps {}

const ContactsContainer: React.FC<ContactsContainerProps> = () => {
    return(
        <StyledContactsContainer>
            Test
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