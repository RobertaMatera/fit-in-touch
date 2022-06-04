import { Link } from "react-router-dom";
import getAge from "../../helpers/getDate";

const PatientInfo = ({ patientInfo }: any) => {
  const dateOfBirth = patientInfo.dateOfBirth;
  const age = getAge(dateOfBirth);

  return (
    <>
      <div className="info-container  mt-3 ">
        <h6>age</h6>
        <p>{age}</p>
        <h6>gender</h6>
        <p>{patientInfo.gender}</p>
        <h6>height</h6>
        <p>{patientInfo.height} cm</p>
        <h6>weight</h6>
        <p>{patientInfo.weight} kg</p>
        <h6>wc</h6>
        <p>{patientInfo.WC} cm</p>
        <h6>bmi</h6>
        <p>{patientInfo.BMI}</p>
        <span className="d-flex justify-content-center">
          <Link
            to={"/patients/" + patientInfo.id + "/info"}
            style={{ padding: "0.5rem 1rem" }}
          >
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
          <Link
            style={{ padding: "0.5rem 1rem" }}
            to={"/patient/" + patientInfo.id + "/history"}
          >
            history <i className="bi bi-arrow-right-circle ms-auto"></i>
          </Link>{" "}
        </h6>
        <h6 className="mt-3">
          {" "}
          <Link
            to={"/patient/" + patientInfo.id + "/diet-board"}
            style={{ padding: "0.5rem 1rem" }}
          >
            diet-board <i className="bi bi-arrow-right-circle ms-auto"></i>
          </Link>{" "}
        </h6>
      </div>
    </>
  );
};

export default PatientInfo;
