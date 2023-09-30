import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { capitalizeWords } from "../../../utils/utility";

function BuildingAmenities({ buildingObject }) {
  const _ = require("lodash");

  const createBuildingInfoArray = (buildingObject) => {
    const buildingInfoArray = [];

    if (
      buildingObject.buildingAmenities &&
      buildingObject.buildingAmenities.length > 0
    ) {
      buildingInfoArray.push(
        ...buildingObject.buildingAmenities.filter((item) => item !== "")
      );
    }
    if (
      buildingObject.buildingFacilities &&
      buildingObject.buildingFacilities.length > 0
    ) {
      buildingInfoArray.push(
        ...buildingObject.buildingFacilities.filter((item) => item !== "")
      );
    }

    if (
      buildingObject.buildingShopsCo &&
      buildingObject.buildingShopsCo.length > 0
    ) {
      buildingInfoArray.push(
        ...buildingObject.buildingShopsCo.filter((item) => item !== "")
      );
    }

    if (
      buildingObject.buildingSportsFacilities &&
      buildingObject.buildingSportsFacilities.length > 0
      // ||buildingObject.buildingSportsFacilitiesAmenityType &&
    ) {
      buildingInfoArray.push(
        ...buildingObject.buildingSportsFacilities.filter((item) => item !== "")
      );
    }

    if (buildingObject.elevators && buildingObject.elevators !== "0") {
      buildingInfoArray.push("Elevators");
    }

    if (
      buildingObject.serviceElevators &&
      buildingObject.serviceElevators !== "0"
    ) {
      buildingInfoArray.push("Service Elevators");
    }

    if (
      buildingObject.publicParkings &&
      buildingObject.publicParkings !== "0"
    ) {
      buildingInfoArray.push("Public Parking");
    }

    if (
      buildingObject.fireFightingSystem &&
      buildingObject.fireFightingSystem !== ""
    ) {
      buildingInfoArray.push("Fire Fighting System");
    }
    if (
      buildingObject.serviceLevels &&
      buildingObject.serviceLevels.length > 0
    ) {
      buildingInfoArray.push(
        ...buildingObject.serviceLevels.filter(
          (item) => !_.isEqual(item.trim(), "")
        )
      );
    }

    return capitalizeWords(buildingInfoArray);
  };

  const buildingAmenities = createBuildingInfoArray(buildingObject);
  return (
    <Box id="buildingAmenitiesSection" className="buildingAmenitiesWrapper">
      <Typography variant="DubaiRegular24Bold">Building Amenities</Typography>
      <Grid container spacing={1} my={2}>
        {buildingAmenities.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="DubaiRegular18">Coming Soon</Typography>
          </Grid>
        ) : (
          buildingAmenities.map((amenity, key) => (
            <React.Fragment key={key}>
              <Grid item xs={4}>
                <Typography variant="DubaiRegular18">{amenity}</Typography>
              </Grid>

              {(key + 1) % 3 === 0 && key !== buildingAmenities.length && (
                <Divider
                  orientation="horizontal"
                  flexItem
                  className="buildingAmenitiesDivider"
                />
              )}
            </React.Fragment>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default BuildingAmenities;
