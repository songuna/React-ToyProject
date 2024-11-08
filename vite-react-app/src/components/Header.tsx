// Header.tsx
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    setIsActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer className={isActive ? 'active' : ''}>
      <Container>
        <Logo>
          <button data-animation-scroll="true" data-target="#main">SYN</button>
        </Logo>
        <Nav>
          <Ul>
            <Li><button data-animation-scroll="true" data-target="#about">About</button></Li>
            <Li><button data-animation-scroll="true" data-target="#features">Features</button></Li>
            <Li><button data-animation-scroll="true" data-target="#portfolio">Portfolio</button></Li>
            <Li><button data-animation-scroll="true" data-target="#contact">Contact</button></Li>
          </Ul>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 55px;
  top: 0;
  left: 0;
  z-index: 10;
  color: white;
  background-color: transparent;
  transition: background-color 0.3s ease;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.active {
    background-color: rgba(243, 158, 158, 0.8);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 10px;
  button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

const Nav = styled.nav``;

export default Header;
