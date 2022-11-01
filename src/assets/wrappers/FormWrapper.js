import styled from "styled-components";

const Wrapper = styled.form`
  width: auto;
  padding: 32px;
  width: 50%;
  background-color: var(--blue);
  h3 {
    color: var(--white);
    font-size: 28px;
    font-weight: 700;
    text-decoration: underline;
    font-family: "Akkurat", sans-serif;
  }
  .inputContainer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;
    word-spacing: 3px;
    width: 100%;
    /* background-color: red; */
    .labelStyle {
      color: var(--white);
      font-size: 18px;
      font-weight: 600;
      b {
        /* margin-left: 15px; */
        color: var(--yellow);
      }
    }
    .inputStyle {
      background-color: transparent;
      color: aqua;
      border: 0;
      padding-left: 10px;
      font-size: 16px;
      width: 20%;
      :focus {
        outline: none;
      }
    }
    .inputStyle:-webkit-autofill {
      -webkit-text-fill-color: aqua;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: none;
      -webkit-box-shadow: 0 0 0 30px var(--primary) inset;
    }
  }
  .termsCheckboxContainer {
    display: flex;
    word-spacing: 3px;
    align-items: center;
    margin-top: 35px;
    .checkbox {
      margin: 0;
    }
    .termsLabel {
      color: var(--white);
      font-size: 11px;
      margin-left: 10px;
      b {
        text-decoration: underline;
      }
    }
  }
  .submitButton {
    margin-top: 30px;
    color: black;
    background-color: var(--yellow);
    font-size: 18px;
    border: none;
    padding: 5px 15px;
    border-radius: 5%;
    margin-bottom: 15px;
  }
  .validationError {
    position: absolute;
    background-color: var(--yellow);
    border: 2px solid orange;
    width: 40%;
    /* margin-top: 150px; */
    p {
      text-decoration: underline;
      padding: 10px 15px;
    }
  }
  .addressInForm {
    display: none;
    color: var(--white);
    font-size: 13px;
    text-align: center;
    line-height: 1.25;
    padding: 32px 0px;
  }
  @media (max-width: 1020px) {
    h3 {
      font-size: 21px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    .validationError {
      width: 90%;
      position: relative;
    }
    .addressInForm {
      display: flex;
    }
  }
`;

export default Wrapper;
