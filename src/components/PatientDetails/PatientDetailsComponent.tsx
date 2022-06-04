import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./ContactInfoComponent";
import MainInfoPatient from "./MainInfoPatientComponent";
import PatientInfo from "./PatientInfoComponent";
import { useParams } from "react-router-dom";

const PatientDetails = ({ patientData }: any) => {
  const params = useParams();
  const paramsId: string = params.id!;
  const id = parseInt(paramsId) - 1;

  const patientInfo = patientData[id];

  return (
    <Container fluid id="patient-info-section" className="mb-4">
      <Row className="col-box">
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <MainInfoPatient patient={patientInfo} />
        </Col>
        <Col
          xs={12}
          md={2}
          className="d-flex justify-content-center mt-5 mt-md-0"
        >
          {" "}
          <div className="contactInfo-box">
            <h6>contact info</h6>
            <ContactInfo contactInfo={patientInfo.contactInfo} />
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
            <PatientInfo patientInfo={patientInfo} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientDetails;
