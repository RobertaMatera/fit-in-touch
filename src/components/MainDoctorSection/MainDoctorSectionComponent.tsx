import "./mainDoctorSectionStyle.scss";
import { Container, Row, Col } from "react-bootstrap";
import Agenda from "./AgendaComponent";

const MainDoctorSection = () => {
  return (
    <Container fluid id="mainDoctorSection">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Agenda />
        </Col>
      </Row>
    </Container>
  );
};

export default MainDoctorSection;
