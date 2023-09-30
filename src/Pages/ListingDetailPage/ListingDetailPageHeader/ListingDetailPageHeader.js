import React from "react";
import { Box } from "@mui/material";
import TopHeaderButtons from "./TopHeaderButtons/TopHeaderButtons";
import BottomHeaderLinks from "./BottomHeaderLinks/BottomHeaderLinks";

function ListingDetailPageHeader({ page, property, buildingObject }) {
  return (
    <Box id="listingHeaderSection" className="ListingHeaderWrapper">
      <TopHeaderButtons page={page} property={property || buildingObject} />

      <BottomHeaderLinks page={page} />
    </Box>
  );
}

export default ListingDetailPageHeader;
