import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LastDiet = () => {
  return (
    <Container fluid id="last-diet">
      <Row>
        <Col xs={12} className="text-center">
          <div>
            {" "}
            <h2>last diet of</h2>
            <h1>name surname</h1>
          </div>

          <hr className="separation-line" />
          <div className="mt-2">
            <h6>check date</h6>
            <p>07/08/2021</p>
          </div>
          <div>
            <img
              className="img-last-diet mt-3 mb-5"
              src="https://picsum.photos/800/400"
              alt="last-diet"
            />
          </div>
          <div className="go-back-link text-center my-5 mx-auto">
            <Link to="/patients">go back</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LastDiet;
