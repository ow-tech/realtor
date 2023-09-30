import React from "react";
import OTPAuthForm from "../OTPAuthForm";
import { Box, Typography,FormHelperText, Stack } from "@mui/material";
import ListingCardIcon from "../../../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function MobileOTPValidation({
  mobileOTPValue,
  handleMobileOTPSubmit,
  setMobileOTPValue,
  formErrors,
  handleResend,
  isSmsVerified,
  phoneNumber,callingCode
}) {
  const handleMobileOTPChange = (value) => {
    setMobileOTPValue(value);
  };

  return (
    <>
      <Box className="emailOtpHeaderWrapper">
        <Typography variant="DubaiRegular18">
        Mobile OTP was sent to {`+${callingCode+phoneNumber}` }. Please input the OTP below:
        </Typography>
      </Box>
      <OTPAuthForm
        otp={mobileOTPValue}
        onOTPChange={handleMobileOTPChange}
        onSubmitFunc={handleMobileOTPSubmit}
        counterDuration={120}
        onResend={handleResend}
        isVerified={isSmsVerified}
        errorComponent={
          
          <>
            {(formErrors.mobileOTPValueError ||formErrors.mobileOTPInvalidError) &&
              !formErrors.mobileOTPExpiryError && (
                <Stack direction="row" spacing={4} justifyContent="center" >
                  <ListingCardIcon shape="exclamationError" />
                  <FormHelperText error>OTP is invalid</FormHelperText>
                  </Stack>
              )}
            {!formErrors.mobileOTPValueError && !formErrors.mobileOTPInvalidError &&
              formErrors.mobileOTPExpiryError && (
                <Stack direction="row" spacing={4} justifyContent="center" >
                  <ListingCardIcon shape="exclamationError" />
                  <FormHelperText error>
                    OTP is expired. Please click the resend link to get a new
                    OTP.
                  </FormHelperText>
                </Stack>
              )}
          </>
        }
      />
    </>
  );
}

export default MobileOTPValidation;
