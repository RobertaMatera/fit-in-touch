import { Container, Row, Col } from "react-bootstrap";

const PatientDetails = () => {
  return (
    <Container fluid id="patient-info-section" className="mb-4">
      <Row>
        <Col className="text-center mb-4">
          <h1>name surname</h1>
        </Col>
      </Row>
      <Row className="col-box">
        <Col xs={12} md={8} className="d-flex justify-content-center">
          {" "}
          diet + show appointment
        </Col>
        <Col xs={12} md={2} className="d-flex justify-content-center">
          {" "}
          contact info
        </Col>

        <Col xs={12} md={2} className="d-flex justify-content-center">
          {" "}
          patient info
        </Col>
      </Row>
    </Container>
  );
};

export default PatientDetails;
