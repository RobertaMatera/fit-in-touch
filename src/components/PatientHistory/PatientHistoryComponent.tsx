import { Container, Row, Col } from "react-bootstrap";
import AddPatient from "../AddPatient/AddPatientComponent";
import Filter from "../DoctorsPatient/FilterComponent";
import Search from "../DoctorsPatient/SearchComponent";
import DateAndDataCheck from "./DateAndDataCheckComponent";
import InfoCheck from "./InfoCheckComponent";

const PatientHistory = () => {
  return (
    <Container fluid id="history-section">
      <Row>
        <Col xs={12}>
          <div>
            <h2>history of</h2>
            <h1>name surname</h1>
          </div>
          <div className="d-md-flex flex-md-row justify-content-center mt-3 mb-5">
            <Search />
            <Filter />
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <DateAndDataCheck />
      </Row>
      <Row className="mb-4">
        <DateAndDataCheck />
      </Row>
    </Container>
  );
};

export default PatientHistory;
