import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());

  const handleScroll = () => {
    setIsActive(window.scrollY > 0);
    setIsVisible(true); // 스크롤 시 헤더가 보이도록 설정
  };

  const handleMouseMove = () => {
    setIsVisible(true); // 마우스가 움직일 때 헤더를 다시 보이게 설정
    setLastMoveTime(Date.now());
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const checkInactivity = setInterval(() => {
      if (Date.now() - lastMoveTime > 3000) {
        setIsVisible(false); // 마우스가 3초간 움직이지 않으면 헤더 숨김
      }
    }, 1000); // 1초마다 확인

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(checkInactivity);
    };
  }, [lastMoveTime]);

  return (
    <HeaderContainer className={isActive ? 'active' : ''} isVisible={isVisible}>
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

const HeaderContainer = styled.header<{ isVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 55px;
  top: 0;
  left: 0;
  z-index: 10;
  color: white;
  background-color: transparent;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: ${(props) => (props.isVisible ? 'translateY(0)' : 'translateY(-100%)')}; /* 헤더가 사라지거나 나타나는 애니메이션 */

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
