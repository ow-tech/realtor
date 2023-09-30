import React from "react";
import { Typography } from "@mui/material";

const DeleteAccount = () => {
  return (
    <div className="deleteAccountContainer">
      <Typography variant="GothamBlack24Bold">Delete Account</Typography>
      <Typography variant="DubaiRegular18" my={2}>
        If you delete your account all your selections will be deleted
        permanently!
      </Typography>
      <Typography variant="DubaiRegular18Bold" className="deleteBtnText">
        Delete Your Account
      </Typography>
    </div>
  );
};

export default DeleteAccount;
