import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function PasswordUpdated({ head, description }) {
  return (
    <Grid className="authComponentsWrapper " container justifyContent={"center"} alignItems={"center"}>
      <div className="">
        <Grid container rowSpacing={2} direction={"column"} textAlign={"center"}>
          <Grid item>
            <ListingCardIcon shape="passwordUpdated" />
          </Grid>
          <Grid item>
            <Typography className="loginTypographyLight" variant="DubaiRegular16">
              {head}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="loginTypographyLight" variant="DubaiRegular16">
              {description}
            </Typography>
          </Grid>
          <Grid container item justifyContent={"center"}>
            <Grid item xs={6}>
              <Link to="/login">
                <CustomButton customClassName="passwordUpdatedRedirectBtn" dark={true} text={"Login "} rightIcon={<ListingCardIcon shape={"arrowRight"} />} fullWidth={true} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
export default PasswordUpdated;
