import styled from 'styled-components';


const Main = () => (
  <MainContainer id="main">
    <div className="container">
      <h4>Welcome!</h4>
      <h2>I'M A <span></span></h2>
      <p>안녕하세요.</p>
      <p>프론트엔드 개발자 송유나 입니다.</p>
      <p>오늘보다 내일 더 성장하는 개발자가 되겠습니다.</p>
      <button className="download">DOWNLOAD CV</button>
      <button className="mouse"><i className="fa-solid fa-computer-mouse"></i></button>
    </div>
  </MainContainer>
);

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/abc.jpg') center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  h4 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 3.5rem;
    margin: 2rem 0;
    letter-spacing: 3px;
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.25rem;
  }
  
  button.download {
    background-color: transparent;
    border: 3px solid white;
    border-radius: 20px;
    padding: 1rem 2rem;
    margin-top: 3rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  button.mouse {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    cursor: pointer;
    transform: translateX(-50%);
    animation: upDown 1s ease-in-out infinite;
  }

  h2 span::after {
    content: "";
    height: 40px;
    width: 3px;
    background-color: #fff;
    display: inline-block;
    animation: blink .7s ease-in-out infinite;
  }

  @keyframes upDown {
    0% { bottom: 1rem; }
    50% { bottom: 1.5rem; }
    100% { bottom: 1rem; }
  }

  @keyframes blink {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

export default Main;