import React from "react";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import { Box, Button, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import isBoolean from "lodash/isBoolean";
import { useNavigate } from "react-router-dom";

// Create a browser history object

const ImagesSlider = ({
  handleBack,
  handleNext,
  images,
  activeStep,
  width,
  height,
  customCLass,
  customState = null,
  setCustomState = null,
}) => {
  const navigate = useNavigate();

  const imgPath = images[activeStep]?.imgPath;
  const separator = imgPath && imgPath.includes("?") ? "&" : "?";
  const src = `${imgPath}${separator}tr=w-${width},h-${height}`;

  const handleOverlayClick = () => {
    if (isBoolean(customState)) {
      setCustomState((prev) => !prev);
    } else {
      navigate(customState);
    }
  };

  if (!images || images.length === 0) {
    return (
      <Box className={`${customCLass} carouselBox`}>
        <LazyLoadImage
          src={"src"}
          className="homePageBackgroundImage"
          width={width}
          height={height}
          threshold={450}
        />
        <Grid className="carouselNavigationBtns" container>
          <Button size="large" onClick={handleBack}>
            <BackArrow />
          </Button>
          <Button size="large" onClick={handleNext}>
            <NextArrow />
          </Button>
        </Grid>
      </Box>
    );
  }

  return (
    <Box className="carouselBox">
      <Box className="imageContainer">
        <LazyLoadImage
          src={src}
          alt={images[activeStep]?.imgLabel}
          className="homePageBackgroundImage"
          width={width}
          height={height}
          threshold={450}
        />
        <div className="overlay" onClick={handleOverlayClick} />
      </Box>
      <Button
        size="large"
        onClick={handleBack}
        className="carouselNavigationLeftBtn"
      >
        <BackArrow />
      </Button>
      <Button
        size="large"
        onClick={handleNext}
        className="carouselNavigationRightBtn"
      >
        <NextArrow />
      </Button>
    </Box>
  );
};

export default ImagesSlider;
