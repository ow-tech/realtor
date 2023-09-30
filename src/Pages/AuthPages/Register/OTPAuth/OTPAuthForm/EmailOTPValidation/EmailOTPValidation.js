import React from "react";
import OTPAuthForm from "../OTPAuthForm";
import { Typography, Box, FormHelperText, Stack, Grid } from "@mui/material";

import ListingCardIcon from "../../../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function EmailOTPValidation({ setEmailOTPValue, handleEmailOTPSubmit, emailOTPValue, formErrors, handleResend, isEmailVerified, email, setFormErrors }) {
  const handleEmailOTPChange = (value) => {
    setEmailOTPValue(value);
  };

  return (
    <Grid>
      <Box className="emailOtpHeaderWrapper">
        <Typography variant="DubaiRegular18">Email OTP was sent {`${email}`}. Please input the OTP below:</Typography>
      </Box>
      <OTPAuthForm
        otp={emailOTPValue}
        onOTPChange={handleEmailOTPChange}
        onSubmitFunc={handleEmailOTPSubmit}
        counterDuration={599}
        onResend={handleResend}
        formErrors={formErrors}
        isVerified={isEmailVerified}
        setFormErrors={setFormErrors}
        errorComponent={
          <>
            {(formErrors.emailOTPValueError || formErrors.emailOTPInvalidError) && !formErrors.emailOTPExpiryError && (
              <Stack direction="row" spacing={1} justifyContent="center" className="OTPAuthEmailError">
                <ListingCardIcon shape="exclamationError" />
                <FormHelperText error>OTP is invalid.</FormHelperText>
              </Stack>
            )}
            {!formErrors.emailOTPValueError && !formErrors.emailOTPInvalidError && formErrors.emailOTPExpiryError && (
              <Stack direction="row" spacing={1} justifyContent="center" className="OTPAuthEmailError">
                <ListingCardIcon shape="exclamationError" />
                <FormHelperText error>OTP is expired. Please click the resend link to get a new OTP.</FormHelperText>
              </Stack>
            )}
          </>
        }
      />
    </Grid>
  );
}

export default EmailOTPValidation;
