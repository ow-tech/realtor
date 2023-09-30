import React, { useRef, useState } from "react";
import {
  MobileStepper,
  Container,
  Dialog,
  Box,
  IconButton,
} from "@mui/material";
import ThumbnailCarouselBottom from "./ThumbnailCarouselBottom";
import VideoComponent from "./VideoComponent";
import { isEmpty } from "lodash";
import CloseIcon from "@mui/icons-material/Close";
import TestSlider from "./TestSlider";
import { useEffect } from "react";
import { preloadImages } from "../../utils/utility";
import ImagesSlider from "./ImagesSlider";
import FullScreenSlider from "./FullScreenSlider";

const CAROUSEL = "carousel";
const FLOOR_PLAN = "floorPlan";
const VIDEO = "video";

function ThumbnailCarousel({
  carouselStep,
  setCarouselStep,
  floorStep,
  setFloorStep,
  carouselImages = [],
  floorImages = [],
  videoUrl = "",
  thumbnails = false,
  dots = true,
  dark = true,
  width,
  height,
}) {
  const scrollableContainerRef = useRef(null);
  const carouselMaxSteps = carouselImages.length || 0;
  const floorMaxSteps = floorImages.length || 0;
  const [view, setView] = useState(CAROUSEL);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNext = () => {
    if (view === CAROUSEL) {
      setCarouselStep(
        (prevActiveStep) => (prevActiveStep + 1) % carouselMaxSteps
      );
    } else {
      setFloorStep((prevActiveStep) => (prevActiveStep + 1) % floorMaxSteps);
    }
  };

  const handleBack = () => {
    if (view === CAROUSEL) {
      setCarouselStep((prevActiveStep) =>
        prevActiveStep === 0 ? carouselMaxSteps - 1 : prevActiveStep - 1
      );
    } else {
      setFloorStep((prevActiveStep) =>
        prevActiveStep === 0 ? floorMaxSteps - 1 : prevActiveStep - 1
      );
    }
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  useEffect(() => {
    preloadImages(carouselImages, width, height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderView = () => {
    switch (view) {
      case CAROUSEL:
        return (
          <TestSlider
            activeStep={carouselStep}
            handleBack={handleBack}
            handleNext={handleNext}
            images={carouselImages}
            width={width}
            height={height}
            availableGrids={6}
            customState={modalIsOpen}
            setCustomState={setModalIsOpen}
            customClass={"thumbnailImgContain"}
          />
        );
      case FLOOR_PLAN:
        return (
          <TestSlider
            activeStep={floorStep}
            handleBack={handleBack}
            handleNext={handleNext}
            images={floorImages}
            width={width}
            height={height}
            availableGrids={6}
          />
        );
      case VIDEO:
        return (
          <Container maxWidth="md">
            <VideoComponent videoUrl={videoUrl} />
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderView()}
      {dots && (view === CAROUSEL || view === FLOOR_PLAN) && (
        <MobileStepper
          steps={view === CAROUSEL ? carouselMaxSteps : floorMaxSteps}
          position="static"
          activeStep={view === CAROUSEL ? carouselStep : floorStep}
          className={dark ? "darkCarouselDots" : "lightCarouselDots"}
        />
      )}
      {thumbnails && (
        <ThumbnailCarouselBottom
          activeStep={carouselStep}
          setActiveStep={setCarouselStep}
          images={carouselImages}
          Ref={scrollableContainerRef}
          onViewChange={handleViewChange}
          floorPlan={floorImages.length ? true : false}
          videoTour={isEmpty(videoUrl) ? false : true}
        />
      )}{" "}
      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        className="thumbnailCarouselFullImgDialog"
        fullScreen
      >
        <FullScreenSlider
          activeStep={carouselStep}
          handleBack={handleBack}
          handleNext={handleNext}
          images={carouselImages}
        />
        <CloseIcon
          onClick={closeModal}
          className="thumbnailCarouselFullImgClose cursorPointer"
        />
      </Dialog>
    </>
  );
}

export default ThumbnailCarousel;
