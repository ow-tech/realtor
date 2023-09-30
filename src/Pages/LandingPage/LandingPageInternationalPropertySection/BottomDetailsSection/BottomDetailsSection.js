import React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";

function BottomDetailsSection({ city, country, countryFlag }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={7} md={7}>
        <Paper square elevation={0} className="carouselTypography">
          <Box>
            <Typography variant="GothamBlack24">{city}</Typography>
          </Box>
          <Box className="carouselStartingPrice">
            {countryFlag}
            <Typography variant="AlwynNewRoundedRegular18">
              {country}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default BottomDetailsSection;
