const ContactInfo = ({ contactInfo }: any) => {
  return (
    <>
      <div className="info-container mt-3">
        <h6>phone number</h6>
        <p>{contactInfo[0].phoneNumber}</p>
        <h6>mail</h6>
        <p>{contactInfo[0].mail}</p>
        <h6>address</h6>
        <p>{contactInfo[0].address}</p>
        <h6>payment method</h6>
        <p>{contactInfo[0].paymentMethod}</p>
      </div>
      <hr />
      <div className="mt-4">
        <p>
          {" "}
          <b>patient notes</b>
        </p>
        <div className="d-flex justify-content-center my-2">
          <p className="patient-notes">{contactInfo[0].notes}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
