import React, { useState } from "react";
import { Grid } from "@mui/material";
import { isEqual } from "lodash";
import ResetPassword from "./Reset/ResetPassword";
import ResetPasswordOtpVerification from "./ResetPasswordOtpVerification/ResetPasswordOtpVerification";
import CreateNewPassword from "./CreateNewPassword/CreateNewPassword";
import PasswordUpdated from "./PasswordUpdated/PasswordUpdated";

function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");

  const maxStep = 4;

  const advanceCurrentStep = () => {
    setCurrentStep((prevStep) => (prevStep < maxStep ? prevStep + 1 : 1));
  };

  return (
    <Grid className="authComponentsWrapper " container justifyContent={"center"} alignItems={"center"}>
      {isEqual(currentStep, 1) && <ResetPassword sendEmailUp={setEmail} advanceCurrentStep={advanceCurrentStep} />}
      {isEqual(currentStep, 2) && <ResetPasswordOtpVerification email={email} advanceCurrentStep={advanceCurrentStep} />}

      {isEqual(currentStep, 3) && <CreateNewPassword email={email} advanceCurrentStep={advanceCurrentStep} />}
      {isEqual(currentStep, 4) && <PasswordUpdated head={"Password updated"} description={"Now you can login to your account with your new password."} />}
    </Grid>
  );
}
export default ForgotPassword;
