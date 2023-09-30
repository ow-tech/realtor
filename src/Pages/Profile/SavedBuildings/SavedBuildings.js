import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../../context/AppContext";
import BuildingCard from "../../../Components/SimilarBuildings/BuildingCard";
import { savedAddLiked } from "../../../utils/utility";
import { Grid, Typography } from "@mui/material";

const SavedBuildings = () => {
  const context = useContext(AppContext);

  const { userPreferences, setUserPreferences } = context;
  const savedBuildings = userPreferences?.savedBuildings;
  const [savedBuilding, setSavedBuilding] = useState([]);

  useEffect(() => {
    let buildings = savedAddLiked(savedBuildings);

    const updatedData = {
      ...userPreferences,
      savedBuildings: buildings,
    };
    setUserPreferences(updatedData);
    setSavedBuilding(buildings);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSavedBuilding(userPreferences?.savedBuildings);
  }, [savedBuilding, userPreferences]);

  const metaDataFields = {
    floors: "Floors",
    units: "Units",
  };
  return (
    <>
      {savedBuilding?.length > 0 ? (
        <Grid container spacing={1}>
          {savedBuilding?.map((building) => {
            return (
              <BuildingCard
                key={building.buildingReferenceId}
                building={building}
                metaDataFields={metaDataFields}
                defaultItems={4}
                hasHeart
              />
            );
          })}
        </Grid>
      ) : (
        <Typography mt={4}>No record found!</Typography>
      )}
    </>
  );
};

export default SavedBuildings;
