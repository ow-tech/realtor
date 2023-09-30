import React from "react";
import { Grid } from "@mui/material";
import AmenitiesLists from "../../Pages/ListingDetailPage/ListingAmenities/AmenitiesLists/AmenitiesLists";
import AmenitiesDescription from "../../Pages/ListingDetailPage/ListingAmenities/AmenitiesDescription/AmenitiesDescription";
import { notAvailable } from "../../Constants/ConstantValues";

function ListingAndBuildingFacts({
  leftData,
  rightData,
  text,
  reactComponentLeft,
  reactComponentRight,
  buildingDividers,
  property,
  reactComponent,
}) {

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        className=" amenitiesParentContainer "
        mt={2}
        mb={2}
        justifyContent={"center"}
        alignContent={'center'}
     
        spacing={8}
        id="listingAmenitiesSection"
      >
        <Grid item xs={12} sm={5} className=" amenitiesParentContainerItem">
          {text ? (
            <AmenitiesDescription text={text} />
          ) : (
            <AmenitiesDescription text={notAvailable} />
          )}
        </Grid>
        <Grid item xs={12} sm={6} className=" amenitiesParentContainerItem">
          <AmenitiesLists
            leftData={leftData}
            rightData={rightData}
            reactComponentLeft={reactComponentLeft}
            reactComponentRight={reactComponentRight}
            buildingDividers={buildingDividers}
            property={property}
            reactComponent={reactComponent}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ListingAndBuildingFacts;
