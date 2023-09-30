import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import EmailOTPValidation from "../OTPAuth/OTPAuthForm/EmailOTPValidation/EmailOTPValidation";
import {
  validateEmailOtp,
  resetUserPassword,
} from "../../../../network/apiServices";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";
import { isEqual } from "lodash";

function ResetPasswordOtpVerification({ email, advanceCurrentStep }) {
  const [emailOTPValue, setEmailOTPValue] = useState(Array(6).fill(null));
  const [formErrors, setFormErrors] = useState({
    emailOTPValueError: null,
    emailOTPExpiryError: null,
    emailOTPInvalidError: null,
  });
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const emailOTPstring = emailOTPValue.join("");
  let isEmailVerifiedVar = false;

  const validateOTP = (otp) => {
    // Check if any field is empty
    if (otp.some((value) => !value)) {
      return false;
    }

    // Check if any field contains a character that is not from 0-9
    const regex = /^[0-9]*$/;
    if (otp.some((value) => !regex.test(value))) {
      return false;
    }

    // All checks passed, OTP is valid
    return true;
  };

  const verificationOfOTP = async () => {
    if (!isEmailVerified) {
      try {
        const emailOtpValidationData = await validateEmailOtp({
          email: email,
          otp: emailOTPstring,
        });

        switch (emailOtpValidationData.data.status) {
          case "VERIFIED":
            setIsEmailVerified(true);
            isEmailVerifiedVar = true;
            setFormErrors((prevState) => ({
              emailOTPValueError: null,
              emailOTPExpiryError: null,
              emailOTPInvalidError: null,
            }));
            break;
          case "EXPIRED":
            setFormErrors((prevState) => ({
              emailOTPValueError: null,

              emailOTPInvalidError: null,
              emailOTPExpiryError: true,
            }));
            break;
          case "INVALID":
            setFormErrors((prevState) => ({
              emailOTPValueError: null,
              emailOTPExpiryError: null,
              emailOTPInvalidError: true,
            }));
            break;
          default:
            // Handle default case if necessary
            break;
        }
      } catch (error) {
        // console.error("Error occurred during email OTP validation:", error); //toast
      }
    }

    if (isEmailVerifiedVar || isEmailVerified) {
      setFormErrors((prevState) => ({
        emailOTPValueError: null,
        emailOTPExpiryError: null,
        emailOTPInvalidError: null,
      }));
      //toast
      advanceCurrentStep();
    }
  };

  const handleOTPSubmit = async () => {
    const isEmailOTPValid = validateOTP(emailOTPValue);
    setFormErrors((prevState) => ({
      emailOTPExpiryError: null,
      emailOTPInvalidError: null,
      emailOTPValueError: !isEmailOTPValid,
    }));

    if (isEmailOTPValid) {
      setFormErrors((prevState) => ({
        emailOTPExpiryError: null,
        emailOTPInvalidError: null,
        emailOTPValueError: null,
      }));
      verificationOfOTP();
    }
  };

  return (
    <Grid item>
      <Grid
        className=" authComponentsWrapper"
        container
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          container
          rowSpacing={2}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Grid item>
            <Typography
              className="loginTypographyLight"
              variant="GothamBlack18"
            >
              Reset password
            </Typography>
          </Grid>

          <Grid className="authForm" item>
            <EmailOTPValidation
              handleEmailOTPSubmit={handleOTPSubmit}
              emailOTPValue={emailOTPValue}
              setEmailOTPValue={setEmailOTPValue}
              formErrors={formErrors}
              handleResend={() => {
                resetUserPassword({ email: email })
                  .then((data) => {
                    if (!isEqual(data.data.status, "DELIVERED")) {
                      //toast error
                    }
                  })
                  .catch((error) => {
                    console.log("Error: ", error); //toast
                  });
              }}
              isEmailVerified={isEmailVerified}
              email={email}
              customHeading={`We have sent an email to ${email} with instructions to reset your password. Kindly check your inbox and input the OTP below:`}
            />
          </Grid>
          <Grid container item justifyContent={"center"}>
            <Grid item xs={12}>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Continue "}
                rightIcon={<ButtonRightArrow />}
                fullWidth={true}
                onClick={handleOTPSubmit}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              className="loginTypographyLight"
              variant="DubaiRegular18"
            >
              Already have an account?{" "}
              <Link className="loginLinkLight" to="/login">
                <Typography
                  className="loginTypographyLight"
                  variant="DubaiRegular18"
                >
                  Login
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ResetPasswordOtpVerification;
