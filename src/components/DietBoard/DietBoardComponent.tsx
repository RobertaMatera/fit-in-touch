import { Container, Row, Col } from "react-bootstrap";
import Search from "../DoctorsPatient/SearchComponent";
import DietFile from "./DietFileComponent";

const DietBoard = () => {
  return (
    <Container fluid id="diet-board">
      <Row>
        <Col xs={12} className="d-flex flex-row justify-content-center mb-5">
          <Search />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <div className="check-date mb-3 py-2">
            <h6 className="mb-1">check up date</h6>
            <p>07/08/2021</p>
          </div>
          <DietFile />
        </Col>
        <Col xs={12} className="text-center">
          <div className="check-date mb-3 py-2">
            <h6 className="mb-1">check up date</h6>
            <p>12/06/2021</p>
          </div>
          <DietFile />
        </Col>
      </Row>
    </Container>
  );
};

export default DietBoard;
