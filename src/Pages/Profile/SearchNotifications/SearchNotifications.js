import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import CustomButton from "../../../Components/Button/CustomButton";

const SearchNotifications = () => {
  const [selectedValue, setSelectedValue] = useState("immediately");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="searchNotificationContainer">
      <Typography variant="GothamBlack24Bold">Search Notifications</Typography>
      <Typography variant="DubaiRegular20" my={2}>
        How often would you like to receive updates on future Saved Searches?
      </Typography>
      <RadioGroup
        aria-label="searchNotificationSelect"
        name="searchNotificationSelect"
        value={selectedValue}
        onChange={handleChange}
        className="profileRadioGroup"
      >
        <FormControlLabel
          className="radioFormControl"
          value="never"
          control={<Radio className="customRadio" />}
          label="Never"
        />
        <FormControlLabel
          className="radioFormControl"
          value="daily"
          control={<Radio className="customRadio" />}
          label="Daily"
        />
        <FormControlLabel
          className="radioFormControl"
          value="immediately"
          control={<Radio className="customRadio" />}
          label="Immediately"
        />
      </RadioGroup>

      <CustomButton text="Save" customClassName="profileSaveBtn" />
    </div>
  );
};

export default SearchNotifications;
