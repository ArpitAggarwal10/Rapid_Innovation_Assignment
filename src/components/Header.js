import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

// Import your small image here
import smallImage from '../assets/logo.svg';

const HeaderContainer = styled.header`
  background: #888888;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

// Styled component for the image
const LogoImage = styled.img`
  width: 180px; /* Adjust size as needed */
  margin-right: 25px; /* Space between image and title */
  margin-left: 10px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center; /* Center vertically with image */
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 15px;

    li a {
      color: white;
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #ffffff;
        color: #333333;
      }
    }
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      {/* Display the image before the title */}
      <Logo>
        <LogoImage src={smallImage} alt="Small Image" />
        {title}
      </Logo>
      <Nav>
        <ul>
          <li><Link to="/">Landing Page</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/tasks">Task Page</Link></li>
        </ul>
      </Nav>
      <ThemeToggle />
    </HeaderContainer>
  );
};

export default Header;