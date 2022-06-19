import { Col } from "react-bootstrap";
const InfoCheck = () => {
  return (
    <>
      <Col xs={12} lg={3} className="text-center text-lg-end mb-2 m-0">
        <h6>check up date</h6>
        <p>07/08/2021</p>
      </Col>
      <Col xs={12} lg={9}>
        <div className="d-flex flex-column info-value-box mx-auto mx-lg-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="d-flex flex-column m-0 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Weight (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 98 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>BMI:</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 27 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Waist Circumference (cm)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 97 </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Free Fat Mass (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 12 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Fat Mass (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 16 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Visceral Adipose Tissue (lt)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 19 </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Total Body Water (lt):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 3 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Extra Cellular Water (lt):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 7 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>PHI (°):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 12 </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>B IVA (Ω):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 45 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Height (cm)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 170 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Age (yy):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 55 </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
      {/* da qui in poi è hardcoded, solo per la presentazione del progetto: cancellare e passare i dati dinamicamente*/}
      <div
        style={{ display: "inline-block", width: "100%", height: "50px" }}
      ></div>
      <Col xs={12} lg={3} className="text-center text-lg-end mb-2 m-0">
        <h6>check up date</h6>
        <p>12/06/2021</p>
      </Col>
      <Col xs={12} lg={9}>
        <div className="d-flex flex-column info-value-box mx-auto mx-lg-0">
          <div className="d-flex flex-column flex-md-row justify-content-center ">
            <div className="d-flex flex-column m-0 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Weight (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 103 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>BMI:</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 32 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Waist Circumference (cm)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 105 </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Free Fat Mass (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 21 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Fat Mass (kg):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 20 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Visceral Adipose Tissue (lt)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 17 </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Total Body Water (lt):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 9 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Extra Cellular Water (lt):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 3 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>PHI (°):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 63 </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-column m-0  mb-4">
              <div className="mx-auto mx-lg-0">
                <p>B IVA (Ω):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 47 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Height (cm)</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 178 </p>
              </div>
            </div>
            <div className="d-flex flex-column m-0 ms-md-4 mb-4">
              <div className="mx-auto mx-lg-0">
                <p>Age (yy):</p>
              </div>
              <div className="value-box">
                <p className="new-patient-form mx-auto"> 55 </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default InfoCheck;
