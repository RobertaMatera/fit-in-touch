import { Link as NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LogoName from "../LogoName/LogoNameComponent";
const Home = () => {
  return (
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
      <Row className="justify-content-center">
        <Col
          xs={12}
          className="d-flex flex-row mt-5 mb-3 justify-content-center"
        >
          <h1>fit in touch</h1>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column justify-content-center text-center my-5"
        >
          <h2>what is Fit in touch?</h2>
          <h3>
            Fit in touch is a service that helps dietitians and nutritionists to
            keep in touch with their patients.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
