import React from "react";
import { Typography, Grid } from "@mui/material";

export const Designation = ({ name, designation, nameTypoVariant, designationTypoVariant }) => {
  return (
    <Grid container item xs={4} md={12}>
      <Grid item xs={12}>
        <Typography variant={nameTypoVariant}>{name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={designationTypoVariant}>{designation}</Typography>
      </Grid>
    </Grid>
  );
};
