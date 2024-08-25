import styled from 'styled-components';


const Features = () => (
  <FeaturesSection id="features">
    <div className="container">
      <div className="title">
        <h4>Features</h4>
        <h2>What I Do</h2>
      </div>
      <div className="do-me">
        <div className="do-inner">
          <div className="icon"><i className="fa-brands fa-html5"></i></div>
          <div className="content">
            <h3>html5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><i className="fa-brands fa-css3-alt"></i></div>
          <div className="content">
            <h3>CSS3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="do-inner">
          <div className="icon"><i className="fa-brands fa-bootstrap"></i></div>
          <div className="content">
            <h3>Bootstrap v5.0</h3>
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