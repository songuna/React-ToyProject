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
            <div className="container">
                <h1>
                    <button data-animation-scroll="true" data-target="#main">SYN</button>
                </h1>
                <Nav>
                    <ul>
                        <li><button data-animation-scroll="true" data-target="#about">About</button></li>
                        <li><button data-animation-scroll="true" data-target="#features">Features</button></li>
                        <li><button data-animation-scroll="true" data-target="#portfolio">Portfolio</button></li>
                        <li><button data-animation-scroll="true" data-target="#contact">Contact</button></li>
                    </ul>
                </Nav>
            </div>
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
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default Header;