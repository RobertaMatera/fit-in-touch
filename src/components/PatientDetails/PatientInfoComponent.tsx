import { Link } from "react-router-dom";

const PatientInfo = () => {
  return (
    <>
      <div className="info-container mt-3">
        <h6>age</h6>
        <p>33</p>
        <h6>gender</h6>
        <p>female</p>
        <h6>height</h6>
        <p>.... cm</p>
        <h6>weight</h6>
        <p>70kg</p>
        <h6>wc</h6>
        <p>....</p>
        <h6>pa</h6>
        <p>...</p>
        <h6>bmi</h6>
        <p>.....</p>
      </div>
      <div className="links-box">
        <h6>
          {" "}
          <Link to="#">story-board</Link>{" "}
        </h6>
        <h6 className="mt-3">
          {" "}
          <Link to="#">diet-board</Link>{" "}
        </h6>
      </div>
    </>
  );
};

export default PatientInfo;
