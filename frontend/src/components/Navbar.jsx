import React, { useState } from "react";
import logo from "../assests/logo.png"; // Corrected the typo from "assests" to "assets"
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';

// Define the styled components
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

const Logo = styled.img`
 height: 60px;
 margin-left: 30px;
`;

const Title = styled.h1`
 margin-left: 10px;
 color: #0889fc;
 text-shadow: 0px 0px 15px #0889fc;
`;

const HeaderRight = styled.div`
 display: flex;
`;

const NavList = styled.ul`
 display: flex;
 @media (max-width: 768px) {
    display: none;
 }
`;

// Define NavItem and NavLinkStyled components
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

// Show DropdownButton on mobile screens
const DropdownButton = styled.button`
 display: none;
 @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
 }
`;

// DropdownContent should be shown only when dropdownOpen is true
const DropdownContent = styled.div`
 display: none;
 position: absolute;
 background-color: #f9f9f9;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
 z-index: 1;
 @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
 }
`;

// DropdownItem styling remains the same
const DropdownItem = styled.li`
 padding: 12px 16px;
 &:hover {
    background-color: #ddd;
 }
`;

function Navbar() {
 const [dropdownOpen, setDropdownOpen] = useState(false);

 function about() {
    scroll.scrollTo(710);
 }

 return (
    <>
      <GlobalStyles />
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
          <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>
            Menu
          </DropdownButton>
          <DropdownContent isOpen={dropdownOpen}>
            <DropdownItem onClick={about}>About us</DropdownItem>
            <NavLinkStyled to="/authentication">
              <DropdownItem>Login</DropdownItem>
            </NavLinkStyled>
          </DropdownContent>
        </HeaderRight>
      </Header>
    </>
 );
}

export default Navbar;