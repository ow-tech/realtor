import React from "react";
import PropertyDetailTop from "./PropertyDetailTop/PropertyDetailTop";
import PropertyDetailBottom from "./PropertyDetailBottom/PropertyDetailBottom";
import { Box } from "@mui/material";

const PropertyDetails = ({ listingId, property,buildingObject }) => {
  return (
    <Box className="paddingPageWidth" mb={4} >
      <PropertyDetailTop listingId={listingId} property={property} />
      <div className="propertyDetailSpacer"></div>
      <PropertyDetailBottom listingId={listingId} property={property} buildingObject={buildingObject}/>
    </Box>
  );
};

export default PropertyDetails;
