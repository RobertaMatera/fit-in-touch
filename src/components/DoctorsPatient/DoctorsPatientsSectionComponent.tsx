import { Container, Row, Col } from "react-bootstrap";
import SinglePatientCard from "./SinglePatientCardComponent";
import Search from "./SearchComponent";
import Filter from "./FilterComponent";

const DoctorsPatientsSection = ({ patients }: any) => {
  return (
    <Container fluid id="DoctorsPatientsSection">
      <Row>
        <Col xs={12} className="d-block d-md-flex justify-content-center">
          <Search />
          <Filter />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center row-card mb-5">
        {patients.map((patient: any) => (
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
      <Row>
        <Col xs={12} className="d-flex justify-content-center mb-5">
          <button type="button" className="btn btn-show-hide">
            Show more
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorsPatientsSection;
