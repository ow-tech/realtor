import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validatePassword } from "../../utils/utility";

const PasswordComponent = ({
  password,
  setPassword,
  passwordValidationErrors = [],
  setPasswordValidationErrors = null,
  placeholder,
  checkValidations = true,
  customClass = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (checkValidations && setPasswordValidationErrors) {
      const validation = validatePassword(event.target.value);
      if (validation.isValid) {
        setPasswordValidationErrors([]);
      } else {
        setPasswordValidationErrors(validation.errors);
      }
    }
  };

  return (
    <FormControl fullWidth>
      <OutlinedInput
        className={customClass}
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
        error={checkValidations && passwordValidationErrors.length}
        placeholder={placeholder}
        required={true}
        fullWidth
        onChange={handlePassword}
      />
    </FormControl>
  );
};

export default PasswordComponent;
