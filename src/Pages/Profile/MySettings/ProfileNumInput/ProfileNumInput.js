import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Box, Dialog, DialogContent, Button } from "@mui/material";

import CountryCallingCode from "../../../AuthPages/Register/CountryCallingCode/CountryCallingCode";
import InputWithChangeBtn from "../../../../Components/InputWithChangeBtn/InputWithChangeBtn";
import {
  separateNumber,
  validateMobileNumber,
} from "../../../../utils/utility";
import CustomButton from "../../../../Components/Button/CustomButton";
import { getMobileOtp, validateSmsOtp } from "../../../../network/apiServices";
import MobileOTPValidation from "../../../AuthPages/Register/OTPAuth/OTPAuthForm/MobileOTPValidation/MobileOTPValidation";

const ProfileNumInput = ({
  mobile,
  setMobile,
  verifyBtnCheck,
  setVerifyBtnCheck,
}) => {
  const [callingCode, setCallingCode] = useState("971");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oldphoneNumber, setOldPhoneNumber] = useState("");

  const [enabled, setEnabled] = useState(false);
  const [validMobileNumber, setValidMobileNumber] = useState();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSmsVerified, setIsSmsVerified] = useState(false);
  const [mobileOTPValue, setMobileOTPValue] = useState([]);
  const [formErrors, setFormErrors] = useState({
    mobileOTPValueError: null,
    mobileOTPExpiryError: null,
    mobileOTPInvalidError: null,
    mobileNumberError: false,
  });

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

  const handleVerifyButtonClick = () => {
    setIsPopupVisible(true);
    getMobileOtp({
      phoneNumber: callingCode + phoneNumber,
    });
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    const fields = {
      mobileNumber: { value: value, validationFn: validateMobileNumber },
    };

    const errors = {
      ...formErrors,
      mobileNumberError: validateForm(fields).mobileNumberError,
    };

    setFormErrors(errors);
  };

  useEffect(() => {
    const separatedNum = separateNumber(mobile);
    setCallingCode(separatedNum[0]);
    setPhoneNumber(separatedNum[1]);
    setOldPhoneNumber(separatedNum[0] + separatedNum[1]);
  }, [mobile]);

  const validateOTP = (otp) => {
    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: null,
      mobileOTPExpiryError: null,
      mobileOTPInvalidError: null,
    }));
    if (otp.some((value) => !value)) {
      return false;
    }

    const regex = /^[0-9]*$/;
    if (otp.some((value) => !regex.test(value))) {
      return false;
    }
    return true;
  };

  const smsOTPString = mobileOTPValue.join("");
  let isSmsVerifiedVar = false;

  const verificationOfOTP = async () => {
    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: null,
      mobileOTPExpiryError: null,
      mobileOTPInvalidError: null,
      mobileNumberError: false,
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
              mobileNumberError: false,
            }));
            setIsPopupVisible(false);
            setEnabled(false);
            setOldPhoneNumber(phoneNumber);
            setMobile(callingCode + phoneNumber);
            break;
          case "EXPIRED":
            setFormErrors((prevState) => ({
              ...prevState,
              mobileOTPExpiryError: true,
              mobileOTPInvalidError: null,
              mobileNumberError: false,
            }));
            // console.log("SMS expired");
            break;
          case "INVALID":
            setFormErrors((prevState) => ({
              ...prevState,
              mobileOTPInvalidError: true,
              mobileOTPExpiryError: null,
              mobileNumberError: false,
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

    if (isSmsVerifiedVar || isSmsVerified) {
      setFormErrors((prevState) => ({
        ...prevState,
        mobileOTPValueError: null,
        mobileOTPExpiryError: null,
        mobileOTPInvalidError: null,
      }));
    }
  };

  const handleOTPSubmit = async () => {
    const isMobileOTPValid = validateOTP(mobileOTPValue);

    setFormErrors((prevState) => ({
      ...prevState,
      mobileOTPValueError: !isMobileOTPValid,
    }));

    if (isMobileOTPValid) {
      setFormErrors((prevState) => ({
        ...prevState,
        mobileOTPValueError: null,
      }));
      verificationOfOTP();
    }
  };

  useEffect(() => {
    setVerifyBtnCheck(
      !enabled ||
        formErrors.mobileNumberError ||
        phoneNumber === "" ||
        callingCode + phoneNumber === oldphoneNumber
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    mobile,
    phoneNumber,
    enabled,
    oldphoneNumber,
    formErrors.mobileNumberError,
  ]);

  const handleEnableChange = (value) => {
    setEnabled(value);
  };

  return (
    <>
      <Grid container className="ProfileNumInputComp">
        <Grid item xs={4.6} sm={2.1} md={1.8} lg={2.7}>
          <CountryCallingCode
            setCallingCode={setCallingCode}
            callingCode={callingCode}
            setValidMobileNumber={setValidMobileNumber}
            validMobileNumber={validMobileNumber}
            minWidth={120}
            height={40}
            customCLass="profileCountryCode"
            enable={!enabled}
          />
        </Grid>
        <Grid item xs={7.4} sm={7.4} md={7.3} lg={6.3}>
          <InputWithChangeBtn
            initialValue={phoneNumber}
            onValueChange={handlePhoneNumber}
            type={"number"}
            enabled={enabled}
            setEnabled={handleEnableChange}
            customCLass={"profileMobInput"}
          />
        </Grid>
        <Grid item xs={12} sm={2.5} md={2.9} lg={3}>
          <div className="profileVerifyBtnSpacer"></div>
          <CustomButton
            text={verifyBtnCheck ? "Verified" : "Verify"}
            customClassName={`profileMobVerifyBtn ${
              verifyBtnCheck ? "profileVerifyBtnDisabled" : ""
            }`}
            onClick={handleVerifyButtonClick}
            isDisabled={verifyBtnCheck}
          />
        </Grid>
      </Grid>

      <Dialog open={isPopupVisible}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pl={3}
          pt={2}
        >
          <Typography variant="DubaiRegular24Bold">
            Verify Mobile Number
          </Typography>

          <Button onClick={handleClosePopup}>
            <Typography variant="DubaiRegular24Bold" color={"red"}>
              x
            </Typography>
          </Button>
        </Box>
        <DialogContent>
          <MobileOTPValidation
            handleMobileOTPSubmit={handleOTPSubmit}
            mobileOTPValue={mobileOTPValue}
            setMobileOTPValue={setMobileOTPValue}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            handleResend={() => {
              getMobileOtp({ phoneNumber: callingCode + phoneNumber });
            }}
            callingCode={callingCode}
            phoneNumber={phoneNumber}
            customClass="profileNumInputOTP"
          />
          <Box mt={2} />
          <CustomButton
            text="Verify"
            customClassName="profileMobVerifyBtn"
            onClick={handleOTPSubmit}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileNumInput;
