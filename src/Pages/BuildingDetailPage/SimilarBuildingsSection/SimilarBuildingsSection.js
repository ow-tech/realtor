import React, { useContext, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { similarBuildingsMetaDataFields } from "../../../Constants/ConstantValues";
import SimilarBuildings from "../../../Components/SimilarBuildings/SimilarBuildings";
import AppContext from "../../../context/AppContext";
import { getSimilarBuildingsDetails } from "../../../network/apiServices";

const SimilarBuildingsSection = ({ buildingObject }) => {
  const [similarBuildingDetails, setSimilarBuildingDetails] = useState();
  const { selectedCountry } = useContext(AppContext);
  useEffect(() => {
    async function fetchAndSetSimilarBuildingsData() {
      try {
        const listingsArray = await getSimilarBuildingsDetails({
          buildingRefNumber: buildingObject.referenceNo,
          country: selectedCountry,
          state: buildingObject.state,
          area: buildingObject.area,
          propertyType: buildingObject.propertyType,
        });
        const listingsEditedArray = listingsArray.data.similarBuildingsDetails;
        // console.log('listingsEditedArray',listingsEditedArray)
        setSimilarBuildingDetails(listingsEditedArray);

        // setBuildingAgents(buildingAgents.data.agentDetails);
      } catch (error) {}
    }
    fetchAndSetSimilarBuildingsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return similarBuildingDetails ? (
    <Grid
      className="similarBuildingsSectionContainer"
      container
      rowSpacing={2}
      px={2}
      py={5}
      mt={10}
    >
      <Grid item xs={12}>
        <Typography
          className="similarBuildingsSectionHeading"
          variant="DubaiRegular24Bold"
          ml={0}
        >
          {"Similar Buildings"}
        </Typography>
      </Grid>

      <SimilarBuildings
        data={similarBuildingDetails}
        metaDataFields={similarBuildingsMetaDataFields}
        defaultItems={4}
      />
    </Grid>
  ) : null;
};

export default SimilarBuildingsSection;
