import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  FloorPlanIcon,
  VirtualTourIcon,
  MapViewIcon,
} from "../../Assets/SVG/Common/CommonSvgs";
import Thumbnails from "./Thumbnails";
import { Link as ScrollLink } from "react-scroll";

const FLOOR_PLAN = "floorPlan";
const VIDEO = "video";

const ThumbnailCarouselBottom = ({
  images,
  Ref,
  activeStep,
  setActiveStep,
  onViewChange,
  floorPlan = false,
  videoTour = false,
  mapView = true,
}) => {
  const handleFloorPlanClick = () => {
    onViewChange(FLOOR_PLAN);
  };

  const handleVirtualTourClick = () => {
    onViewChange(VIDEO);
  };

  const gridItemCount = [floorPlan, videoTour, mapView].filter(Boolean).length;

  const firstGridItemSize = 12 - gridItemCount * 1.8;
  const additionalGridItemsSize = 1.8;

  return (
    <Grid container spacing={0.5} alignItems="center" mt={-0.5}>
      <Grid item xs={12} sm={12} md={firstGridItemSize}>
        <Thumbnails
          images={images}
          Ref={Ref}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          onViewChange={onViewChange}
        />
      </Grid>

      {floorPlan && (
        <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
          <Box className="floorPlanButton" onClick={handleFloorPlanClick}>
            <FloorPlanIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Floor Plan
            </Typography>
          </Box>
        </Grid>
      )}

      {videoTour && (
        <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
          <Box className="floorPlanButton" onClick={handleVirtualTourClick}>
            <VirtualTourIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Virtual Tour
            </Typography>
          </Box>
        </Grid>
      )}

      <Grid item xs={4} sm={4} md={additionalGridItemsSize}>
        <ScrollLink
          to={"mapSection"}
          smooth={true}
          offset={-300}
          duration={500}
        >
          <Box className="floorPlanButton">
            <MapViewIcon />
            <Typography
              variant="DubaiRegular14"
              className="floorPlanButtonText"
            >
              Map View
            </Typography>
          </Box>
        </ScrollLink>
      </Grid>
    </Grid>
  );
};

export default ThumbnailCarouselBottom;
