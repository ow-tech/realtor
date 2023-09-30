import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import ListingAgent from "../ListingAgent/ListingAgent";
import { agentSectionTypes } from "../../Constants/ConstantValues";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function OtherAgents({ title, agents }) {
  const [expanded, setExpanded] = useState(false);

  const visibleData = expanded ? agents : agents.slice(0, 3);
  const onMore = () => {
    setExpanded(!expanded);
  };
  //retrive agent details
  // console.log(agents);
  return (
    <Grid id="otherAgents" className="otherAgentsSection" container justifyContent={"center"}>
      <Grid item xs={10}>
        <Grid item xs={12} my={2}>
          <Typography className="contactAgentSectionHeading" variant="DubaiRegular24Bold" ml={0}>
            {title}
          </Typography>
        </Grid>
        <Grid container rowSpacing={5}>
          {/* change to map through all agents */}
          {visibleData.map((agent, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <ListingAgent agentData={agent} sectionType={agentSectionTypes.otherAgents} hasHeart={false} />
            </Grid>
          ))}

          {agents.length > 3 && (
            <Grid container alignItems="center" spacing={1} onClick={onMore}>
              <Grid item>
                <Typography variant="AlwynNewRoundedRegular20" ml={0}>
                  {expanded ? "View less" : "View more"}
                </Typography>
              </Grid>
              <Grid item mt={expanded ? 0 : 1}>
                <ListingCardIcon shape={expanded ? "arrowDown" : "arrowRight"} color={"black"} width={"15"} height={"12"} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default OtherAgents;
