import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import getAge from "../../helpers/getDate";

const AllPatientInfo = ({ patientInfoProps }: any) => {
  const params = useParams();
  const paramsId: string = params.id!;
  const id = parseInt(paramsId) - 1;

  const patientInfo = patientInfoProps[id];

  const dateOfBirth = patientInfo.dateOfBirth;
  const age = getAge(dateOfBirth);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col xs={12}>
          <div className="info-box mx-auto mb-5">
            <img
              id="logo-patient-info"
              src="/my-logo.png"
              alt="fit in touch logo"
            />
            <h2>name surname</h2>
            <p>age</p>
            <p className="">{age}</p>
            <p>gender</p>
            <p className="">{patientInfo.gender}</p>
            <p>height</p>
            <p className="">{patientInfo.height} cm</p>
            <p>weight</p>
            <p className="">{patientInfo.weight} kg</p>
            <p>weist circumference</p>
            <p className="">{patientInfo.WC} cm</p>
            <p>Body Mass Indicator</p>
            <p className="">{patientInfo.BMI}</p>
            <p>Visceral Adipose Tissue</p>
            <p className="">{patientInfo.VAT}</p>
            <p>Free Fat Mass</p>
            <p className="">{patientInfo.FFM}</p>
            <p>Fat Mass</p>
            <p className="">{patientInfo.FM}</p>
            <p>PHI</p>
            <p className="">{patientInfo.PHI}</p>
            <p>B IVA</p>
            <p className="">{patientInfo.B_IVA}</p>
          </div>
          <div className="go-back-link text-center mb-5">
            <Link to={"/patients/" + patientInfo.id}>go back</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllPatientInfo;
