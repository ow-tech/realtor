import React, { useState, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import InputWithChangeBtn from "../../../Components/InputWithChangeBtn/InputWithChangeBtn";
import DOBInput from "./DOBInput/DOBInput";
import NationalitySelect from "./NationalitySelect/NationalitySelect";
import CustomButton from "../../../Components/Button/CustomButton";
import "../../../Styles/profile.css";
import ProfileNumInput from "./ProfileNumInput/ProfileNumInput";
import AppContext from "../../../context/AppContext";
import { updateAccountDetails } from "../../../network/apiServices";
import { successToast } from "../../../utils/useToast";

const MySettings = () => {
  const context = useContext(AppContext);

  const { userPreferences } = context;

  const userDetails = userPreferences?.userDetails;

  const [firstName, setFirstName] = useState(userDetails?.firstName);
  const [lastName, setLastName] = useState(userDetails?.lastName);

  const [mobile, setMobile] = useState(userDetails?.mobileNumber);
  const [verifyBtnCheck, setVerifyBtnCheck] = useState(true);

  const [selectedNationality, setSelectedNationality] = useState(
    userDetails?.nationality
  );
  const [selectedDate, setSelectedDate] = useState(userDetails?.dateOfBirth);
  const [validationError, setValidationError] = useState("");

  const handleFirstName = (value) => {
    setFirstName(value);
  };
  const handleLastName = (value) => {
    setLastName(value);
  };

  const handleSubmit = () => {
    setValidationError("");

    if (!firstName.trim()) {
      setValidationError("Please enter a valid first name.");
    } else if (!lastName.trim()) {
      setValidationError("Please enter a valid last name.");
    } else if (!mobile.trim()) {
      setValidationError("Please enter a valid mobile number.");
    } else if (!verifyBtnCheck) {
      setValidationError("Please verify mobile number first.");
    } else {
      const payload = {
        email: userDetails?.email,
        firstName: firstName,
        lastName: lastName,
        currentMobileNumber: userDetails?.mobileNumber,
        newMobileNumber: mobile,
        nationality: selectedNationality,
        dateOfBirth: selectedDate ? selectedDate : "",
      };

      updateAccountDetails(payload)
        .then((res) => {
          if (res.data.status === "INVALID") {
            setValidationError(res.data.message);
          } else {
            successToast(res.data.message);
          }
        })
        .catch((err) => {});
    }
  };

  return (
    <div>
      <Typography variant="GothamBlack24Bold">Settings</Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6}>
          <InputWithChangeBtn
            initialValue={firstName}
            onValueChange={handleFirstName}
            type={"text"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputWithChangeBtn
            initialValue={lastName}
            onValueChange={handleLastName}
            type={"text"}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <input
            type="text"
            value={userDetails?.email}
            className="disableEmailInput"
            disabled
          />
        </Grid>
        <Grid item xs={12} lg={6} className="mt10px">
          <ProfileNumInput
            mobile={mobile}
            setMobile={setMobile}
            verifyBtnCheck={verifyBtnCheck}
            setVerifyBtnCheck={setVerifyBtnCheck}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="datePickerContainer">
          <DOBInput
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="mt10px">
          <NationalitySelect
            selectedNationality={selectedNationality}
            setSelectedNationality={setSelectedNationality}
          />
        </Grid>
      </Grid>

      <CustomButton
        text="Save"
        customClassName="profileSaveBtn"
        onClick={handleSubmit}
      />

      {validationError && <p className="red">{validationError}</p>}
    </div>
  );
};

export default MySettings;
