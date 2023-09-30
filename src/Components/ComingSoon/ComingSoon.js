import React from "react";
import {Grid, Typography } from "@mui/material";
import "../../Styles/footerStyles.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../ErrorBoundaries/ErrorBoundaries";
import CustomButton from "../Button/CustomButton";
import { ButtonLeftArrow } from "../../Assets/SVG/Common/CommonSvgs";
import { Link } from "react-router-dom";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function ComingSoon() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      {/* <Grid container justifyContent="center" alignItems="center" spacing={3} bgcolor={"white"}>
        Coming soon
      </Grid> */}
      <Grid className="comingSoonPageWrapper" container spacing={2} direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Grid className="comingSoonLogo" item>
          <ListingCardIcon shape={"comingSoonTimer"} />
        </Grid>
        <Grid item>
          <Typography variant="GothamBlack18">Coming soon</Typography>
        </Grid>
        <Grid item className="comingSoonButtonWrapper">
          <Link to="/" className="cardContentLowerLink">
            <CustomButton text="Back to home" leftIcon={<ButtonLeftArrow />} variant="outlined" customClassName="signInButton" />
          </Link>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
}

export default ComingSoon;
