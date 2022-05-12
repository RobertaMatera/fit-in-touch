import { Container, Row, Col } from "react-bootstrap";

const AddPatient = () => {
  return (
    <Container fluid id="add-patient-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center mt-3">
          <form className="d-flex flex-column">
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>Name:</p>
                </label>
                <input
                  type="text"
                  name="name"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Surname:</p>
                </label>
                <input
                  type="text"
                  name="surname"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>Date of Birth (dd/mm/yyyy)</p>
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Gender (X-M-F):</p>
                </label>
                <input
                  type="text"
                  name="gender"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>Height (cm):</p>
                </label>
                <input
                  type="text"
                  name="height"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Weight (kg):</p>
                </label>
                <input
                  type="text"
                  name="weight"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>Waist Circumference (cm):</p>
                </label>
                <input
                  type="text"
                  name="waistCircumference"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Visceral Adipose Tissue (lt):</p>
                </label>
                <input
                  type="text"
                  name="adiposeTissue"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>Free Fat Mass (kg):</p>
                </label>
                <input
                  type="text"
                  name="freeFatMass"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Fat Mass (kg):</p>
                </label>
                <input
                  type="text"
                  name="fatMass"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column">
                <label>
                  <p>PHI (°):</p>
                </label>
                <input
                  type="text"
                  name="phi"
                  className="new-patient-form mb-4"
                />
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>B IVA (Ω):</p>
                </label>
                <input
                  type="text"
                  name="b-iva"
                  className="new-patient-form mb-4"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="align-self-center submit mt-4 mb-5"
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPatient;
