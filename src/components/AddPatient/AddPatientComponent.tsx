import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPatientAction } from "../../redux/services/patients";

const AddPatient = () => {
  type UserSubmitForm = {
    name: string;
    surname: string;
    dateOfBirth: string;
    gender: string;
    height: string;
    weight: string;
    waistCircumference: string;
    visceralAdiposeTissue: string;
    freeFatMass: string;
    fatMass: string;
    phi: string;
    bIva: string;
    contactInfo: {
      phoneNumber: string;
      email: string;
      address: string;
      paymentMethod: string;
    }[];
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("name is required")
      .min(2, "name must be at least 2 characters")
      .max(20, "name must not exceed 20 characters"),
    surname: Yup.string()
      .required("surname is required")
      .min(2, "surname must be at least 2 characters")
      .max(10, "surname must not exceed 10 characters"),
    dateOfBirth: Yup.string().required("date of birth is required"),
    gender: Yup.string().required("gender is required"),
    height: Yup.string()
      .required("height is required")
      .min(2, "height must be at least 2 characters")
      .max(3, "height must not exceed 3 characters"),
    weight: Yup.string()
      .required("weight is required")
      .min(2, "weight must be at least 2 characters")
      .max(3, "weight must not exceed 3 characters"),
    waistCircumference: Yup.string()
      .required("waist circumference is required")
      .min(2, "waist circumference must be at least 2 characters")
      .max(3, "waist circumference must not exceed 3 characters"),
    visceralAdiposeTissue: Yup.string()
      .required("visceral adipose tissue is required")
      .min(2, "visceral adipose tissue must be at least 2 characters")
      .max(3, "visceral adipose tissue must not exceed 3 characters"),
    freeFatMass: Yup.string()
      .required("free fat mass is required")
      .min(2, "free fat mass must be at least 2 characters")
      .max(3, "free fat mass must not exceed 3 characters"),
    fatMass: Yup.string()
      .required("fat mass is required")
      .min(2, "fat mass must be at least 2 characters")
      .max(3, "fat mass must not exceed 3 characters"),
    phi: Yup.string()
      .required("phi is required")
      .min(2, "PHI be at least 2 characters")
      .max(3, "PHI must not exceed 3 characters"),
    bIva: Yup.string()
      .required("b iva is required")
      .min(2, "b iva be at least 2 characters")
      .max(3, "b iva must not exceed 3 characters"),
    contactInfo: Yup.array()
      .of(
        Yup.object().shape({
          phoneNumber: Yup.string().required("phone number is required"),
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
          address: Yup.string().required("address is required"),
          paymentMethod: Yup.string().required("payment method is required"),
        })
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    dispatch(addPatientAction(data)).then(() => navigate("/patients"));
  };

  return (
    <Container fluid id="add-patient-section">
      <Row>
        <Col xs={12} className="d-flex justify-content-center my-5">
          <div id="logo-form">
            <img src="my-logo.png" alt="logo fit in touch" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column"
          >
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column form-group">
                <label>
                  <p>Name:</p>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className={`new-patient-form mb-4 ${
                    errors.name ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>

              <div className="d-flex flex-column m-0 ms-md-5 form-group">
                <label>
                  <p>Surname:</p>
                </label>
                <input
                  type="text"
                  {...register("surname")}
                  className={`new-patient-form mb-4 ${
                    errors.surname ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.surname?.message}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Date of Birth (dd/mm/yyyy)</p>
                </label>
                <input
                  type="text"
                  {...register("dateOfBirth")}
                  className={`new-patient-form mb-4 ${
                    errors.dateOfBirth ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.dateOfBirth?.message}
                </div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Gender (X-M-F):</p>
                </label>
                <input
                  type="text"
                  {...register("gender")}
                  className={`new-patient-form mb-4 ${
                    errors.gender ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.gender?.message}</div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Phone Number</p>
                </label>
                <input
                  type="text"
                  {...register("contactInfo.0.phoneNumber")}
                  className={`new-patient-form mb-4 ${
                    errors.contactInfo && errors.contactInfo[0].phoneNumber
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.contactInfo &&
                    errors.contactInfo[0].phoneNumber?.message}
                </div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Mail</p>
                </label>
                <input
                  type="text"
                  {...register("contactInfo.0.email")}
                  className={`new-patient-form mb-4 ${
                    errors.contactInfo && errors.contactInfo[0].email
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.contactInfo && errors.contactInfo[0].email?.message}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Address</p>
                </label>
                <input
                  type="text"
                  {...register("contactInfo.0.address")}
                  className={`new-patient-form mb-4 ${
                    errors.contactInfo && errors.contactInfo[0].address
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.contactInfo && errors.contactInfo[0].address?.message}
                </div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Payment Method</p>
                </label>
                <input
                  type="text"
                  {...register("contactInfo.0.paymentMethod")}
                  className={`new-patient-form mb-4 ${
                    errors.contactInfo && errors.contactInfo[0].paymentMethod
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.contactInfo &&
                    errors.contactInfo[0].paymentMethod?.message}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Height (cm):</p>
                </label>
                <input
                  type="text"
                  {...register("height")}
                  className={`new-patient-form mb-4 ${
                    errors.height ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.height?.message}</div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Weight (kg):</p>
                </label>
                <input
                  type="text"
                  {...register("weight")}
                  className={`new-patient-form mb-4 ${
                    errors.weight ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.weight?.message}</div>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Waist Circumference (cm):</p>
                </label>
                <input
                  type="text"
                  {...register("waistCircumference")}
                  className={`new-patient-form mb-4 ${
                    errors.waistCircumference ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.waistCircumference?.message}
                </div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Visceral Adipose Tissue (lt):</p>
                </label>
                <input
                  type="text"
                  {...register("visceralAdiposeTissue")}
                  className={`new-patient-form mb-4 ${
                    errors.visceralAdiposeTissue ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.visceralAdiposeTissue?.message}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>Free Fat Mass (kg):</p>
                </label>
                <input
                  type="text"
                  {...register("freeFatMass")}
                  className={`new-patient-form mb-4 ${
                    errors.freeFatMass ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.freeFatMass?.message}
                </div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>Fat Mass (kg):</p>
                </label>
                <input
                  type="text"
                  {...register("fatMass")}
                  className={`new-patient-form mb-4 ${
                    errors.fatMass ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.fatMass?.message}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row form-group">
              <div className="d-flex flex-column">
                <label>
                  <p>PHI (°):</p>
                </label>
                <input
                  type="text"
                  {...register("phi")}
                  className={`new-patient-form mb-4 ${
                    errors.phi ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.phi?.message}</div>
              </div>
              <div className="d-flex flex-column m-0 ms-md-5">
                <label>
                  <p>B IVA (Ω):</p>
                </label>
                <input
                  type="text"
                  {...register("bIva")}
                  className={`new-patient-form mb-4 ${
                    errors.bIva ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.bIva?.message}</div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="form-btn form-btn-submit">
                Submit
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="form-btn form-btn-reset"
              >
                Reset
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPatient;
