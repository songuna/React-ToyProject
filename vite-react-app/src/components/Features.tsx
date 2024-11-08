import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaGithubSquare  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

const Features = () => (
  <FeaturesSection id="features">
    <div className="container">
      <Title>
        <H4>Features</H4>
        <H2>What I Do</H2>
      </Title>
      <Do>
        <Inner>
          <Icon><FaHtml5 /></Icon>
          <div className="content">
            <H3>html5</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
        <Inner>
          <Icon><FaCss3Alt /></Icon>
          <div className="content">
            <H3>CSS3</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
        <Inner>
          <Icon><IoLogoJavascript /></Icon>
          <div className="content">
            <H3>JavaScript</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
        <Inner>
          <Icon><FaReact /></Icon>
          <div className="content">
            <H3>React</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
        <Inner>
          <Icon><SiTypescript /></Icon>
          <div className="content">
            <H3>Typescript</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
        <Inner>
          <Icon><I><FaGithubSquare /></I></Icon>
          <div className="content">
            <H3>Github</H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
          </div>
        </Inner>
      </Do>
      <Bg/>
    </div>
  </FeaturesSection>
);


const H4 = styled.h4`
  font-size: 1.35rem;
  color: #ed4848;
`;

const H2 = styled.h2`
  font-size: 3.5rem;
`;

const H3 = styled.h3`
`;

const Do = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-bottom: 3rem;
`;

const Inner = styled.div`
  width: 30%;
  height: 220px;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover{
    background-color: lightcoral;
    color: white;
  }
`;

const I = styled.i`
  
`

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;


const P = styled.p`
  font-size: 1rem;
`


const Bg = styled.div`
  position: absolute;
    width: 100%;
    height: 200px;
    background: url('images/background.jpg') center center/cover no-repeat;
    background-size: cover;
    background-attachment: fixed; //스크롤시 이미지 스크롤 구현
    opacity: 0.5;
    z-index: -1;
`;

const FeaturesSection = styled.section`
  width: 100%;
  height: 900px;
`;

export default Features;