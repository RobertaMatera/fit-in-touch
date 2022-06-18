import { Container, Row, Col } from "react-bootstrap";
import SinglePatientCard from "./SinglePatientCardComponent";
import Search from "./SearchComponent";
import { useState } from "react";

const DoctorsPatientsSection = ({ patients }: any) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container fluid id="DoctorsPatientsSection">
      <Row>
        <Col xs={12} className="d-block d-md-flex justify-content-center">
          <Search />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center row-card mb-5">
        {patients?.slice(0, 8).map((patient: any) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center mb-3"
            key={patient.id}
          >
            <SinglePatientCard patientInfo={patient} />
          </Col>
        ))}
      </Row>
      <Row className="d-flex justify-content-center row-card mb-5">
        {showMore &&
          patients?.slice(8, patients.length).map((patient: any) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              xl={3}
              className="d-flex justify-content-center mb-3"
              key={patient.id}
            >
              <SinglePatientCard patientInfo={patient} />
            </Col>
          ))}
        <Col xs={12} className="d-flex justify-content-center mb-5">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="btn btn-show-hide"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorsPatientsSection;
