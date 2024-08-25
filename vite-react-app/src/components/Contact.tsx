import styled from 'styled-components';


const Contact = () => (
  <ContactSection id="contact">
    <div className="container">
      <div className="title">
        <h4>CONTACT</h4>
        <h2>Contact With Me</h2>
      </div>
      <div className="contact-me">
        <div className="left">
          <div className="card">
            <div className="icon"><i className="fa-solid fa-phone-volume"></i></div>
            <div className="info-text">
              <h3>phone</h3>
              <p>010-9088-9774</p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-envelope-open-text"></i></div>
            <div className="info-text">
              <h3>email</h3>
              <p>twins7531@naver.com</p>
            </div>
          </div>
          <div className="card">
            <div className="icon"><i className="fa-solid fa-location-crosshairs"></i></div>
            <div className="info-text">
              <h3>address</h3>
              <p>대전광역시 대덕구 대전로 1118번길 15 6동 102호</p>
            </div>
          </div>
        </div>
        <div className="right">
          <form action="#">
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="text" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="msg">message</label>
              <textarea id="msg"></textarea>
            </div>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  </ContactSection>
);

const ContactSection = styled.section`
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

  .contact-me {
    display: flex;
    justify-content: space-between;

    .left {
      width: 50%;

      .card {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;

        .icon {
          font-size: 2rem;
          margin-right: 1rem;
        }

        .info-text {
          h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }

    .right {
      width: 50%;

      form {
        .form-group {
          margin-bottom: 1rem;

          label {
            display: block;
            margin-bottom: 0.5rem;
          }

          input, textarea {
            width: 100%;
            padding: 0.75rem;
            border-radius: 5px;
            border: 1px solid #ddd;
          }

          textarea {
            resize: vertical;
            height: 100px;
          }
        }

        button {
          background-color: #ed4848;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Contact;