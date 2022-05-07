import "./doctorsPatientsSectionStyle.scss";
import { Container, Row, Col } from "react-bootstrap";
import SinglePatientCard from "./SinglePatientCardComponent";
import Search from "./SearchComponent";
import Filter from "./FilterComponent";

const DoctorsPatientsSection = () => {
  return (
    <Container fluid id="DoctorsPatientsSection">
      {/* <Row>
        <Col xs={12} className="d-flex justify-content-center my-3">
          <h2>My Patients</h2>
        </Col>
      </Row> */}
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Search />
          <Filter />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center row-card mb-5">
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <SinglePatientCard />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <SinglePatientCard />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <SinglePatientCard />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <SinglePatientCard />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="d-flex justify-content-center mb-3"
        >
          <SinglePatientCard />
        </Col>
        <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
          <SinglePatientCard />
        </Col>
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
