import Wrapper from "../assets/wrappers/FormWrapper";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(
          "One or more fields have an error. Please check and try again."
        ),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required(
          "One or more fields have an error. Please check and try again."
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required(
          "One or more fields have an error. Please check and try again."
        ),
      terms: Yup.boolean().oneOf(
        [true],
        "You must agree to our policy to proceed."
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
  });
  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <h3>WE'LL KEEP YOU POSTED</h3>
      <div className="inputContainer">
        <label htmlFor="name" className="labelStyle">
          Insert<b> ( name ) :</b>
        </label>
        <input
          className="inputStyle"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="name" className="labelStyle">
          Insert=<b>( last_name ) :</b>
        </label>
        <input
          className="inputStyle"
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="name" className="labelStyle">
          <b>Email :</b>
        </label>
        <input
          className="inputStyle"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="termsCheckboxContainer">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="checkbox"
          onChange={() => {
            formik.setFieldValue("terms", !formik.values.terms);
          }}
          value={formik.values.terms}
        />
        <p className="termsLabel">
          By clicking this box, I agree to this <b>terms & conditions</b> and{" "}
          <b>privacy policy</b>
        </p>
      </div>
      <button className="submitButton" type="submit">
        {"//JOIN"}
      </button>
      {formik.errors.name ||
      formik.errors.lastName ||
      formik.errors.email ||
      formik.errors.terms ? (
        <div className="validationError">
          <p>One or more fields have an error. Please check and try again.</p>
        </div>
      ) : null}
      <p className="addressInForm">14, M. KOSTAVA ST.TBILISI, 0108, GEORGIA WELCOME@DBLOCK.COM</p>
    </Wrapper>
  );
};
export default Form;
