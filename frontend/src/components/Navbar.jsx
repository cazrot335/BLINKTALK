// import React, { useEffect } from "react";
import React from "react";
import logo from "../assests/logo.png";
import { animateScroll as scroll } from "react-scroll";
// import Authentication from "./Authentication.jsx";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from'../GlobalStyles'; // Import your global styles

const Header = styled.div`
 display: flex;
 background-color: rgb(6, 19, 50);
 height: min-content;
 justify-content: space-between;
 color: white;
 align-items: center;
 padding: 20px;
`;

const HeaderLeft = styled.div`
 display: flex;
`;

const HeaderRight = styled.div`
 display: flex;
`;

const NavList = styled.ul`
 display: flex;
`;

const NavItem = styled.li`
 list-style: none;
 padding: 20px;
 cursor: pointer;
 color: white;
 &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 3px;
 }
`;

const NavLinkStyled = styled(NavLink)`
 text-decoration: none;
`;

const Logo = styled.img`
 height: 60px;
 margin-left: 30px;
`;

const Title = styled.h1`
 margin-left: 10px;
 color: #0889fc;
 text-shadow: 0px 0px 15px #0889fc;
`;

function Navbar() {
 function about() {
    scroll.scrollTo(710);
 }

 return (
    <>
      {/* <GlobalStyles /> Apply global styles */}
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="Logo" />
          <Title>BlinkTalk</Title>
        </HeaderLeft>
        <HeaderRight>
          <NavList>
            <NavItem onClick={about}>About us</NavItem>
            <NavLinkStyled className="navlink" to="/authentication">
              <NavItem>Login</NavItem>
            </NavLinkStyled>
          </NavList>
        </HeaderRight>
      </Header>
    </>
 );
}

export default Navbar;

