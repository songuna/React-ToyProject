import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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
            <Container className="container">
                <h1>
                    <button data-animation-scroll="true" data-target="#main">SYN</button>
                </h1>
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
  color: white;
  top: 0;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Li = styled.li`
    list-style: none;
`;


const Ul = styled.ul`
    display: flex;
    list-style: none;
`

const Nav = styled.nav`
  button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default Header;