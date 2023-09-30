import React from "react";
import { Grid, Typography } from "@mui/material";

function DisclaimerGrid() {
  return (
    <Grid item xs={12} sm={5} mt={7} px={9}>
      <Typography variant="DubaiRegular18" gutterBottom>
        MANSEEL, the MANSEEL logo and other various trademarks, designs, logos,
        slogans are the registered and unregistered trademarks in the UAE and
        other countries.
        <br />
        {/* VALCOM Properties is licensed as RDEXB Properties LLC. under RERA
        Registration Number 978060, 11th floor, O14 Tower, Marasi Drive,
        Business Bay, Dubai, UAE */}
      </Typography>
    </Grid>
  );
}

export default DisclaimerGrid;
