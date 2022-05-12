import { Container, Row, Col } from "react-bootstrap";
import { Link as NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const location = useLocation();
  const path = location.pathname;

  return (
    <Container fluid id="navigation">
      <Row>
        <Col xs={12} className="d-flex flex-row align-items-center">
          <img
            src="logoFitInTouch.png"
            alt="fit in touch logo"
            className="my-logo me-auto"
          />
          <div className="doctor-name d-flex justify-content-center justify-content-md-end align-baseline mt-3">
            <p>Doctor Name</p>
            {isLoggedIn === "true" ? (
              <div className="d-flex flex-column text-center ms-3">
                <i className="bi bi-person-check-fill"></i>
                <p className="log-in-out">log in</p>
              </div>
            ) : (
              <div className="d-flex flex-column text-center ms-3">
                <i className="bi bi-person-dash-fill"></i>
                <p className="log-in-out">log out</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="d-flex flex-row justify-content-center nav-container">
            <ul className="nav">
              <li className="my-nav-link">
                <NavLink
                  to="/patients"
                  className={path === "/patients" ? "active" : ""}
                >
                  My Patients
                </NavLink>
              </li>
              <li className="my-nav-link">
                <NavLink to="/" className={path === "/" ? "active" : ""}>
                  My Agenda
                </NavLink>
              </li>
              <li className="my-nav-link">
                <NavLink
                  to="/add-patient"
                  className={path === "/add-patient" ? "active" : ""}
                >
                  Add patient
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
