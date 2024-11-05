
import styled from 'styled-components';


const About = () => (
  <AboutSection id="about">
    <div className="container">
      <Title className="title">
        <H4>Who Am I</H4>
        <H2>About Me</H2>
      </Title>
      <AboutSelf className="about-self">
        <div className="left">
          <img src="images/img.jpg" alt="" />
        </div>
        <div className="right">
          <H3>안녕하세요 <strong>송유나 입니다.</strong></H3>
          <Text>이 홈페이지는 아직 완성되지 않은 홈페이지 입니다.</Text>
          <Text>Q. 개발자 취업을 결심하게 된 계기</Text>
          <Text>
            A. 이제까지 제가 선택했던 직업은 그 자리를 지키고 묵묵히 하면 높은 직급까지 갈 수 있었던 직업이었습니다. 특별한 노력을 할 필요는 없었지만, 그런 점이 오히려 저를 나태하게 만들었습니다. 그러면서 점점 삶의 의욕을 잃어갔습니다. 처음은 주변에 개발자분들이 많아져 관심이 생겼고 지인 추천으로 책을 구매해 독학으로 공부하였습니다. 그 책을 따라 공부하면서 내 손으로 직접 입력한 코드가 '내가 만든 기능'이 된다는 사실에 신기하고 뿌듯한 마음이 들었습니다. 그러다 내가 아무렇지 않게 사용한 기능들이 누군가 직접 만든 기능들 이였다고 생각하니 "개발자"라는 직업이 멋있었습니다. 또한 개발자는 끊임없이 공부해야 더 유능해진다는 것과 내 스스로의 성장이 기대되는 직업이라고 생각하고 단순히 돈을 좇는 이유가 아닌 재미와 흥미가 느껴져 개발자 취업을 결심하게 된 이유입니다.
          </Text>
          <Text>또한, 인터넷 검색에 있어서 검색이 잘 되도록 하는게 기업의 이윤과 직결되고, 서비스의 얼굴을 만드는 프론트엔드 개발자의 마인드와 직결된다는 마음이 곧 개발자의 마음이라고 생각합니다.</Text>
          <div className="social">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://instagram.com/v2ly_you"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitch"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </AboutSelf>
    </div>
  </AboutSection>
);



const H4 = styled.h4`
    font-size: 1.35rem;
    color: #ed4848;
`;

const H2 = styled.h2`
    font-size: 3.5rem;
`;

const H3 = styled.h3`
    font-size: 2.25rem;
    margin-bottom: 1rem;
`;

const Title = styled.div`
  margin-bottom: 3rem;
`;

const Text = styled.p`
  font-size: 1.15rem;
`

const AboutSelf = styled.div`
  display: flex;
  justify-content: space-between;

  &.left {
      width: 50%;
    }

  &.right {
      width: 50%;
      padding: 0 2rem;
    }
`




const AboutSection = styled.section`


        strong {
          color: #ed4848;
        }
      }

      p {
        font-size: 1.15rem;
        margin: 1rem 0;
      }

      .social {
        a {
          font-size: 2.5rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
`;

export default About;