import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid id="footer">
      <Row>
        <Col xs={12} md={6} className="text-start text-lg-end">
          <h6>no credit card required</h6>
          <h5>Start using Fit in Touch today.</h5>
          <form>
            <div className="form-group mt-5 send-mail-form-container">
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
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center mt-5 mt-lg-0"
        >
          <img
            src="/logoFitInTouch.png"
            alt="fit in touch logo"
            className="footer-logo"
          />
        </Col>
      </Row>
      <Row className="mt-5 mx-lg-5">
        <Col xs={12} md={6} lg={3}>
          <div className="d-flex flex-row">
            {" "}
            <img
              src="/logoFitInTouch.png"
              alt="fit in touch logo"
              className="tiny-footer-logo"
            />
            <h5 className="app-name my-auto ms-2">Fit in touch</h5>
          </div>
          <div>
            <p className="mt-3 footer-subtitle">
              the best app to manage your patients and stay in touch with them
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-auto">
          <div className="footer-list mt-3 mt-md-4">
            <ul className="m-0 p-0 ps-lg-3">
              <li>
                {" "}
                <Link to="/#1">about</Link>{" "}
              </li>
              <li className="my-2">
                <Link to="/#2">jobs</Link>
              </li>
              <li className="my-2">
                <Link to="/#3">docs</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-auto">
          <div className="footer-list mt-3 mt-md-4">
            <ul className="m-0 p-0 ps-lg-3">
              <li>
                {" "}
                <Link to="/#4">terms and conditions</Link>
              </li>
              <li className="my-2">
                {" "}
                <Link to="/#5">privacy and policy</Link>
              </li>
              <li>
                {" "}
                <Link to="/#6">cookie policy</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3} className="my-auto">
          <div className="footer-list mt-3 mt-md-4">
            <ul className="m-0 p-0 ps-lg-3">
              <li style={{ fontWeight: "bold" }}>
                <Link to="/#7">let's chat!</Link>{" "}
              </li>
              <li className="my-2">
                <Link to="/#8" className="lower">
                  fitintouch@mail.app
                </Link>
              </li>
              <li>
                <Link to="/#9">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="/#10">
                  <i className="bi bi-instagram mx-2"></i>
                </Link>
                <Link to="/#11">
                  <i className="bi bi-twitter me-2"></i>
                </Link>
                <Link to="/#12">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr className="mx-auto my-3" />
      <Row id="end-footer">
        <Col className="d-block text-center">
          <p className="mb-2">
            &#64; {new Date().getFullYear()} all rights reserved
          </p>
          <p> 🌈 designed with ❤️ by Roberta Matera</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
