import React from 'react';
import styled from 'styled-components';

interface ContactCardProps {
    title: string;
    imageSrc: string;
    link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, imageSrc, link}) => {
    const handleCardClick = () => {
        window.open(link, '_blank');
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <StyledCard>
                <CardTitle>{title}</CardTitle>
                <CardImage src={imageSrc} alt={title} />
            </StyledCard>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const CardTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export default ContactCard;

