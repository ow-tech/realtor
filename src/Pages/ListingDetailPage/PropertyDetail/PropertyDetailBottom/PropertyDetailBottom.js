import React from "react";
import { Grid } from "@mui/material";
import RatingsOtherDetails from "./RatingsOtherDetails/RatingsOtherDetails";
import DetailedCarousel from "./DetailedCarousel/DetailedCarousel";

const PropertyDetailBottom = ({ listingId, property,buildingObject }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} pr={2}>
        <DetailedCarousel listingId={listingId} property={property} />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <RatingsOtherDetails listingId={listingId} property={property}buildingObject={buildingObject} />
      </Grid>
    </Grid>
  );
};

export default PropertyDetailBottom;
