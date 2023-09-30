import React, { useState, useContext } from "react";
import {
  TextField,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Typography,
  Grid,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import CustomButton from "../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { objToBase64 } from "../../../utils/utility";
import { userLogin, getUserDetails } from "../../../network/apiServices";
import { isEqual } from "lodash";
import AppContext from "../../../context/AppContext";
import { errorToast, successToast } from "../../../utils/useToast";

function Login() {
  const context = useContext(AppContext);
  const { setUserObj } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [invalidEmailPassword, setInvalidEmailPassword] = useState(false);
  const [loginFailedMsg, setLoginFailedMsg] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailErrorVar = false;
    let passwordErrorVar = false;

    if (!isEmail(email)) {
      setEmailError(true);
      emailErrorVar = true;
    } else {
      setEmailError(false);
    }

    if (isEqual(password, "")) {
      setPasswordError(true);
      passwordErrorVar = true;
    }

    if (
      emailErrorVar ||
      passwordErrorVar ||
      isEqual(email, "") ||
      isEqual(password, "")
    ) {
      setInvalidEmailPassword(true);
    } else {
      let data = {
        username: email,
        password: password,
      };
      userLogin(data)
        .then((data) => {
          if (!isEqual(data.data.status, "SUCCESS")) {
            setLoginFailedMsg(data.data.message);
          } else {
            //update app reference
            localStorage.setItem(
              "reference_key",
              data.config.headers.APP_REFERENCE_KEY
            );
            localStorage.setItem(
              "app_reference",
              JSON.stringify(data.data.authToken)
            );
            successToast("Logged in successfully!");
            getUserDetails({ email })
              .then((res) => {
                
                localStorage.setItem(
                  "user_details",
                  objToBase64(res.data.userDetails)
                );

                setUserObj(res.data.userDetails);
              })
              .catch((err) => {
                errorToast(`Error: ${err}`);
              });
            //redirect
            navigate("/");
          }
        })
        .catch((error) => {});
    }
  };

  const handleEmail = (event) => {
    setEmailError(false);
    setInvalidEmailPassword(false);
    setEmail(event.target.value.toLowerCase());
  };

  const handlePassword = (event) => {
    setPasswordError(false);
    setInvalidEmailPassword(false);
    setPassword(event.target.value);
  };

  return (
    <Grid item>
      <Grid
        className="authComponentsWrapper"
        container
        item
        justifyContent={"center"}
        alignItems={"center"}
      >
        <form className="authForm" onSubmit={handleSubmit} noValidate>
          <Grid
            container
            rowSpacing={2}
            direction={"column"}
            textAlign={"center"}
          >
            <Grid item>
              <Typography
                className="loginTypographyLight"
                variant="GothamBlack18"
              >
                Welcome back
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="email"
                className="loginTextInput"
                placeholder="Email address"
                hiddenLabel
                type={"email"}
                value={email}
                error={emailError}
                size="small"
                fullWidth
                FormHelperTextProps={{ disabled: true }}
                onChange={handleEmail}
                autocomplete="off"
              />
            </Grid>
            {emailError &&
              (isEqual(email, "") ? (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">
                      Email address should not be empty
                    </FormHelperText>
                  </Grid>
                </Grid>
              ) : (
                <Grid container item columnSpacing={2} alignItems={"start"}>
                  <Grid item xs={1}>
                    <ListingCardIcon shape="exclamationError" />
                  </Grid>
                  <Grid item xs={10}>
                    <FormHelperText className="customHelperText">
                      Invalid email
                    </FormHelperText>
                  </Grid>
                </Grid>
              ))}
            <Grid item>
              <FormControl
                className="loginTextInput"
                variant="outlined"
                fullWidth
              >
                <OutlinedInput
                  className=" loginPasswordInput"
                  id={"password"}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className="password-icon"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  value={password}
                  placeholder="Password"
                  size="small"
                  fullWidth
                  onChange={handlePassword}
                />
              </FormControl>
            </Grid>
            {passwordError && isEqual(password, "") && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">
                    Password should not be empty
                  </FormHelperText>
                </Grid>
              </Grid>
            )}
            {invalidEmailPassword && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">
                    {"Invalid email or password"}
                  </FormHelperText>
                </Grid>
              </Grid>
            )}
            {loginFailedMsg && (
              <Grid container item columnSpacing={2} alignItems={"start"}>
                <Grid item xs={1}>
                  <ListingCardIcon shape="exclamationError" />
                </Grid>
                <Grid item xs={10}>
                  <FormHelperText className="customHelperText">
                    {loginFailedMsg}
                  </FormHelperText>
                </Grid>
              </Grid>
            )}

            <Grid item>
              <Link className="loginLinkLight" to="/forgot-password">
                <Typography
                  className="loginTypographyLight"
                  variant="DubaiRegular18"
                >
                  Forgot password
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <CustomButton
                customClassName="loginBtn"
                dark={false}
                type="submit"
                text={"Login "}
                rightIcon={<ListingCardIcon shape={"arrowRight"} />}
                fullWidth={true}
              />
            </Grid>
            <Grid item>
              <Typography
                className="loginTypographyLight"
                variant="DubaiRegular18"
              >
                Don't have an account?{" "}
                <Link className="loginLinkLight" to="/register">
                  <Typography
                    className="loginTypographyLight"
                    variant="DubaiRegular18"
                  >
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
export default Login;
