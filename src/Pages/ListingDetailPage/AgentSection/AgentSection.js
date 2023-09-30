import React, { useState, useEffect } from "react";
import { Typography, Grid, Divider, Box } from "@mui/material";
import ContactAgent from "../../../Components/ContactAgent/ContactAgent";
import { agentSectionTypes } from "../../../Constants/ConstantValues";
import { getAgentDetails } from "../../../network/apiServices";
import ListingAgent from "../../../Components/ListingAgent/ListingAgent";
import { AgentDetails } from "../../../Components/ListingAgent/AgentDetails/AgentDetails";
import { agentDetail } from "../../../Constants/agentDetails";
function AgentSection({ agentDetails, propertyDetails }) {
  const [agentData, setAgentData] = useState(null);

  useEffect(() => {
    // async function getAgentData() {
    //   try {
    //     const agent = await getAgentDetails({
    //       agentEmail: [agentDetails.email],
    //     });
    //     setAgentData(agent.data.agentDetails[0]);
    //   } catch (error) {
    //     // console.error("Error fetching agent:", error);
    //   }
    // }

    // getAgentData();
    setAgentData(agentDetail[0])
  }, [agentDetails]);

  return (
    <Box className="agentSectionContainer">
      <Grid
        id="agentSection"
        container
        spacing={2}
        justifyContent={"space-between"}
        px={{ xs: 5, sm: 10, md: 15, lg: 20 }}
      >
        {agentData && (
          <Grid item xs={12} md={6}>
            <Grid item xs={12} mb={2}>
              <Typography
                className="contactAgentSectionHeading"
                variant="GothamBlack24"
                ml={0}
              >
                Listing Agent
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <ListingAgent
                agentData={agentData}
                sectionType={agentSectionTypes.otherAgents}
                hasHeart={false}
              />
            </Grid>
          </Grid>
        )}
        <Grid item>
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid item xs={12} mb={2}>
            <Typography
              className="contactAgentSectionHeading"
              variant="GothamBlack24"
              ml={0}
            >
              Contact Agent
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <ContactAgent propertyDetails={propertyDetails} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default AgentSection;
