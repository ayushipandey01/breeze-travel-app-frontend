import "./Auth.css";
import { useAuth, useAlert } from "../../context";
import {
  validateName,
  validateEmail,
  validateNumber,
  validatePassword,
} from "../../utils";

import { signupHandler } from "../../services";
import { useState } from "react";

let isNameValid,
  isNumberValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid,
  passwordEvent,
  confirmPasswordEvent;

export const AuthSignup = () => {
  const { number, username, email, password, confirmPassword, authDispatch } =
    useAuth();

  // console.log({username, email, password, number, confirmPassword, authDispatch});

  const { setAlert } = useAlert();

  const [numberValid, setNumberValid] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [confirmPassswordValid, setConfirmPasswordValid] = useState("");

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      setNumberValid("Valid Number");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else if (event.target.value === "") {
      setNumberValid("Enter Number");
    } else {
      setNumberValid("Invalid Number");
    }
  };

  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      setNameValid("Valid Name");
      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else if (event.target.value === "") {
      setNameValid("Enter Name");
    } else {
      setNameValid("Invalid Name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      setEmailValid("Valid Email");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else if (event.target.value === "") {
      setEmailValid("Enter Email");
    } else {
      setEmailValid("Invalid Email");
    }
  };

  const handlePasswordChange = (event) => {
    passwordEvent = event.target.value;
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      setPasswordValid("Valid Password");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else if (event.target.value === "") {
      setPasswordValid("Enter Password");
    } else {
      setPasswordValid(
        "Invalid Password, password should contain atleast 8 characters including 1 capital letter , 1 special character and 1 number"
      );
    }
  };

  const handleConfirmPasswordChange = (event) => {
    confirmPasswordEvent = event.target.value;
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid && passwordEvent === confirmPasswordEvent) {
      setConfirmPasswordValid("Password Matched");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else if (event.target.value === "") {
      setConfirmPasswordValid("Enter Password again");
    } else {
      setConfirmPasswordValid("Password did not match");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      signupHandler(number, username, email, password);
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    setTimeout(() => {
      setAlert({
        open: true,
        message: `Sign-in Successful !!! Please Login now.`,
        type: "success",
      });
    }, 4000);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number<span className="asterisk">*</span>
          </label>
          <input
            defaultValue={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
          {/* <span className="sinup-span">{numberEvent === "" ? "Enter number" : isNumberValid ? "Valid input" : "Invalid Input"}</span> */}
          <p
            className={`signup-span ${
              isNumberValid ? "singup-success" : "singup-wrong"
            }`}
          >
            {numberValid}
          </p>
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name<span className="asterisk">*</span>
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
          <p
            className={`signup-span ${
              isNameValid ? "singup-success" : "singup-wrong"
            }`}
          >
            {nameValid}
          </p>
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email<span className="asterisk">*</span>
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
          />
          <p
            className={`signup-span ${
              isEmailValid ? "singup-success" : "singup-wrong"
            }`}
          >
            {emailValid}
          </p>
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password<span className="asterisk">*</span>
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
          <p
            className={`signup-span ${
              isPasswordValid ? "singup-success" : "singup-wrong"
            }`}
          >
            {passwordValid}
          </p>
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password<span className="asterisk">*</span>
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
          <p
            className={`signup-span ${
              isConfirmPasswordValid ? "singup-success" : "singup-wrong"
            }`}
          >
            {confirmPassswordValid}
          </p>
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
