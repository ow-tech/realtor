import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import BuildingOtherInfoCarousel from "./BuildingOtherInfoCarousel/BuildingOtherInfoCarousel";
import BuildingOtherDetails from "./BuildingOtherDetails/BuildingOtherDetails";
import { toCarouselArray } from "../../../utils/utility";
import { defaultBuildingImageImages } from "../../../Constants/ConstantValues";
import isEqual from "lodash/isEqual";
import { capitalizeWords } from "../../../utils/utility";

function BuildingOtherInfo({ buildingObject }) {
  const buildingName =capitalizeWords(buildingObject.buildingName ||
    buildingObject.subAreaSubCommunity ||
    buildingObject.greaterArea);
  let images = toCarouselArray(buildingName, buildingObject, "buildingImages");

  // useEffect(() => {
  //   if (  buildingObject.buildingImages && !isEqual(buildingObject.buildingImages[0],null)) {
  //     buildingObject?.buildingImages?.forEach((image) => {
  //       const img = new Image();

  //       img.src = image.imgPath;
  //     });
  //   }
  // }, [images, buildingObject]);

  return images ? (
    <Box
      id="buildingDetailSection"
      className="buildingOtherInfo paddingPageWidth"
    >
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={12} sm={9} md={9}>
          <Typography variant="DubaiRegular24Bold" color="initial">
            {buildingName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            variant="DubaiRegular18"
            color="initial"
          >{`Reference: ${images.referenceNo}`}</Typography>
        </Grid>
      </Grid>
      <Typography variant="DubaiRegular18" color="initial">
        {images.subAreaSubCommunity || buildingObject.greaterArea}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {buildingObject?.buildingImages  && !isEqual(buildingObject?.buildingImages[0],null )? (
            <BuildingOtherInfoCarousel buildingObject={images} />
          ) : (
            <BuildingOtherInfoCarousel
              buildingObject={defaultBuildingImageImages}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <BuildingOtherDetails buildingObject={buildingObject} />
        </Grid>
      </Grid>
    </Box>
  ) : null;
}

export default BuildingOtherInfo;
