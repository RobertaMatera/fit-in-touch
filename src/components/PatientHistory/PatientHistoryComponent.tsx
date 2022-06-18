import { Container, Row, Col } from "react-bootstrap";
import Search from "../DoctorsPatient/SearchComponent";
import DateAndDataCheck from "./DateAndDataCheckComponent";

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
