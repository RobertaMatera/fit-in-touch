import { Link as NavLink } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoName from "../LogoName/LogoNameComponent";
const Home = () => {
  return (
    <section id="home">
      <Container fluid id="navigation">
        <Row>
          <Col xs={12} className="d-flex flex-row align-items-center">
            <LogoName />
            <div className="doctor-name d-flex justify-content-center justify-content-md-end align-baseline mt-3">
              <div className="d-flex flex-column text-center ms-3">
                <NavLink to="/agenda">
                  <i className="bi bi-person-check-fill"></i>
                  <p className="log-in-out">log in</p>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="position-relative px-0">
            <Image
              className="img-bg"
              src="/images/nutritionist.png"
              alt="nutritionist"
            ></Image>
            <div className="my-auto">
              {" "}
              <Image
                src="my-logo.png"
                alt="fit in touch logo"
                className="d-none d-md-flex my-logo-home"
              />
              <h1>Fit in touch</h1>
              <div className="d-flex justify-content-center text-center spot-subtitle my-5">
                <h5>
                  Are you a <span className="highlight-text">dietitian</span> or
                  a <span className="highlight-text">nutritionist</span>? <br />
                  <span className="highlight-text">
                    Revolutionizes the way you work!
                  </span>{" "}
                  <br /> Less stress, better organization, no effort. <br />{" "}
                  <span className="highlight-text">Find out how!</span>
                </h5>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center sub-section-bg">
          <Col
            xs={12}
            className="d-flex flex-row mb-3 justify-content-center"
          ></Col>
          <span className=" d-flex justify-content-center">
            <Col xs={12} lg={6} className="d-flex flex-column text-center my-5">
              <h3 className="mb-4">What is Fit in touch?</h3>
              <h4>
                <span className="highlight-text">Fit in touch</span> is a
                service that{" "}
                <span className="highlight-text">
                  helps dietitians and nutritionists to keep in touch with their
                  patients
                </span>
                .
              </h4>
            </Col>
          </span>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-center text-center mt-5 mb-4"
          >
            <h3>What you can do with Fit in touch?</h3>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column justify-content-center text-center mt-3 mt-lg-0"
          >
            <span className="sub-section-bg-single">
              <h4 className="mt-5">Book an appointment</h4>
            </span>
          </Col>
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column justify-content-center text-center mt-3 mt-lg-0"
          >
            <span className="sub-section-bg-single">
              <h4 className="mt-5">Keep track of all your patients</h4>
            </span>
          </Col>
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column justify-content-center text-center mt-3 mt-lg-0"
          >
            <span className="sub-section-bg-single">
              <h4 className="mt-4 mt-lg-3">
                Keep track of every single patient's progress and info
              </h4>
            </span>
          </Col>
          <Col
            xs={12}
            lg={3}
            className="d-flex flex-column justify-content-center text-center mt-3 mt-lg-0"
          >
            <span className="sub-section-bg-single">
              <h4 className="mt-5">Chat, Call and send email</h4>
            </span>
          </Col>
        </Row>
        <div className="white-space"></div>
        <Row className="justify-content-center sub-section-bg">
          <Col
            xs={12}
            lg={8}
            className="d-flex flex-column justify-content-center text-center my-5"
          >
            <h3 className="mb-4">Why choose Fit in touch?</h3>
            <h4>
              <span className="highlight-text">Fit in touch</span> is an agenda,
              a telephone and an archive all in one that you can bring{" "}
              <span className="highlight-text">
                with you everywhere, anytime!
              </span>{" "}
              <br /> <br />{" "}
              <span className="highlight-text">
                It helps you to organize your work by keeping documents and
                patient's info always with you.
              </span>
            </h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* <Image src="/images/sfondo2.png" alt="nutritionist"></Image> */}
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex flex-column justify-content-center text-center my-5 img-bg-2"
          >
            <h3>Do you want to know more? Contact us!</h3>
            <form>
              <div className="d-flex flex-row form-group mt-5 send-mail-form-container">
                <input
                  type="email"
                  className="my-form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <i className="bi bi-send-fill send-mail-icon"></i>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Home;
