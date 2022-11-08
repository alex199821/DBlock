import Wrapper from "../assets/wrappers/FormWrapper";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { FORM_INFO, ADD_SUBSCRIBER, ADDRESS } from "../queries";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Form = () => {
  const navigate = useNavigate();

  //Querys to get all form data and single address
  const result = useQuery(FORM_INFO);
  const resultAddress = useQuery(ADDRESS);

  const [formInfo, setFormInfo] = useState([]);
  const [address, setAddress] = useState([]);

  //Useeffect to change state when query is updated
  useEffect(() => {
    result.data && setFormInfo(result.data.formInfo);
    resultAddress.data && setAddress(resultAddress.data.addressInfo);
  }, [result, resultAddress]);

  //Mutation to add subscriber to database on submit
  const [createSubscriber] = useMutation(ADD_SUBSCRIBER, {
    onError: (error) => {
      console.log(error);
    },
  });

  //Formik Library is used for form managment
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
    onSubmit: (values, { resetForm }) => {
      const { name, lastName, email } = values;
      createSubscriber({ variables: { name, lastName, email } });
      resetForm();
      navigate("/success");
    },
    validateOnChange: false,
  });
  if (formInfo.terms && address) {
    const {
      email,
      lastName: { standardLastName, highlightedLastName },
      name: { standardName, highlightedName },
      signupInfo,
      submitButton,
      terms,
      errorMessage,
    } = formInfo;
    return (
      <Wrapper onSubmit={formik.handleSubmit}>
        <h3>{signupInfo}</h3>
        <div className="inputContainer">
          <label htmlFor="name" className="labelStyle">
            {standardName}
            <b>{highlightedName}</b>
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
          <label htmlFor="lastName" className="labelStyle">
            {standardLastName}
            <b>{highlightedLastName}</b>
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
            <b>{email}</b>
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
          <p className="termsLabel">{terms}</p>
        </div>
        <button className="submitButton" type="submit">
          {submitButton}
        </button>
        {formik.errors.name ||
        formik.errors.lastName ||
        formik.errors.email ||
        formik.errors.terms ? (
          <div className="validationError">
            <p>{errorMessage}</p>
          </div>
        ) : null}
        <p className="addressInForm">{address.address}</p>
      </Wrapper>
    );
  }
};
export default Form;
