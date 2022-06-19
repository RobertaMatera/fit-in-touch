import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const LastDiet = ({ patientInfo }: any) => {
  const params = useParams();
  const paramsId: string = params.id!;
  const id = parseInt(paramsId) - 1;
  const patient = patientInfo[id];

  return (
    <Container fluid id="last-diet">
      <Row>
        <Col xs={12} className="text-center">
          <div>
            {" "}
            <h2>last diet of</h2>
            <h1>
              {patient.name} {patient.surname}
            </h1>
          </div>

          <hr className="separation-line" />
          <div className="mt-2">
            <h6>check up date</h6>
            <p>07/08/2021</p>
          </div>
          <div>
            <img
              className="img-last-diet mt-3 mb-5"
              src="https://i0.wp.com/dot2trot.com/wp-content/uploads/2014/07/dot-weekly-menu.png?resize=538%2C365"
              alt="last-diet"
            />
          </div>
          <div className="go-back-link text-center my-5 mx-auto">
            <Link to="/patients">go back</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LastDiet;
