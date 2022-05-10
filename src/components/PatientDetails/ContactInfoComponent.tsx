const ContactInfo = () => {
  return (
    <>
      <div className="info-container mt-3">
        <h6>phone number</h6>
        <p>333 444 777 895</p>
        <h6>mail</h6>
        <p>pippo@mail.com</p>
        <h6>address</h6>
        <p>street</p>
        <h6>payment method</h6>
        <p>credit card</p>
      </div>
      <div className="mt-4">
        <p>
          {" "}
          <b>patient notes</b>
        </p>
        <div className="d-flex justify-content-center my-2">
          <p className="patient-notes">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt
            sint voluptatem sequi, dolores saepe! Sequi doloribus dolorum ipsum
            maxime excepturi aperiam magni! Quibusdam nostrum a minima
            aspernatur enim est.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
