import React from 'react';
import styled from 'styled-components';
import top from '../assests/top-landing.jpg';
import bottom from '../assests/bottom-landing.jpg';
import { useNavigate } from 'react-router-dom';

// Styled Components
const HeroWrapper = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 2rem;
 background-color: #fff;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 @media (max-width: 768px) {
    flex-direction: column;
 }
`;

const HeroContent = styled.div`
 flex: 1;
`;

const HeroTitle = styled.h1`
 font-size: 2rem;
 margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
 font-size: 1.2rem;
 margin-bottom: 2rem;
`;

const HeroButton = styled.button`
 padding: 0.5rem 1rem;
 background-color: #007bff;
 color: #fff;
 border: none;
 border-radius: 5px;
 cursor: pointer;
`;

const HeroImage = styled.img`
 width: 50%;
 @media (max-width: 768px) {
    width: 100%;
 }
`;

const AboutWrapper = styled.section`
 padding: 2rem;
 text-align: center;
 background-image: url(${bottom});
 background-size: cover;
 background-position: center;
 color: #fff; // Ensure text is visible against the background image
`;

const AboutTitle = styled.h2`
 font-size: 1.5rem;
 margin-bottom: 1rem;
 color: #fff; // Ensure text is visible against the background image
`;

const AboutText = styled.p`
 font-size: 1rem;
 margin-bottom: 2rem;
 color: #fff; // Ensure text is visible against the background image
`;

// React Component
const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/authentication');
  };
 return (
    <>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>Welcome to ChatApp</HeroTitle>
          <HeroSubtitle>Connect, Communicate, and Collaborate</HeroSubtitle>
          <HeroButton onClick={handleGetStarted}>Get Started</HeroButton>
        </HeroContent>
        <HeroImage src={top} alt="Top Landing Image" />
      </HeroWrapper>

      <AboutWrapper>
        <AboutTitle>About ChatApp</AboutTitle>
        <AboutText>ChatApp is designed to bring people together through instant messaging. Our platform is easy to use and offers a secure environment for all your conversations.</AboutText>
      </AboutWrapper>
    </>
 );
};

export default LandingPage;


