import React from "react";
import { Grid } from "@mui/material";

const ImageFrame = ({ src, width, height, alt, imageStyleClass, wrapperClass }) => {
  return (
    <Grid className={`${wrapperClass}`} item width={width} height={height}>
      <img className={`${imageStyleClass}`} src={src} alt={alt} />
    </Grid>
  );
};

export default ImageFrame;
