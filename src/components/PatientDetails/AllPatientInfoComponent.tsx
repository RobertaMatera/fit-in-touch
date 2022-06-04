import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import getAge from "../../helpers/getDate";

const AllPatientInfo = ({ patientInfoProps }: any) => {
  const params = useParams();
  const paramsId: string = params.id!;
  const id = parseInt(paramsId) - 1;

  const patientInfo = patientInfoProps[id];
  console.log(patientInfo);
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
            <h2 className="text-center">
              {patientInfo.name} {patientInfo.surname}
            </h2>
            <p>age (YY)</p>
            <p className="">{age}</p>
            <p>gender</p>
            <p className="">{patientInfo.gender}</p>
            <p>height (cm)</p>
            <p className="">{patientInfo.height}</p>
            <p>weight (kg)</p>
            <p className="">{patientInfo.weight}</p>
            <p>weist circumference (cm)</p>
            <p className="">{patientInfo.WC}</p>
            <p>Body Mass Indicator</p>
            <p className="">{patientInfo.BMI}</p>
            <p>Visceral Adipose Tissue (lt)</p>
            <p className="">{patientInfo.VAT}</p>
            <p>Free Fat Mass (kg)</p>
            <p className="">{patientInfo.FFM}</p>
            <p>Fat Mass (kg)</p>
            <p className="">{patientInfo.FM}</p>
            <p>PHI (°)</p>
            <p className="">{patientInfo.PHI}</p>
            <p>B IVA (Ω)</p>
            <p className="">{patientInfo.B_IVA}</p>
            <p>total body water (lt)</p>
            <p className="">{patientInfo.TBW}</p>
            <p>extra cellular water (lt)</p>
            <p className="">{patientInfo.EXC}</p>
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
