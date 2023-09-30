import React from "react";
import { FlagRenderValue } from "../../../../Components/FlagRenderValue/FlagRenderValue";
import { ExpandMoreSharp, Check } from "@mui/icons-material";
import { MenuItem, Box, ListItemIcon } from "@mui/material";
import Select from "@mui/material/Select";
import { CallingCountryCodes } from "../../../../Assets/SVG/Flags/CallingCountryCodes/CallingCountryCodes";
import { useEffect } from "react";

function CountryCallingCode({
  setCallingCode,
  callingCode,
  setValidMobileNumber,
  minWidth = 120,
  height = 42,
  enable = false,
  customCLass = null,
}) {
  const validNumber = (CallingCountryCodes, callingCode) => {
    const country = CallingCountryCodes.find(
      (country) => country.phoneCode === callingCode
    );
    return country.validMobileNumber;
  };

  useEffect(() => {
    setValidMobileNumber(validNumber(CallingCountryCodes, callingCode));
  });

  const handleChange = (event) => {
    setCallingCode(event.target.value);
    setValidMobileNumber(validNumber(CallingCountryCodes, event.target.value));
  };

  return (
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={callingCode}
      onChange={handleChange}
      renderValue={() => <FlagRenderValue value={callingCode} />}
      readOnly={enable}
      IconComponent={ExpandMoreSharp}
      sx={{ minWidth: { minWidth }, height: { height } }}
      className={"countryPhoneCodeSelect " + customCLass}
    >
      {CallingCountryCodes.map((item) => (
        <MenuItem
          key={item.phoneCode}
          value={item.phoneCode}
          className="menuItem"
        >
          {item.phoneCode === callingCode && (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          )}
          <Box className="itemBox">
            <FlagRenderValue value={item.phoneCode} />
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}

export default CountryCallingCode;
