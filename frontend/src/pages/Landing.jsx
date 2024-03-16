import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import top from '../assests/top-landing.jpg';
import bottom from '../assests/bottom-landing.jpg';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/authentication');
  };
 return (
  <>
  <Navbar />
    <div className='home'>
      <div className='hero'>
        <div className='content'>
          <h1 className='anim'>Welcome to ChatApp</h1>
          <h5 className='anim'>Connect, Communicate, and Collaborate...</h5>
          <button onClick={handleGetStarted} className='anim-btn'>Get Started</button>
        </div>
        <div className="hero-img">
          <img className='anim' src={top} alt="Top Landing Image" />
        </div>
      </div>

      <div className='about'>
        <h1>About ChatApp</h1>
        <p>ChatApp is designed to bring people together through instant messaging. Our platform is easy to use and offers a secure environment for all your conversations.</p>
      </div>
    </div>
  </>
 );
};

export default LandingPage;


