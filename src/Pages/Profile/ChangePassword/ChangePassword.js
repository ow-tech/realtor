import React, { useState, useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PasswordComponent from "../../../Components/PasswordComponent/PasswordComponent";
import CustomButton from "../../../Components/Button/CustomButton";
import AppContext from "../../../context/AppContext";
import { updateUserPassword } from "../../../network/apiServices";
import { successToast } from "../../../utils/useToast";

const ChangePassword = () => {
  const context = useContext(AppContext);

  const { userObj } = context;

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [validationError, setValidationError] = useState("");
  const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);

  const noteLines = [
    "Password should contain capital letters.",
    "Password must contain a special character.",
    "Password should contain lowercase letters.",
    "Password should contain at least one number.",
    "Password length must be at least 8 characters.",
  ];

  const isValidationError = (line) => passwordValidationErrors.includes(line);

  const handleSubmit = () => {
    // Check if all fields are filled
    setValidationError("");
    if (!currentPass || !password || !confirmPass) {
      setValidationError("Please fill in all fields!");
      return;
    }

    // Check if "New Password" and "Confirm New Password" match
    if (password !== confirmPass) {
      setValidationError("New Password and Confirm New Password do not match");
      return;
    }

    // Call your API here with the necessary data (e.g., currentPass and password)
    const payload = {
      username: userObj?.email,
      password: currentPass,
      newPassword: password,
    };
    updateUserPassword(payload)
      .then((res) => {
        if (res.data.status === "INVALID") {
          setValidationError(res.data.message);
        } else {
          setValidationError("");
          setCurrentPass("");
          setPassword("");
          setConfirmPass("");
          successToast(res.data.message);
        }
      })
      .catch((err) => {
        setValidationError(err.data.message);
        console.log(err);
      });
  };

  return (
    <div>
      <Typography variant="GothamBlack24Bold">Change Password</Typography>
      <Grid container spacing={2} my={1}>
        <Grid item xs={12} sm={6}>
          <PasswordComponent
            password={currentPass}
            setPassword={setCurrentPass}
            placeholder={"Current Password"}
            customClass="settingsPassField"
            checkValidations={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <PasswordComponent
            password={password}
            setPassword={setPassword}
            passwordValidationErrors={passwordValidationErrors}
            setPasswordValidationErrors={setPasswordValidationErrors}
            placeholder={"New Password"}
            customClass="settingsPassField"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordComponent
            password={confirmPass}
            setPassword={setConfirmPass}
            placeholder={"Confirm New Password"}
            customClass="settingsPassField"
            checkValidations={false}
          />
        </Grid>
      </Grid>
      <Box className="settingPassChangeNote" mt={2}>
        <Typography variant="DubaiRegular16">Note:</Typography>
        {noteLines.map((line, index) => (
          <Typography
            variant="DubaiRegular16"
            key={index}
            style={{
              color: isValidationError(line) ? "red" : "initial",
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>

      <CustomButton
        isDisabled={passwordValidationErrors.length > 0}
        onClick={handleSubmit}
        text="Save"
        customClassName="profileSaveBtn"
      />

      {validationError && <p className="red">{validationError}</p>}
    </div>
  );
};

export default ChangePassword;
