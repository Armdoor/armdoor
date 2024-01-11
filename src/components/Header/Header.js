import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {
    
  return (
    <Container>

        <Logo src='/images/logon.png' alt='logo' />

      <Menu>
        <nav>
          <ul>
            <li> <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="link" spy={true} smooth={true} offset={-70} duration={500}>Links</ScrollLink></li>
            <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</ScrollLink></li>
          </ul>
        </nav>
      </Menu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(0.5px);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  nav {
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  object-fit: cover;
  height: 40px;
  width: 120px;
`;
