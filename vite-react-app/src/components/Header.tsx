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
        <HeaderContainer isActive={isActive}>
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

const HeaderContainer = styled.header<{ isActive: boolean }>`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    color: white;
    background-color: ${({ isActive }) => (isActive ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
    transition: background-color 0.3s ease;
    padding: 0.5rem 1rem;
`;

const Container = styled.div`
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
`;

const Li = styled.li`
    margin: 0 10px;
    button {
        background: transparent;
        border: none;
        color: white;
        font-size: 0.9rem;
        cursor: pointer;
    }
`;

const Nav = styled.nav``;

export default Header;
