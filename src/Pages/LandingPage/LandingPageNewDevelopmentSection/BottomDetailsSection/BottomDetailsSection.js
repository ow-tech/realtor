import React from "react";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { DollarSign, BedIcon } from "../../../../Assets/SVG/Common/CommonSvgs";

function BottomDetailsSection({ community, price, sizes }) {
  return (
    <Paper square elevation={0} className="width100 carouselTypography">
      <Box>
        <Typography variant="GothamBlack24">{community}</Typography>
      </Box>
      <Grid container className="newDevelopmentBedsPrice">
        <Grid item xs={12} lg={6}>
          <Box className="carouselStartingPrice">
            <DollarSign width={15.5} height={15.5} />
            <Typography variant="AlwynNewRoundedRegular18">
              Starting from {price}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} className="carouselSizesGrid">
          <Box className="carouselSizes">
            <BedIcon width={18.5} height={12.5} />
            <Typography variant="AlwynNewRoundedRegular18">{sizes}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BottomDetailsSection;
