import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface ContactCardProps {
    title: string;
    imageSrc: string;
    link: string;
    index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, imageSrc, link, index}) => {
    const handleCardClick = () => {
        window.open(link, '_blank');
    };
    const cardRef = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (cardRef.current){
            setTimeout(() => {
                setAnimated(true);
            }, 100* index // add a delay of 100ms  multiplied by the index of curr card
            );
        }
    }, [index]
    );

    return (
        <StyledCard onClick={handleCardClick} ref={cardRef} className={animated ? 'animated' : ''}>
            <CardTitle>{title}</CardTitle>
            <CardImage src={imageSrc} alt={title} />
        </StyledCard>
    );
};

let cardPos = '150%';

function AdjustCardPos(pos: number){
    cardPos = pos.toString()+"%";
    return cardPos;
}


const StyledCard = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0; //initial opacity to 0
    transform: translateY(150%); //initial translation to 150% (out of the screen)

    &:hover img {
        transform: scale(1.1);
      }
    
      &:hover h2 {
        color: #007bff;
      }
    
      &:hover div {
        background-color: #007bff;
      }
    
      &:hover a {
        color: white;
      }

    &.animated  {
        animation: slide-up 0.5s ease forwards, fade-in 0.5s ease forwards;
        // 'forwards' to slide-up animation fixes issue with line 60 running after animation, i.e., cards going out of screen after animation
    }

    &.animated:last-of-type {
        animation-duration: 0.7s;
    }


    @keyframes slide-up {
        from {
            transform: translateY(${AdjustCardPos(150)});
        }
        to {
            transform: translateY(${AdjustCardPos(0)});
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
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

