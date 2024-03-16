import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import top from "../assests/top-landing.jpg";
import bottom from "../assests/bottom-landing.jpg";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import { animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/authentication");
  };
  function scrollTop(){
    scroll.scrollToTop();
  }
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="hero">
          <div className="content">
            <h1 className="anim">Welcome to ChatApp</h1>
            <h5 className="anim">Connect, Communicate, and Collaborate...</h5>
            <button onClick={handleGetStarted} className="anim-btn">
              Get Started
            </button>
          </div>
          <div className="hero-img">
            <img className="anim" src={top} alt="Top Landing Image" />
          </div>
        </div>

        <div className="about">
          <h1>About ChatApp</h1>
          <p>
            BlinkTalk is designed to bring people together through instant
            messaging. Our platform is easy to use and offers a secure
            environment for all your conversations.
          </p>
          <p>
            At BlinkTalk, we believe in the power of communication to connect
            people, ideas, and communities. Our mission is simple: to provide a
            seamless, secure, and enjoyable platform for you to converse with
            friends, family, and colleagues across the globe. Whether you're
            sharing stories, planning adventures, or simply catching up,
            BlinkTalk is designed to enhance your messaging experience. With a
            user-friendly interface and a range of features tailored to your
            needs, staying connected has never been easier. We prioritize your
            privacy and security, employing the latest encryption technologies
            to safeguard your conversations. Your trust is paramount to us, and
            we're committed to ensuring that your data remains protected at all
            times. Join us on this journey of connection, collaboration, and
            creativity. Together, let's build meaningful relationships and make
            every conversation count. Thank you for choosing BlinkTalk as your
            preferred platform for communication.
            <h3>Happy chatting!</h3>
            <h5>~The BlinkTalk Team</h5>
          </p>
        </div>

        <div className="footer">
          <div className="footer-content">
            <div className="text">
              <h1 onClick={scrollTop}>BlinkTalk</h1>
            </div>
            <div className="icon">
              <a 
              href="https://github.com/cazrot335/BLINKTALK"
              target="_blank"
              >
                <i class="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
