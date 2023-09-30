import React, { useEffect } from "react";
import { Button, Grid, Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";

const CAROUSEL = "carousel";

const Thumbnails = ({
  images,
  Ref,
  activeStep,
  setActiveStep,
  onViewChange,
}) => {
  const scrollLeft = () => {
    if (Ref.current) {
      Ref.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (Ref.current) {
      Ref.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const handleMainCarouselClick = () => {
    onViewChange(CAROUSEL);
  };

  useEffect(() => {
    // Ensure that the active image button is in view
    if (Ref.current) {
      const activeButton = Ref.current.querySelector(
        `.thumbnailImageButton.activeThumbnail`
      );

      if (activeButton) {
        const containerRect = Ref.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        if (buttonRect.left < containerRect.left) {
          // Active button is to the left of the visible area
          Ref.current.scrollBy({
            left: buttonRect.left - containerRect.left - 30, // Add a buffer
            behavior: "smooth",
          });
        } else if (buttonRect.right > containerRect.right) {
          // Active button is to the right of the visible area
          Ref.current.scrollBy({
            left: buttonRect.right - containerRect.right + 30, // Add a buffer
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeStep, Ref]);

  return (
    <Box className="carouselScrollableContainer" ref={Ref}>
      <button
        className="carouselScrollButton carouselScrollLeft"
        onClick={scrollLeft}
      >
        <BackArrow />
      </button>

      <div className="carouselScrollableContent">
        <Grid container wrap="nowrap" className="thumbnailGridCont">
          {images.map((image, index) => (
            <Grid item key={index}>
              <Button
                onClick={() => {
                  setActiveStep(index);
                  handleMainCarouselClick();
                }}
                className={
                  activeStep === index
                    ? "thumbnailImageButton activeThumbnail"
                    : "thumbnailImageButton"
                }
              >
                <LazyLoadImage
                  height={54}
                  width={85}
                  src={image.imgPath}
                  alt={image.imgLabel}
                  className="carouselImage"
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>

      <button
        className="carouselScrollButton carouselScrollRight"
        onClick={scrollRight}
      >
        <NextArrow />
      </button>
    </Box>
  );
};

export default Thumbnails;
