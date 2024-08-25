import styled from 'styled-components';


const Portfolio = () => (
  <PortfolioSection id="portfolio">
    <div className="container">
      <div className="title">
        <h4>PORTFOLIOBACK</h4>
        <h2>portfolio</h2>
      </div>
      <div className="portfolio-me">
        <div className="portfolio-inner">
          <img src="images/mock1.png" alt="샘플이미지" />
          <strong>BRANDING</strong>
          <h3>Package Design</h3>
        </div>
        <div className="portfolio-inner">
          <img src="images/mock2.png" alt="샘플이미지" />
          <strong>DEVELOPMENT</strong>
          <h3>Table App Dev</h3>
        </div>
        <div className="portfolio-inner">
          <img src="images/mock3.png" alt="샘플이미지" />
          <strong>MARKETING</strong>
          <h3>Coka Cola</h3>
        </div>
        <div className="portfolio-inner">
          <img src="images/mock4.png" alt="샘플이미지" />
          <strong>APP</strong>
          <h3>FaceBook Clone</h3>
        </div>
        <div className="portfolio-inner">
          <img src="images/mock5.png" alt="샘플이미지" />
          <strong>APP</strong>
          <h3>Netflix Clone</h3>
        </div>
        <div className="portfolio-inner">
          <img src="images/mock6.png" alt="샘플이미지" />
          <strong>WEB</strong>
          <h3>FirmBee Web</h3>
        </div>
      </div>
    </div>
  </PortfolioSection>
);

const PortfolioSection = styled.section`
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

  .portfolio-me {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .portfolio-inner {
      width: 30%;
      margin-bottom: 2rem;

      img {
        width: 100%;
        height: auto;
      }

      strong {
        display: block;
        font-size: 1.25rem;
        margin: 1rem 0;
      }

      h3 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Portfolio;