const SinglePatientCard = () => {
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
        <i className="bi bi-info-circle-fill icon-info"></i>
      </div>
      <div className="text-container">
        <div>
          {" "}
          <h3 className="mt-4 mb-2">Name Surname</h3>
          <div className="d-inline-flex align-self-center mt-1">
            <i className="bi bi-calendar me-2"></i>
            <p> 30/06/2022 </p>
          </div>
          <hr />
          <button type="button" className="btn btn-card">
            Last Diet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePatientCard;
