import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Linkheader = () => {
    
  return (
    <Container>

        <Logo src='/images/logon.png' alt='logo' />

      <Menu>
        <nav>
          <ul>
            <li> <Link to="/" >Home</Link></li>

          </ul>
        </nav>
      </Menu>
    </Container>
  );
};

export default Linkheader;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.1);
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
