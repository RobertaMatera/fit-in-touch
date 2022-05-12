import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPatientInfo = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="info-box mx-auto mb-5">
            <p>age</p>
            <p className="">33</p>
            <p>gender</p>
            <p className="">female</p>
            <p>height</p>
            <p className="">162 cm</p>
            <p>weight</p>
            <p className="">70 kg</p>
            <p>weist circumference</p>
            <p className="">....</p>
            <p>Body Mass Indicator</p>
            <p className="">....</p>
            <p>Visceral Adipose Tissue</p>
            <p className="">....</p>
            <p>Free Fat Mass</p>
            <p className="">....</p>
            <p>Fat Mass</p>
            <p className="">....</p>
            <p>PHI</p>
            <p className="">....</p>
            <p>B IVA</p>
            <p className="">....</p>
          </div>
          <div className="go-back-link text-center mb-5">
            <Link to="/patients/id">go back</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllPatientInfo;
