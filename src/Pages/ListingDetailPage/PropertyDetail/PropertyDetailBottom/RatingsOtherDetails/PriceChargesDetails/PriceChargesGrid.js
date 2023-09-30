import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { InfoIcon } from "../../../../../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../../../../../../Components/InfoIconDescription/InfoIconDescription";

export const PriceChargesGrid = (label, value, description) => {
  return (
    <>
      {description ? (
        <Grid item xs={8} sm={8} md={8} className="serviceChargeWithIcon">
          <Box className="serviceChargeInfoIcon">
            <Typography variant="DubaiRegular18">{label}</Typography>
            <div className="tagWithInfoIconContainer">
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={description.heading}
                  headingColor={"#000"}
                  description={description.description}
                />
              </div>
            </div>
          </Box>
        </Grid>
      ) : (
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="DubaiRegular18">{label}</Typography>
        </Grid>
      )}
      <Grid item xs={4} sm={4} md={4}>
        <Typography variant="DubaiRegular18">{value}</Typography>
      </Grid>
    </>
  );
};
