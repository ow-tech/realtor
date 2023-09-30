import React from "react";
import VideoComponent from "../Carousel/VideoComponent";
import { Grid, Typography } from "@mui/material";

const VirtualTour = ({ title, videoUrl, height }) => {
  return (
    <Grid className="virtualTourContainer" container rowSpacing={2} px={2} py={5}>
      <Grid item xs={12}>
        <Typography variant="DubaiRegular24Bold">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <VideoComponent videoUrl={videoUrl} height={height} />
      </Grid>
    </Grid>
  );
};

export default React.memo(VirtualTour);
