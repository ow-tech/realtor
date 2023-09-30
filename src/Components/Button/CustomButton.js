import React from "react";
import { Button, Typography } from "@mui/material";

function CustomButton({
  dark = true,
  onClick = null,
  size = "large",
  text = null,
  rightIcon = null,
  fullWidth = true,
  typographyVariant = "DubaiRegular20",
  customClassName = "",
  leftIcon = null,
  isDisabled = false,
  textIconSpacingClass = 1,
  ...props
}) {
  return (
    <Button
      className={
        dark
          ? `customButtonDark ${customClassName} `
          : `customButtonLight ${customClassName}`
      }
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {leftIcon ? (
        <>
          {leftIcon && leftIcon}
          {text ? (
            <Typography variant={typographyVariant} p={textIconSpacingClass}>
              {text}
            </Typography>
          ) : null}
          {rightIcon && rightIcon}
        </>
      ) : (
        <>
          {text ? (
            <Typography variant={typographyVariant} p={textIconSpacingClass}>
              {text}
            </Typography>
          ) : null}
          {rightIcon && rightIcon}
        </>
      )}
    </Button>
  );
}

export default CustomButton;
