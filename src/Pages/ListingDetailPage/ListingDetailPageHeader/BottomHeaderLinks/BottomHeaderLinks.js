import React from "react";
import { isEqual } from "lodash";
import { Box } from "@mui/material";
import { HeaderLinksDivider } from "../../../../Components/HeaderLinksDivider/HeaderLinksDivider";

function BottomHeaderLinks({ page }) {
  const menuItems = [
    {
      path: "/gallery",
      text: "Gallery",
      sectionId: isEqual(page, "listingDetails")
        ? "propertyDetailSection"
        : "buildingDetailSection",
    },
    {
      path: "/amenities",
      text: "Amenities",
      sectionId: isEqual(page, "listingDetails")
        ? "listingAmenitiesSection"
        : "buildingAmenitiesSection",
    },
    {
      path: "/location",
      text: "Location",
      sectionId: isEqual(page, "listingDetails") ? "mapSection" : "mapSection",
    },
    {
      path: "/scoring",
      text: "Scoring",
      sectionId: isEqual(page, "listingDetails")
        ? "locationScoringSection"
        : "locationScoringSection",
    },
    {
      path: "/mortgage-fees",
      text: "Mortgage and Fees",
      sectionId: isEqual(page, "listingDetails") ? "mortgageSection" : "",
    },
    {
      path: "/build",
      text: "Building",
      sectionId: isEqual(page, "listingDetails") ? "buildingSection" : "",
    },
    {
      path: "/listing-agents",
      text: "Listing Agents",
      sectionId: isEqual(page, "listingDetails")
        ? "agentSection"
        : "otherAgents",
    },
    {
      path: "/school",
      text: "School",
      sectionId: isEqual(page, "listingDetails") ? "nearbySchoolsSection" : "",
    },
    {
      path: "/neighborhood",
      text: "Neighborhood",
      sectionId: isEqual(page, "listingDetails")
        ? "neighborhoodSection"
        : "neighborhoodSection",
    },
  ];
  return (
    <Box className="paddingPageWidth">
      <HeaderLinksDivider
        menuItems={menuItems}
        menuItemTypographyVariant={"DubaiRegular16"}
      />
    </Box>
  );
}

export default BottomHeaderLinks;
