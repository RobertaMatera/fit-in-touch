import { Link } from "react-router-dom";

const PatientInfo = () => {
  return (
    <>
      <div className="info-container  mt-3 ">
        <h6>age</h6>
        <p>33</p>
        <h6>gender</h6>
        <p>female</p>
        <h6>height</h6>
        <p>.... cm</p>
        <h6>weight</h6>
        <p>70kg</p>
        <h6>wc</h6>
        <p>.... cm</p>
        <h6>bmi</h6>
        <p>.....</p>
        <span className="d-flex justify-content-center">
          <Link to="/patients/id/info" style={{ padding: "0.5rem 1rem" }}>
            see more <i className="bi bi-arrow-right-circle my-auto"></i>
          </Link>
        </span>
      </div>
      <hr />
      <div
        className="mb-3
      "
      >
        <p>
          {" "}
          <b>last update</b>
        </p>
        <p>30/05/2021</p>
      </div>
      <div className="links-box">
        <h6>
          {" "}
          <Link to="/patient/id/history" style={{ padding: "0.5rem 1rem" }}>
            history <i className="bi bi-arrow-right-circle ms-auto"></i>
          </Link>{" "}
        </h6>
        <h6 className="mt-3">
          {" "}
          <Link to="/patient/id/diet-board" style={{ padding: "0.5rem 1rem" }}>
            diet-board <i className="bi bi-arrow-right-circle ms-auto"></i>
          </Link>{" "}
        </h6>
      </div>
    </>
  );
};

export default PatientInfo;
