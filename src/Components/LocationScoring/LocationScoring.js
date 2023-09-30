import React, { useState } from "react";
import { Typography, Grid, Popover } from "@mui/material";
import InfoIconDescription from "../InfoIconDescription/InfoIconDescription";
import { scoringTypes } from "../../Constants/ConstantValues";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import CustomInfoDescriptionForLocationScoring from "../InfoIconDescription/customInfoDescriptions/customInfoDescriptionForLocationScoring";

function LocationScoring({ title = scoringTypes.locationScoring, fields }) {
  const [open, setOpen] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event, key) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[key] = true;
      return newState;
    });

    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (key) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[key] = false;
      return newState;
    });
    setAnchorEl(null);
  };

  return (
    <Grid id="locationScoringSection" className="locationScoringSectionContainer" container px={2} py={5}>
      <Grid item xs={12}>
        <Typography className="locationScoringSectionHeading" variant="DubaiRegular24Bold" ml={0}>
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={"space-between"}>
        {fields.map((field, key) => {
          return (
            <Grid className="locationScoringItem" key={key} container item xs={12} md={2} p={1} my={2}>
              <Grid container item xs={12} justifyContent={"space-around"} alignItems={"center"}>
                <Grid item>
                  <ListingCardIcon shape={field.leftIcon} />
                </Grid>
                <Grid item>
                  <Typography className="" variant="DubaiRegular18" ml={0}>
                    {field.scoreType}
                  </Typography>
                </Grid>
                <Grid className="tagWithInfoIconContainer" item onMouseEnter={(event) => handlePopoverOpen(event, key)} onMouseLeave={() => handlePopoverClose(key)}>
                  <ListingCardIcon shape={field.rightIcon} />
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open[key] || false}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <InfoIconDescription heading={field.scoreType} headingColor={"#808080"} description={<CustomInfoDescriptionForLocationScoring infoObj={field} />} />
                  </Popover>
                </Grid>
              </Grid>
              <Grid container item xs={12} justifyContent={"center"}>
                <Grid item>
                  <Typography className="" variant="DubaiRegular24" ml={0}>
                    {field.scoreValue}/100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default LocationScoring;
