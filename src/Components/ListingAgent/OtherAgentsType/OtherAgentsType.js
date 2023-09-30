import React, { useState } from "react";
import { Typography, Dialog, Grid, IconButton } from "@mui/material";
import CustomButton from "../../Button/CustomButton";
import { agentSectionTypes } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";
import { AgentDetails } from "../AgentDetails/AgentDetails";
import ImageFrame from "../../ImageFrame/ImageFrame";
import { objToBase64 } from "../../../utils/utility";

function OtherAgentsType({ agentName, agentData, hasHeart, liked, handleLike }) {
  const [open, setOpen] = useState(false);
  const agentDataB64 = objToBase64(agentData);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={5} md={6}>
        <Grid item className="agentImageWrapper">
          <Grid className="agentImageOverlay upperBoxListingCardIconContainer">
            {hasHeart && (
              <Grid item>
                <IconButton className="upperBoxListingCardIcon" onClick={() => handleLike()}>
                  <ListingCardIcon shape={liked ? "alreadyLiked" : "like"} />
                </IconButton>
              </Grid>
            )}
          </Grid>

          <Grid item xs>
            <Link to={`/agent-profile/${agentName}?agent=${agentDataB64}`} state={{ agentData }}>
              <ImageFrame src={agentData.imageUrl} width={"100%"} height={""}  alt={agentName} imageStyleClass={"otherAgentTypeImageFrameImageStyle "} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} sm={5} md={6} >
        <Grid container height={"100%"} alignContent={"space-between"}>
          <Grid item xs={12} sm={6}md={8}>
            <AgentDetails agentName={agentName} agentData={agentData} sectionType={agentSectionTypes.otherAgents} />
          </Grid>
          <Grid item xs={8} sm={8} md={10} lg={9}>
            <CustomButton
              customClassName="viewBookingDetailsBtn"
           
              text={"Book a Viewing"}
              typographyVariant="DubaiRegular16"
              rightIcon={<ListingCardIcon shape={"arrowRight"} />}
            />
        
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default OtherAgentsType;
