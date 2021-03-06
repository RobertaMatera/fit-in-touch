import { Link, useNavigate } from "react-router-dom";

const SinglePatientCard = ({ patientInfo }: any) => {
  const navigate = useNavigate();

  const redirectTo = () => navigate(`/patients/${patientInfo.id}`);

  return (
    <div id="patient-card" className="card-container">
      <div className="icon-wrapper">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src="https://picsum.photos/300" alt="patient name" />
            </div>
          </div>
        </div>
        <i className="bi bi-chat-right-text icon-chat"></i>
        <i className="bi bi-whatsapp icon-wa"></i>
        <i className="bi bi-envelope icon-mail"></i>
        <button type="button" className="btn btn-i-info" onClick={redirectTo}>
          {" "}
          <i className="bi info-circle-fill"></i>
        </button>
      </div>
      <div className="text-container">
        <div>
          {" "}
          <h3 className="mt-4 mb-2">
            {patientInfo.name} {patientInfo.surname}
          </h3>
          <div className="d-inline-flex align-self-center mt-1">
            <i className="bi bi-calendar me-2"></i>
            <p> 30/06/2022 </p>
          </div>
          <hr />
          <Link to="/patient/id/last-diet">
            <button type="button" className="btn btn-card">
              Last Diet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePatientCard;
