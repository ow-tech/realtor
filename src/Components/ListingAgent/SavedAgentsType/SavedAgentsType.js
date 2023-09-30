import React, { useState } from "react";
import { Typography, Dialog, Grid, IconButton } from "@mui/material";
import CustomButton from "../../Button/CustomButton";
import { agentSectionTypes } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";
// import { AgentImage } from "../AgentImage/AgentImage";
import { AgentDetails } from "../AgentDetails/AgentDetails";
import ImageFrame from "../../ImageFrame/ImageFrame";
import { objToBase64 } from "../../../utils/utility";

function SavedAgentsType({ agentName, agentData, hasHeart, liked, handleLike }) {
  const [open, setOpen] = useState(false);
  const agentDataB64 = objToBase64(agentData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={5} sm={4} md={5}>
        <Grid item xs={12} className="agentImageWrapper">
          <Grid className="agentImageOverlay upperBoxListingCardIconContainer">
            {hasHeart && (
              <Grid item>
                <IconButton className="upperBoxListingCardIcon" onClick={() => handleLike()}>
                  <ListingCardIcon shape={liked ? "alreadyLiked" : "like"} />
                </IconButton>
              </Grid>
            )}
          </Grid>

          <Grid item>
            <Link to={`/agent-profile/${agentName}?agent=${agentDataB64}`} state={{ agentData }}>
              <ImageFrame src={agentData.imageUrl} width={"100%"} height={""} alt={agentName} imageStyleClass={"savedAgentsTypeImageFrameImageStyle "} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <Grid container height={"100%"} alignContent={"space-between"}>
          <Grid item xs={12} md={8}>
            <AgentDetails agentName={agentName} agentData={agentData} sectionType={agentSectionTypes.savedAgents} />
          </Grid>
          <Grid item xs={5} sm={10}>
            <CustomButton
              customClassName="viewBookingDetailsBtn"
              // onClick={handleClickOpen}
              text={"Get in contact"}
              typographyVariant="DubaiRegular16"
              rightIcon={<ListingCardIcon shape={"arrowRight"} />}
            />
            {/* <Dialog open={open} onClose={handleClose}>
              <Typography sx={{ p: 2 }}>Coming Soon</Typography>
            </Dialog> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SavedAgentsType;
