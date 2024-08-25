import styled from 'styled-components';



const Header = () => (
  <HeaderContainer>
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

export default Header;

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
    justify-content: space-between;
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