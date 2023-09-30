import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { validateMobileNumber, validateEmail } from "../../../utils/utility";
import NameForm from "./NameForm/NameForm";
import EmailPhoneNumberInput from "./EmailPhoneNumberInput/EmailPhoneNumberInput";
import OTPAuth from "./OTPAuth/OTPAuth";
import CreatePassword from "./CreatePassWord/CreatePassWord";
import { getEmailOtp, getMobileOtp } from "../../../network/apiServices";
import ErrorBoundaryFallBack from "../../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import PasswordUpdated from "../ForgotPassword/PasswordUpdated/PasswordUpdated";

function Register() {
  const [exclusivesButtonHovered] = useState([false]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({
    fnameError: false,
    lnameError: false,
    mobileNumberError: false,
    emailError: false,
    existingEmailError: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [callingCode, setCallingCode] = useState("971");
  const [emailOTPValue, setEmailOTPValue] = useState(Array(6).fill(null));
  const [mobileOTPValue, setMobileOTPValue] = useState(Array(6).fill(null));
  const [isSmsVerified, setIsSmsVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const _ = require("lodash");
  const maxStep = 5;
  const signUpObject = {
    username: email,
    password: password,
    firstName: fname,
    lastName: lname,
    mobileNumber: callingCode + phoneNumber,
    userRole: "ADMIN",
    agencyName: "VALCOM",
    languageSpoken: ["English"],
    reportingTo: "Robert",
    description: "working as a frontend dev in the turgos technology",
    nationality: "",
    jobTitle: "Frontend Dev",
    applicationSource: "MANSEEL",
  };

  useEffect(() => {}, [currentStep, loading]);

  const validateForm = (fields) => {
    const errors = {};

    Object.keys(fields).forEach((fieldName) => {
      const { value, validationFn } = fields[fieldName];

      if (validationFn && !validationFn(value, callingCode)) {
        errors[`${fieldName}Error`] = true;
      } else if (fields[fieldName].required && value === "") {
        errors[`${fieldName}Error`] = true;
      }
    });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }

    return errors;
  };

  const handleSubmitRegisterNames = (event) => {
    event.preventDefault();

    const fields = {
      fname: { value: fname, required: true },
      lname: { value: lname, required: true },
    };

    const formErrors = validateForm(fields);
    if (!formErrors.fnameError && !formErrors.lnameError) {
      setCurrentStep((prevStep) => (prevStep < maxStep ? prevStep + 1 : 1));
    }
  };
  let isStepIncremented = false; // Flag to track if step has already been incremented

  const handleSubmitPhoneAndEmail = async (event) => {
    event.preventDefault();

    const fields = {
      email: { value: email, validationFn: validateEmail },
      mobileNumber: { value: phoneNumber, validationFn: validateMobileNumber },
    };

    const formErrors = validateForm(fields);

    if (
      !formErrors.emailError &&
      !formErrors.existingEmailError &&
      !formErrors.mobileNumberError
    ) {
      const phoneNumberWithCallingCode = callingCode + phoneNumber;
      const emailPayLoad = {
        email: email,
      };
      const smsPayLoad = {
        phoneNumber: phoneNumberWithCallingCode,
      };

      try {
        setLoading(true);
        const emailGetOTPResponse = await getEmailOtp(emailPayLoad);

        switch (emailGetOTPResponse.data.message) {
          case "user already exists please try a new username/email":
            setLoading(false);
            setFormErrors((prevState) => ({
              ...prevState,
              existingEmailError: true,
            }));
            break;
          default:
            getMobileOtp(smsPayLoad);
            if (!isStepIncremented && currentStep < maxStep) {
              isStepIncremented = true;
              setCurrentStep(currentStep + 1);
            } else {
              return currentStep;
            }

            break;
        }
      } catch (error) {
        return (
          <ErrorBoundary
            FallbackComponent={() => ErrorBoundaryFallBack(error)}
          ></ErrorBoundary>
        );
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormErrors({
      fnameError: false,
      lnameError: false,
      emailError: false,
      mobileNumberError: false,
    });

    switch (name) {
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "email":
        setEmail(value.toLowerCase());
        break;
      case "mobileNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box className="authComponentsWrapper">
      {(_.isEqual(currentStep, 1) ||
        _.isEqual(currentStep, 2) ||
        _.isEqual(currentStep, 3) ||
        _.isEqual(currentStep, 4)) && (
        <Typography variant="GothamBlack18" className="createAccountTypography">
          Create your account
        </Typography>
      )}
      <Box>
        {_.isEqual(currentStep, 1) && (
          <NameForm
            {...{
              fname,
              lname,
              formErrors,
              handleInputChange,
              handleSubmitRegisterNames,
              exclusivesButtonHovered,
              ButtonRightArrow,
            }}
          />
        )}
        {/* next COmponent */}
        {_.isEqual(currentStep, 2) && (
          <EmailPhoneNumberInput
            {...{
              formErrors,
              handleInputChange,
              handleSubmitPhoneAndEmail,
              exclusivesButtonHovered,
              ButtonRightArrow,
              callingCode,
              setCallingCode,
              loading,
            }}
          />
        )}

        {_.isEqual(currentStep, 3) && (
          <OTPAuth
            {...{
              formErrors,
              handleInputChange,
              handleSubmitPhoneAndEmail,
              exclusivesButtonHovered,
              ButtonRightArrow,
              callingCode,
              setCallingCode,
              email,
              phoneNumber,
              emailOTPValue,
              setEmailOTPValue,
              mobileOTPValue,
              setMobileOTPValue,
              setCurrentStep,
              maxStep,
              isSmsVerified,
              setIsSmsVerified,
              isEmailVerified,
              setIsEmailVerified,
            }}
          />
        )}
        {_.isEqual(currentStep, 4) && (
          <CreatePassword
            {...{
              exclusivesButtonHovered,
              password,
              setPassword,
              signUpObject,
              setCurrentStep,
              currentStep,
              maxStep,
            }}
          />
        )}
        {_.isEqual(currentStep, 5) && (
          <PasswordUpdated
            {...{
              exclusivesButtonHovered,
              password,
              setPassword,
              signUpObject,
              setCurrentStep,
              currentStep,
              description: "Please login into your account",
              head: "Account created",
              showAccountCreated: false,
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default Register;
