import React from "react";
import { Grid, Typography } from "@mui/material";
import ListingAndBuildingFacts from "../../../Components/ListingAndBuildingFacts/ListingAndBuildingFacts";
import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../../ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";
import { notAvailable } from "../../../Constants/ConstantValues";
import { extractMasterDeveloper } from "../../../utils/utility";
import isEqual from 'lodash/isEqual';
import { capitalizeWords } from "../../../utils/utility";


function BuildingFacts({ buildingObject }) {


  const buildingFactsLabels = [
    [
      "Building Type",
      buildingObject.buildingType && !isEqual(buildingObject.buildingType,'')?buildingObject.buildingType:notAvailable,
      <ServiceCharges />,
      "Service charges",
      {
        isTable: true,
        isObject: false,
      },
    ],
    [
      "Zoning",
      buildingObject.zoning && !isEqual( buildingObject.zoning,'')? buildingObject.zoning:notAvailable,
      <ServiceCharges />,
      "Zoning",
      {
        isTable: false,
        isObject: true,
      },
    ],

    "Building Owner",
    "Architect",
    "Developer",
    "Contractor",
    "Year Launched",
    "Year Completed",
    "Pet Policy",
    "Hour Security 24",
    "Fire fighting System",
  ];
  const developerEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Developer") : null;

  const contractorEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Contractor") : null;
  const architectEntry = buildingObject.crmAssociates ? buildingObject.crmAssociates.find((associate) => associate.crmAssociateType === "Architect") : null;
  const buildingFactsValues = capitalizeWords([
    buildingObject.buildingType && !isEqual( buildingObject.buildingType,'')? buildingObject.buildingType:notAvailable,
    buildingObject.zoning && !isEqual( buildingObject.zoning,'')? buildingObject.zoning:notAvailable,
    buildingObject.buildingOwner || buildingObject.ownerShipType||notAvailable,
    architectEntry ? extractMasterDeveloper(architectEntry.crmAssociate) : notAvailable,
    developerEntry ? extractMasterDeveloper(developerEntry.crmAssociate) : notAvailable,
    contractorEntry ? extractMasterDeveloper(contractorEntry.crmAssociate) : notAvailable,
    buildingObject.yearLaunched? buildingObject.yearLaunched:notAvailable,
    buildingObject.yearCompleted?buildingObject.yearCompleted:notAvailable,
    buildingObject.petPolicy && !isEqual(buildingObject.petPolicy, '')?buildingObject.petPolicy:notAvailable,
    buildingObject.serviceLevels && !isEqual(buildingObject.serviceLevels, '')?buildingObject.serviceLevels:notAvailable,
    buildingObject.fireFightingSystem  && !isEqual(buildingObject.fireFightingSystem, '')?buildingObject.fireFightingSystem:notAvailable,
  ]);

  const ratingComponent = () => {
    return (
      <>
        <Typography variant="DubaiRegular24Bold">Building Facts</Typography>
        <Grid item xs={12} sm={12}  mt={2} style={{ flexDirection: "row" }}>
          <RatingsAAAndStar darkStars={false}  customStyles='customStylesTagWithInfoBuilding' infoIconClass='buildingInfoIcon'   buildingObject={buildingObject}/>
        </Grid>
      </>
    );
  };

  return (
    <>
      {/* <div>am here</div> */}
      <ListingAndBuildingFacts
        rightData={buildingFactsValues}
        leftData={buildingFactsLabels}
        text={buildingObject.description}
        reactComponent={ratingComponent}
        buildingDividers={true}
        // isTable{}
      />
    </>
  );
}

export default BuildingFacts;
