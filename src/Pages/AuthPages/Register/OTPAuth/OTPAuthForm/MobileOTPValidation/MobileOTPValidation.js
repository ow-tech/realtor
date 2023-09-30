import React from "react";
import OTPAuthForm from "../OTPAuthForm";
import { Box, Typography, FormHelperText, Stack, Grid } from "@mui/material";
import ListingCardIcon from "../../../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function MobileOTPValidation({ mobileOTPValue, handleMobileOTPSubmit, setMobileOTPValue, formErrors, handleResend, isSmsVerified, phoneNumber, callingCode, setFormErrors, customClass = "" }) {
  const handleMobileOTPChange = (value) => {
    setMobileOTPValue(value);
  };

  return (
    <Grid>
      <Box className="emailOtpHeaderWrapper">
        <Typography variant="DubaiRegular18">Mobile OTP was sent to {`+${callingCode + phoneNumber}`}. Please input the OTP below:</Typography>
      </Box>
      <OTPAuthForm
        otp={mobileOTPValue}
        onOTPChange={handleMobileOTPChange}
        onSubmitFunc={handleMobileOTPSubmit}
        counterDuration={299}
        onResend={handleResend}
        isVerified={isSmsVerified}
        setFormErrors={setFormErrors}
        errorComponent={
          <>
            {(formErrors.mobileOTPValueError || formErrors.mobileOTPInvalidError) && !formErrors.mobileOTPExpiryError && (
              <Stack direction="row" spacing={1} justifyContent="center" className="OTPAuthMobileError">
                <ListingCardIcon shape="exclamationError" />
                <FormHelperText error>OTP is invalid.</FormHelperText>
              </Stack>
            )}
            {!formErrors.mobileOTPValueError && !formErrors.mobileOTPInvalidError && formErrors.mobileOTPExpiryError && (
              <Stack direction="row" spacing={1} justifyContent="center" className="OTPAuthMobileError">
                <ListingCardIcon shape="exclamationError" />
                <FormHelperText error>OTP is expired. Please click the resend link to get a new OTP.</FormHelperText>
              </Stack>
            )}
          </>
        }
        customClass={customClass}
      />
    </Grid>
  );
}

export default MobileOTPValidation;
