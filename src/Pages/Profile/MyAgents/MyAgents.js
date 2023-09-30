import React, { useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ListingAgent from "../../../Components/ListingAgent/ListingAgent";
import { agentSectionTypes } from "../../../Constants/ConstantValues";
import AppContext from "../../../context/AppContext";
import { savedAddLiked } from "../../../utils/utility";

const MyAgents = () => {
  const context = useContext(AppContext);
  const { userPreferences, setUserPreferences } = context;
  const savedAgents = userPreferences?.savedAgents;

  useEffect(() => {
    let agents = savedAddLiked(savedAgents);

    const updatedData = {
      ...userPreferences,
      savedAgents: agents,
    };
    setUserPreferences(updatedData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {savedAgents?.length > 0 ? (
        <Grid container rowSpacing={5}>
          {savedAgents?.map((agent, index) => (
            <Grid key={index} item xs={12} md={6}>
              <ListingAgent
                agentData={agent}
                sectionType={agentSectionTypes.savedAgents}
                hasHeart
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography mt={4}>No record found!</Typography>
      )}
    </>
  );
};

export default MyAgents;
