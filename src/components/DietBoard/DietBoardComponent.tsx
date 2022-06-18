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
          <DietFile />
        </Col>
        <Col xs={12} className="text-center">
          <DietFile />
        </Col>
      </Row>
    </Container>
  );
};

export default DietBoard;
