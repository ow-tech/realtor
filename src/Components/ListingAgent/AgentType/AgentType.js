import React from "react";
import { Grid, IconButton } from "@mui/material";
import { agentSectionTypes } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";

import { Designation } from "../Designation/Designation";
import { AgentDetails } from "../AgentDetails/AgentDetails";
import ImageFrame from "../../ImageFrame/ImageFrame";
import { objToBase64 } from "../../../utils/utility";

function AgentType({ agentName, agentData, hasHeart, liked, handleLike }) {
  const agentDataB64 = objToBase64(agentData);

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid container item xs={12} lg={6} justifyContent={"center"} textAlign={"center"}>
        <Grid className="agentImageWrapper" item xs={6} md={12}>
          <Grid className="agentImageOverlay upperBoxListingCardIconContainer">
            {hasHeart && (
              <Grid item>
                <IconButton className="upperBoxListingCardIcon" onClick={() => handleLike()}>
                  <ListingCardIcon shape={liked ? "alreadyLiked" : "like"} />
                </IconButton>
              </Grid>
            )}
          </Grid>
          <Grid>
            <Link to={`/agent-profile/${agentName}?agent=${agentDataB64}`} state={{ agentData }}>
              <ImageFrame src={agentData.imageUrl} width={"100%"} height={""} alt={agentName} imageStyleClass={"agentTypeImageFrameImageStyle "} />
            </Link>
          </Grid>
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
          <Designation name={`${agentData.firstName} ${agentData.lastName}`} designation={agentData?.designation} nameTypoVariant={"DubaiRegular20Bold"} designationTypoVariant={"DubaiRegular18"} />
        </Grid>
      </Grid>
      <Grid container item xs={6} md={12} lg={6}>
        <AgentDetails agentName={agentName} agentData={agentData} sectionType={agentSectionTypes.agentSection} />
      </Grid>
    </Grid>
  );
}
export default AgentType;
