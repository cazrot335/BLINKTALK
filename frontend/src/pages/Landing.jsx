import React from "react";
import Navbar from "./Navbar";
import styled, { keyframes } from "styled-components";
import top from "../assests/top-landing.jpg";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Home = styled.div`
  height: min-content;
  background-color: rgb(6, 19, 50);
  font-family: 'Poppins';
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1003px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  margin-top: 100px;

  h1{
    color: #ad6661;
    font-size: 50px;
  }
  h5{
    color: white;
    font-size: 22px;
  }


  button {
    padding: 15px;
    border-radius: 7px;
    border: 1px solid transparent;
    font-weight: 600;
    margin-top: 90px;
    cursor: pointer;
    width: 200px;
    opacity: 0;

    &:hover {
      background-color: #0889fc;
      color: white;
      transition-duration: 0.6s;
      box-shadow: 0px 0px 15px #0889fc;
    }
  }

  @media only screen and (max-width: 721px){
    h1{
      font-size: 30px;
    }
    h5{
      font-size: 15px;
    }
  }
`;

const HeroImg = styled.div`
  img {
    height: 400px;
    object-fit: contain;
  }

  @media only screen and (max-width: 721px){
    img{
      height: 200px;
    }
  }
`;

const About = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
  background-color: #a2cbef;
  height: min-content;
  padding-bottom: 50px;
  
  h1 {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 40px;
    color: #6d3b37;
    align-self: center;
  }
  
  p {
    text-align: center;
    margin-top: 20px;
    margin-left: 30px;
    font-size: 23px;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  h3, h5 {
    font-size: 25px;
    align-self: center;
  }
`;

const Text = styled.div`
  h1 {
    margin-top: 30px;
    margin-left: 60px;
    font-size: 35px;
    font-weight: 600;
    color: #0889fc;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 721px){
    h1{
      font-size: 25px;
      margin-left: 30px;
    }
  }
  `;
  
  const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  height: min-content;
  padding-top: 40px;
  padding-bottom: 30px;
  font-family: 'Poppins';
  align-items: center;
  `;
  
  const FooterContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  font-family: 'Poppins';
  
  `;
  
  const Icon = styled.div`
  display: flex;
  `;
  
  const GithubIcon = styled.i`
  margin-top: 30px;
  color: white;
  font-size: 50px;
  cursor: pointer;
  margin-left: 25px;
  
  @media only screen and (max-width: 721px){
    margin-left: 10px;
    font-size: 25px;
  }
`;

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
      <Home>
        <Hero>
          <Content>
            <h1>Welcome to ChatApp</h1>
            <h5>Connect, Communicate, and Collaborate...</h5>
            <button onClick={handleGetStarted}>Get Started</button>
          </Content>
          <HeroImg>
            <img src={top} alt="Top Landing Image" />
          </HeroImg>
        </Hero>

        <About>
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
          </p>
          <h3>Happy chatting!</h3>
          <h5>~The BlinkTalk Team</h5>
        </About>

        <Footer>
          <FooterContent>
            <Text>
              <h1 onClick={scrollTop}>BlinkTalk</h1>
            </Text>
            <Icon>
              <a 
              href="https://github.com/cazrot335/BLINKTALK"
              target="_blank"
              >
                <GithubIcon className="fa-brands fa-github"></GithubIcon>
              </a>
            </Icon>
          </FooterContent>
        </Footer>
      </Home>
    </>
  );
};

export default LandingPage;