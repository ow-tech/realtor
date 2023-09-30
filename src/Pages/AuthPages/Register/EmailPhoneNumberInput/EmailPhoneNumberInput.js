import React, { useState } from "react";
import { Typography, TextField, Stack, FormHelperText,useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import CountryCallingCode from "../CountryCallingCode/CountryCallingCode";
import LoadingSkeleton from "../../../../Components/LoadingSkeleton/LoadingSkeleton";
import {isExtraSmallScreens } from "../../../../Constants/ConstantValues";

function EmailPhoneNumberInput({
  formErrors,
  handleInputChange,
  handleSubmitPhoneAndEmail,

  ButtonRightArrow,
  callingCode,
  setCallingCode,
  loading,
}) {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    false, // Hover state for button at index 0
    false, // Hover state for button at index 1
  ]);
  const [validMobileNumber, setValidMobileNumber] = useState("555555555");
  const isExtraSmallScreen = useMediaQuery(isExtraSmallScreens);
  const handleInputKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /[0-9]/;

    if (!regex.test(keyValue)) {
      event.preventDefault();
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
    <form onSubmit={handleSubmitPhoneAndEmail} width="25%" className="authForm">
      <Stack  spacing={isExtraSmallScreen?5 :3}>
        {loading ? (
          <LoadingSkeleton
            customClass={"loaderWrapperBlackBackground"}
            customClassLoader={"loaderForBlackBackground"}
          />
        ) : (
          <>
            <Stack direction="row" spacing={isExtraSmallScreen?2 :2} justifyContent="center" >
              <CountryCallingCode
                setCallingCode={setCallingCode}
                callingCode={callingCode}
                setValidMobileNumber={setValidMobileNumber}
              />

              <TextField
                placeholder="Mobile Number"
                id="mobileNumber"
                name="mobileNumber"
                fullWidth
                size="small"
                onChange={handleInputChange}
                type="tel"
                InputProps={{
                  inputMode: "numeric",
                }}
                onKeyPress={handleInputKeyPress}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-start"
              className=" mobileFormError"
         
            >
              {formErrors.mobileNumberError && (
                <>
                  <ListingCardIcon shape="exclamationError" />
                  <FormHelperText error>
                    Please input a valid mobile Number. eg {validMobileNumber}
                    {/* {()=>validNumber(CallingCountryCodes, callingCode)} */}
                  </FormHelperText>
                </>
              )}
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="center">
              <TextField
                placeholder="Email"
                id="email"
                name="email"
                fullWidth
                size="small"
                onChange={handleInputChange}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-start"
              className=" EmailFormError"
            >
              {formErrors.emailError && (
                <>
                  <ListingCardIcon shape="exclamationError" />
                  <FormHelperText error>
                    Please input a valid email.
                  </FormHelperText>
                </>
              )}
              {formErrors.existingEmailError && !formErrors.emailError && (
                <>
                  <ListingCardIcon shape="exclamationError" />
                  <FormHelperText error>
                    Email is already registered.
                  </FormHelperText>
                </>
              )}
            </Stack>
            <Stack
              direction="column"
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <CustomButton
                text="Continue"
                type="submit"
                rightIcon={<ButtonRightArrow />}
                dark={exclusivesButtonHovered[0]}
                variant="outlined"
                customClassName="signInButton"
                onMouseEnter={() => handleMouseEvent(0)}
                onMouseLeave={() => handleMouseEvent(0)}
              />

              <div className="registerAndloginDivMargin">
                <Typography variant="DubaiRegular18">
                  Already have an account?{" "}
                </Typography>

                <Link className="loginLinkLight" to="/login">
                  <Typography variant="DubaiRegular18"> Login</Typography>
                </Link>
              </div>
            </Stack>
          </>
        )}
      </Stack>
    </form>
  );
}

export default EmailPhoneNumberInput;
