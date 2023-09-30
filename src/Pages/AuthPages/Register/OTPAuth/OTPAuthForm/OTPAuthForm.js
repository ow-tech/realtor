import React, { useState, useRef, useEffect } from "react";
import { TextField, Stack, FormControl, Box, Grid } from "@mui/material";
import CountDownTimer from "../../../CountDownTimer/CountDownTimer";

function OTPAuthForm({ onSubmitFunc, length = 6, onOTPChange, counterDuration, errorComponent, onResend, isVerified, setFormErrors, customClass }) {
  const [otp, setOTP] = useState(Array(length).fill(""));
  const inputRefs = useRef(Array(length).fill(null));
  const _ = require("lodash");

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (event, index) => {
    setFormErrors({
      mobileOTPValueError: null,
      mobileOTPExpiryError: null,
      mobileOTPInvalidError: null,
      emailOTPValueError: null,
      emailOTPExpiryError: null,
      emailOTPInvalidError: null,
    });
    const { value } = event.target;
    const updatedOTP = [...otp];
    updatedOTP[index] = value.slice(0, 1);
    setOTP(updatedOTP);

    if (value.length > 0 && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    onOTPChange(updatedOTP);
  };

  const handleKeyDown = (event, index) => {
    if (_.isEqual(event.key, "Backspace") && _.isEqual(otp[index], "") && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleInputKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /[0-9]/;

    if (!regex.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <Box className={`authFormWrapper ${customClass}`}>
      <form onSubmit={onSubmitFunc} className=" OTPStackForm">
        <FormControl className="OTPStackTextFieldWrapper">
          <Grid container spacing={1} justifyContent="center">
            {otp.map((value, index) => (
              <Grid item xs={2}>
                <TextField
                  disabled={isVerified}
                  key={index}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  onKeyPress={handleInputKeyPress}
                  placeholder="-"
                  id={`otp-${index}`}
                  name={`otp-${index}`}
                  fullWidth
                  size="medium"
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                  inputRef={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  InputProps={{
                    classes: {
                      input: "centered-placeholder",
                    },
                  }}
                  autoComplete="off"
                />
              </Grid>
            ))}
          </Grid>
        </FormControl>
      </form>
      <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
        {errorComponent && <Box className="errorComponentWrapper">{errorComponent}</Box>}
      </Stack>

      <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" mt={2}>
        <CountDownTimer duration={counterDuration} onResend={onResend} isVerified={isVerified} />
      </Stack>
    </Box>
  );
}

export default OTPAuthForm;
