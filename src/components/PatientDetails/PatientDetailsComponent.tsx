import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./ContactInfoComponent";
import MainInfoPatient from "./MainInfoPatientComponent";
import PatientInfo from "./PatientInfoComponent";

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
          <MainInfoPatient />
        </Col>
        <Col
          xs={12}
          md={2}
          className="d-flex justify-content-center mt-5 mt-md-0"
        >
          {" "}
          <div className="contactInfo-box">
            <h6>contact info</h6>
            <ContactInfo />
          </div>
        </Col>

        <Col
          xs={12}
          md={2}
          className="d-flex justify-content-center mt-5 mt-md-0"
        >
          {" "}
          <div className="patientInfo-box">
            <h6>patient info</h6>
            <PatientInfo />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientDetails;
