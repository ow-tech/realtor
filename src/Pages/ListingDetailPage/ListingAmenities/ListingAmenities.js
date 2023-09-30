import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import ListingAndBuildingFacts from "../../../Components/ListingAndBuildingFacts/ListingAndBuildingFacts";
import isEqual from 'lodash/isEqual'
import { capitalizeWords } from "../../../utils/utility";

const ListingAmenities = ({ property, buildingObject }) => {
  const [propertyAmenities, setPropertyAmenities] = useState([]);
  const [buildingAmenities, setBuildingAmenities] = useState([]);



  const extractBuildingAmenitiesToArray = (buildingObject) => {
    let amenitiesArray = [];

    if (
      buildingObject?.buildingAc &&
      !isEqual(buildingObject.buildingAc.trim(), "")
    ) {
      amenitiesArray.push(buildingObject.buildingAc);
    }

    if (
      Array.isArray(buildingObject?.buildingAmenities) &&
      buildingObject.buildingAmenities.length > 0
    ) {
      amenitiesArray.push(
        ...buildingObject.buildingAmenities.filter(
          (item) => !isEqual(item.trim(), "")
        )
      );
    }

    if (
      Array.isArray(buildingObject?.buildingShopsCo) &&
      buildingObject.buildingShopsCo.length > 0
    ) {
      amenitiesArray.push(
        ...buildingObject.buildingShopsCo.filter(
          (item) => !isEqual(item.trim(), "")
        )
      );
    }

    if (
      Array.isArray(buildingObject?.buildingFacilities) &&
      buildingObject.buildingFacilities.length > 0
    ) {
      amenitiesArray.push(
        ...buildingObject.buildingFacilities.filter(
          (item) => !isEqual(item.trim(), "")
        )
      );
    }

    if (
      Array.isArray(buildingObject?.buildingSportsFacilities) &&
      buildingObject.buildingSportsFacilities.length > 0
    ) {
      amenitiesArray.push(
        ...buildingObject.buildingSportsFacilities.filter(
          (item) => !isEqual(item.trim(), "")
        )
      );
    }

    if (
      buildingObject?.elevators &&
      !isNaN(buildingObject.elevators) &&
      !isEqual(buildingObject.elevators.trim(), "0")
    ) {
      amenitiesArray.push(`${buildingObject.elevators} Elevators`);
    }

    if (buildingObject?.petPolicy) {
      amenitiesArray.push(`Pets ${buildingObject.petPolicy}`);
    }

    if (
      Array.isArray(buildingObject?.serviceLevels) &&
      buildingObject.serviceLevels.length > 0
    ) {
      amenitiesArray.push(
        ...buildingObject.serviceLevels.filter(
          (item) => !isEqual(item.trim(), "")
        )
      );
    }

    setBuildingAmenities(capitalizeWords(amenitiesArray.filter(Boolean)));
  };

  useEffect(() => {
    extractBuildingAmenitiesToArray(buildingObject);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildingObject]);

  const extractAmenitiesToArray = (property) => {
    let amenitiesArray = [];

    if (
      property?.amenities &&
      !isEqual(property.amenities.trim(), ",") &&
      !isEqual(property.amenities.trim(), "")
    ) {

      // let propertyAmenitiesArray =property.amenities..replace('[','').replace(']','').split(",")
      // console.log('propertyAmenitiesArray',propertyAmenitiesArray)
      amenitiesArray = property.amenities?property.amenities.replaceAll('\"','').replace('[','').replace(']','').split(",").map((amenity) => amenity.trim()): null;
      
        
    }

    if (property?.balconies === "yes") {
      amenitiesArray.push("Balcony");
    }

    if (
      property?.furnished &&
      !isEqual(property.furnished.toLowerCase(), "no")
    ) {
      amenitiesArray.push(property.furnished);
    }

    if (property?.parkingQty && !isNaN(property.parkingQty)) {
      const parkingQtyNumber = parseInt(property.parkingQty);
      if (parkingQtyNumber > 0) {
        amenitiesArray.push(
          parkingQtyNumber > 1
            ? `${parkingQtyNumber} Parkings`
            : `${parkingQtyNumber} Parking`
        );
      }
    }

    if (
      property?.terraces &&
      !isEqual(property.terraces.toLowerCase(), "no")
    ) {
    }
    setPropertyAmenities(capitalizeWords(amenitiesArray.filter(Boolean)));
 
  };

  useEffect(() => {
    extractAmenitiesToArray(property);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [buildingAmenities]);

  const reactComponentLeft = () => {
    return (
      <Typography variant="DubaiRegular24Bold">Property Amenities</Typography>
    );
  };

  const reactComponentRight = () => {
    return (
      <Typography variant="DubaiRegular24Bold">Building Amenities</Typography>
    );
  };

  return (
    <ListingAndBuildingFacts
      rightData={buildingAmenities}
      leftData={propertyAmenities}
      text={property.listingDescription}
      reactComponentRight={reactComponentRight}
      property={property}
      reactComponentLeft={reactComponentLeft}
      // buildingObject={buildingObject}
      
    
    />
  );
};

export default ListingAmenities;
