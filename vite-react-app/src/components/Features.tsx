import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaGithubSquare  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

const Features = () => (
  <FeaturesSection id="features">
    <div className="container">
      <div className="title">
        <h4>Features</h4>
        <h2>What I Do</h2>
      </div>
      <div className="do-me">
        <div className="do-inner">
          <div className="icon"><FaHtml5 /></div>
          <div className="content">
            <h3>html5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><FaCss3Alt /></div>
          <div className="content">
            <h3>CSS3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><IoLogoJavascript /></div>
          <div className="content">
            <h3>JavaScript</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><FaReact /></div>
          <div className="content">
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><SiTypescript /></div>
          <div className="content">
            <h3>Typescript</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><FaGithubSquare /></div>
          <div className="content">
            <h3>Github</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  </FeaturesSection>
);

const FeaturesSection = styled.section`
  .title {
    margin-bottom: 3rem;

    h4 {
      font-size: 1.35rem;
      color: #ed4848;
    }

    h2 {
      font-size: 3.5rem;
    }
  }

  .do-me {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .do-inner {
      width: 30%;
      margin-bottom: 2rem;

      .icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .content {
        h3 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('images/bg.jpg') center center/cover no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;

export default Features;