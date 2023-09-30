import React from "react";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import { Box, Button } from "@mui/material";

const FullScreenSlider = ({
  handleBack,
  handleNext,
  images,
  activeStep,
  width,
  height,
}) => {
  const imgPath = images[activeStep]?.imgPath;
  const separator = imgPath && imgPath.includes("?") ? "&" : "?";
  const src = `${imgPath}${separator}tr=w-${width},h-${height}`;

  return (
    <Box className="customSlider">
      <Button
        size="large"
        onClick={handleBack}
        className="customCarouselNavigationLeftBtn"
      >
        <BackArrow />
      </Button>
      <div className="customImageContainer">
        <img
          src={src}
          alt={images[activeStep]?.imgLabel}
          className="customFullScreenImage"
        />
        <div className="customOverlay" />
      </div>
      <Button
        size="large"
        onClick={handleNext}
        className="customCarouselNavigationRightBtn"
      >
        <NextArrow />
      </Button>
    </Box>
  );
};

export default FullScreenSlider;
