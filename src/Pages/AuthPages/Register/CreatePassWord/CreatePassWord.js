import React, { useEffect, useState } from "react";
import {
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Grid,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { validatePassword } from "../../../../utils/utility";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";

import { isEqual } from "lodash";
import { signUp } from "../../../../network/apiServices";
import LoadingSkeleton from "../../../../Components/LoadingSkeleton/LoadingSkeleton";
// import SignIn from "../../SignIn/SignIn";

function CreatePassword({
  password,
  setPassword,
  signUpObject,
  setCurrentStep,
  maxStep,
}) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);
  const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    false,
    false, 
  ]);

  const [loading, setLoading] = useState(false)
  // const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    const validation = validatePassword(event.target.value);
    if (validation.isValid) {
      setPasswordError(false);
      setPasswordValidationErrors([]);
    } else {
      setPasswordError(true);
      setPasswordValidationErrors(validation.errors);
    }
    if (confirmPasswordError && isEqual(event.target.value, confirmPassword)) {
      setConfirmPasswordError(false);
    }
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (!isEqual(event.target.value, password) && !isEqual(password, "")) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordTouched(true);
  };
  const isSubmitDisabled =
    passwordError ||
    confirmPasswordError ||
    !isEqual(password, confirmPassword) ||
    isEqual(password, "") ||
    isEqual(confirmPassword, "");

  let isStepIncremented = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
   

    if (!passwordError && !confirmPasswordError) {
    
      setLoading(true)
      const signUpResponse = await signUp(signUpObject);
     
      if (!isStepIncremented) {
        switch (signUpResponse.data.status) {
          case "SUCCESS":
            isStepIncremented = true;
            setCurrentStep((prevStep) =>
              prevStep < maxStep ? prevStep + 1 : prevStep
            );
            break;
          default:
            return null;
        }

   
      }
    }
  };

  const handleMouseEvent = (index) => {
    setExclusivesButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };

  useEffect(()=>{},[loading])

  return (
    <Grid item>
      <Grid
        className="loginFormContainer"
        container
        maxWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <LoadingSkeleton
            customClass={"loaderWrapperBlackBackground"}
            customClassLoader={"loaderForBlackBackground"}
          />
        ) : (
        <form onSubmit={handleSubmit} className="authForm">
          <Grid
            container
            rowSpacing={1}
            direction={"column"}
            textAlign={"center"}
          >
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  className="loginTextInput"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="password-icon"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={password}
                  error={passwordError}
                  placeholder="Enter new password"
                  fullWidth
                  size="small"
                  onChange={handlePassword}
                  onBlur={handlePasswordBlur}
                />
              </FormControl>
            </Grid>
            {(isPasswordTouched || passwordError) &&
              (isEqual(password, "") ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">
                      Password should not be empty{" "}
                    </FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                ""
              ))}
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  className="loginTextInput"
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="password-icon"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={confirmPassword}
                  error={confirmPasswordError}
                  placeholder="Confirm password"
                  fullWidth
                  size="small"
                  onChange={handleConfirmPassword}
                  onBlur={handleConfirmPasswordBlur}
                />

                {(isConfirmPasswordTouched || confirmPasswordError) && (
                  <FormHelperText className="customHelperText">
                    {isEqual(confirmPassword, "") ? (
                      <Grid container spacing={1} alignItems={"center"}>
                        <Grid item>
                          <ListingCardIcon shape="exclamationError" />
                        </Grid>
                        <Grid item> Password should not be empty.</Grid>
                      </Grid>
                    ) : (
                      <>
                        {isEqual(confirmPassword, password) ? (
                          <Grid container spacing={1} alignItems={"center"}>
                            <Grid item xs={1}>
                              <ListingCardIcon shape="positiveTickGreen" />
                            </Grid>
                            <Grid item xs={10}>
                              <FormHelperText className="customHelperTextSuccess">
                                Passwords match.
                              </FormHelperText>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid container spacing={1} alignItems={"center"}>
                            <Grid item>
                              <ListingCardIcon shape="exclamationError" />
                            </Grid>
                            <Grid item>Passwords do not match.</Grid>
                          </Grid>
                        )}
                      </>
                    )}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item>
              <CustomButton
                text="Submit"
                type="submit"
                rightIcon={<ButtonRightArrow />}
                dark={exclusivesButtonHovered[0]}
                variant="outlined"
                customClassName="signInButton"
                isDisabled={isSubmitDisabled}
                onClick={handleSubmit}
                onMouseEnter={() => handleMouseEvent(0)}
                onMouseLeave={() => handleMouseEvent(0)}
              />
            </Grid>
            {(isPasswordTouched || passwordError) &&
              (!isEqual(password, "") ? (
                <Grid item>
                  {passwordValidationErrors.map((error, index) => (
                    <Grid
                      key={index}
                      container
                      columnSpacing={2}
                      alignItems={"start"}
                    >
                      <Grid item xs={1}>
                        <ListingCardIcon shape="exclamationError" />
                      </Grid>
                      <Grid item xs={10}>
                        <FormHelperText className="customHelperText">
                          {error}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                ""
              ))}
          </Grid>
        </form>
        )
              }
      </Grid>
    </Grid>
  );
}
export default CreatePassword;
