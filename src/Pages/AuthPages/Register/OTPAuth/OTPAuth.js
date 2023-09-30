import React, { useState } from "react";
import EmailOTPValidation from "./OTPAuthForm/EmailOTPValidation/EmailOTPValidation";
import MobileOTPValidation from "./OTPAuthForm/MobileOTPValidation/MobileOTPValidation";
import { Typography, Box, Stack, Divider, Grid } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";

import {
  validateSmsOtp,
  validateEmailOtp,
  getMobileOtp,
  getEmailOtp,
} from "../../../../network/apiServices";

function OTPAuth({
  emailOTPValue,
  setEmailOTPValue,
  mobileOTPValue,
  setMobileOTPValue,
  callingCode,
  phoneNumber,
  email,
  setCurrentStep,
  maxStep,
  isSmsVerified,
  setIsSmsVerified,
  isEmailVerified,
  setIsEmailVerified,
}) {
  const [formErrors, setFormErrors] = useState({
    mobileOTPValueError: null,
    mobileOTPExpiryError: null,
    mobileOTPInvalidError: null,
    emailOTPValueError: null,
    emailOTPExpiryError: null,
    emailOTPInvalidError: null,
  });
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    false, // Hover state for button at index 0
    false, // Hover state for button at index 1
  ]);

  const validateOTP = (otp) => {
    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: null,
      mobileOTPExpiryError: null,
      mobileOTPInvalidError: null,
      emailOTPValueError: null,
      emailOTPExpiryError: null,
      emailOTPInvalidError: null,
    }));
    // Check if any field is empty
    if (otp.some((value) => !value)) {
      return false;
    }

    // Check if any field contains a character that is not from 0-9
    const regex = /^[0-9]*$/;
    if (otp.some((value) => !regex.test(value))) {
      return false;
    }
    // console.log("valideteOtp errors", formErrors);
    // All checks passed, OTP is valid
    return true;
  };
  const smsOTPString = mobileOTPValue.join("");
  const emailOTPstring = emailOTPValue.join("");
  let isSmsVerifiedVar = false;
  let isEmailVerifiedVar = false;
  const verificationOfOTP = async () => {
    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: null,
      mobileOTPExpiryError: null,
      mobileOTPInvalidError: null,
      emailOTPValueError: null,
      emailOTPExpiryError: null,
      emailOTPInvalidError: null,
    }));
    if (!isSmsVerified) {
      try {
        const smsValidationData = await validateSmsOtp({
          phoneNumber: callingCode + phoneNumber,
          otp: smsOTPString,
        });

        switch (smsValidationData.data.status) {
          case "VERIFIED":
            setIsSmsVerified(true);
            isSmsVerifiedVar = true;
            setFormErrors((prevState) => ({
              ...prevState,
              mobileOTPValueError: null,
              mobileOTPExpiryError: null,
              mobileOTPInvalidError: null,
            }));
            // console.log("SMS verified");
            break;
          case "EXPIRED":
            setFormErrors((prevState) => ({
              ...prevState,
              mobileOTPExpiryError: true,
              mobileOTPInvalidError: null,
            }));
            // console.log("SMS expired");
            break;
          case "INVALID":
            setFormErrors((prevState) => ({
              ...prevState,
              mobileOTPInvalidError: true,
              mobileOTPExpiryError: null,
            }));
            // console.log("SMS invalid");
            break;
          default:
            // Handle default case if necessary
            break;
        }
      } catch (error) {
        // console.error("Error occurred during SMS OTP validation:", error);
      }
    }

    if (!isEmailVerified) {
      try {
        const emailOtpValidationData = await validateEmailOtp({
          email: email,
          otp: emailOTPstring,
        });
        // console.log("am checking status and checking try for email");
        switch (emailOtpValidationData.data.status) {
          case "VERIFIED":
            setIsEmailVerified(true);
            isEmailVerifiedVar = true;
            // console.log("Email verified");
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPValueError: null,
              emailOTPExpiryError: null,
              emailOTPInvalidError: null,
            }));
            break;
          case "EXPIRED":
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPExpiryError: true,
              emailOTPInvalidError: null,
              emailOTPValueError: null,
            }));
            // console.log("Email expired");
            break;
          case "INVALID":
            setFormErrors((prevState) => ({
              ...prevState,
              emailOTPInvalidError: true,
              emailOTPExpiryError: null,
            }));
          
            break;
          default:
            // Handle default case if necessary
            break;
        }
      } catch (error) {
    
      }
    }


    if (
      (isSmsVerifiedVar || isSmsVerified) &&
      (isEmailVerifiedVar || isEmailVerified)
    ) {
     
      setFormErrors((prevState) => ({
        ...prevState,
        mobileOTPValueError: null,
        mobileOTPExpiryError: null,
        mobileOTPInvalidError: null,
        emailOTPValueError: null,
        emailOTPExpiryError: null,
        emailOTPInvalidError: null,
      }));
      setCurrentStep((prevStep) => (prevStep < maxStep - 1 ? prevStep + 1 : 4));

      // console.log("Either SMS or Email verified");
    }
  };

  const handleOTPSubmit = async () => {
    const isMobileOTPValid = validateOTP(mobileOTPValue);
    const isEmailOTPValid = validateOTP(emailOTPValue);

    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: !isMobileOTPValid,
      emailOTPValueError: !isEmailOTPValid,
    }));

    if (isMobileOTPValid) {
      setFormErrors((prevState) => ({
        ...prevState,
        mobileOTPValueError: null,
      }));
      // console.log('otp form values error',formErrors)
      verificationOfOTP();
    }
    if (isEmailOTPValid) {
      setFormErrors((prevState) => ({
        ...prevState,

        emailOTPValueError: null,
      }));
   
      verificationOfOTP();
    }
  
  };

  const handleMouseEvent = (index) => {
    setExclusivesButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid className="emailOtpHeaderWrapper">
        <Typography variant="DubaiRegular18">
          We have sent you the OTP to your mobile number and email address.
        </Typography>
      </Grid>
      <Grid className="emailOtpHeaderWrapper">
        <Typography variant="DubaiRegular18">
          Kindly check your inbox.
        </Typography>
      </Grid>
      <Stack
        className="authForm"
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <MobileOTPValidation
          handleMobileOTPSubmit={handleOTPSubmit}
          mobileOTPValue={mobileOTPValue}
          setMobileOTPValue={setMobileOTPValue}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleResend={() => {
            getMobileOtp({ phoneNumber: callingCode + phoneNumber });
          }}
          isSmsVerified={isSmsVerified}
          callingCode={callingCode}
          phoneNumber={phoneNumber}
        />
        <Box className="authDividerWrapper">
          <Divider flexItem className="whiteDividerWithWidth" />
        </Box>

        <EmailOTPValidation
          handleEmailOTPSubmit={handleOTPSubmit}
          emailOTPValue={emailOTPValue}
          setEmailOTPValue={setEmailOTPValue}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleResend={() => {
            getEmailOtp({ email: email });
          }}
          isEmailVerified={isEmailVerified}
          email={email}
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <CustomButton
              text="Continue"
              type="submit"
              rightIcon={<ButtonRightArrow />}
              dark={exclusivesButtonHovered[0]}
              variant="outlined"
              customClassName="signInButton"
              onClick={handleOTPSubmit}
              onMouseEnter={() => handleMouseEvent(0)}
              onMouseLeave={() => handleMouseEvent(0)}
            />
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
}

export default OTPAuth;
