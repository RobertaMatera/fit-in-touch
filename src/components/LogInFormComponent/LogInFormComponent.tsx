import { Container, Row, Col } from "react-bootstrap";
import { Link as NavLink } from "react-router-dom";

const LogInForm = () => {
  return (
    <section id="logIn-form">
      <Container>
        <Row
          id="logIn-form-container"
          className="d-flex justify-content-around form-container"
        >
          <Col xs={12} md={6}>
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <NavLink to="/agenda" className="d-flex justify-content-around">
                <button type="submit" className="btn btn-logIn">
                  LogIn
                </button>
              </NavLink>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogInForm;
