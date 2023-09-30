import React from "react";
import { Grid } from "@mui/material";
import PricingDetails from "./PricingDetails/PricingDetails";
import HeadingDetails from "./HeadingDetails/HeadingDetails";

const PropertyDetailTop = ({ listingId, property }) => {
  return (
    <Grid id="propertyDetailSection" container>
      <Grid item xs={12} sm={6} md={6}>
        <HeadingDetails listingId={listingId} property={property} />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <PricingDetails listingId={listingId} property={property} />
      </Grid>
    </Grid>
  );
};

export default PropertyDetailTop;
