import React from "react";
import { Typography, Grid } from "@mui/material";
import { isEqual } from "lodash";
import { agentSectionTypes, defaultAgentContactNumber, defaultAgentContactEmail, notAvailable } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Designation } from "../Designation/Designation";

export const AgentDetails = ({ agentName, agentData, sectionType }) => {
  // console.log('agentData',agentData)
  return isEqual(sectionType, agentSectionTypes.agentSection) ? (
    <Grid item xs={12}>
      <Grid container spacing={1}>
        
        <Grid item xs={12}>
          <Typography variant="DubaiRegular16" className="colorBlack">
            RERA No. {agentData?.brn ? agentData.brn : null}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {agentData?.certifications
            ? agentData.certifications.map((certification, index) => {
                return <ListingCardIcon key={index} shape={certification} width="35" height="35" />;
              })
            : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="DubaiRegular16" className="colorBlack">
            {agentData?.languageSpoken ? agentData.languageSpoken.join(", ") : null}
          </Typography>
        </Grid>
        <Grid container item rowSpacing={{ xs: 2, lg: 4 }} xs={12}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular16" className="colorBlack">
                Area: {agentData?.areasOfExpertise ? agentData.areasOfExpertise.join(", ") : notAvailable}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular16" className="colorBlack">
                Specialization: {agentData?.specialization ? agentData.specialization : notAvailable}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular16" className="colorBlack agent-details-agent-email">
                {agentData?.emailId ? agentData.emailId : defaultAgentContactEmail}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular16" className="colorBlack agent-details-agent-phone">
                {agentData?.workPhone ? `+${agentData.workPhone}` : defaultAgentContactNumber}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : isEqual(sectionType, agentSectionTypes.savedAgents) ? (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Designation name={agentName} designation={agentData?.designation} nameTypoVariant={"DubaiRegular16Bold"} designationTypoVariant={"DubaiRegular14"} />
        </Grid>
        <Grid container item spacing={1} xs={12}>
          {agentData?.certifications
            ? agentData.certifications.map((certification, index) => {
                return (
                  <Grid key={index} item>
                    <ListingCardIcon shape={certification} width="35" height="35" />
                  </Grid>
                );
              })
            : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="DubaiRegular14" className="colorBlack">
            {agentData?.languageSpoken ? agentData.languageSpoken.join(", ") : null}
          </Typography>
        </Grid>
        <Grid container item rowSpacing={{ xs: 2, lg: 4 }} xs={12}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular12" className="colorBlack agent-details-agent-email">
                {agentData?.emailId ? agentData.emailId : agentData?.agentEmail ? agentData?.agentEmail : defaultAgentContactEmail}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular12" className="colorBlack agent-details-agent-phone">
                {agentData?.workPhone ? `+${agentData.workPhone}` : defaultAgentContactNumber}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Designation name={agentName} designation={agentData?.designation} nameTypoVariant={"DubaiRegular16Bold"} designationTypoVariant={"DubaiRegular14"} />
        </Grid>
        <Grid container item spacing={1} xs={12}>
          {agentData?.certifications
            ? agentData.certifications.map((certification, index) => {
                return (
                  <Grid key={index} item>
                    <ListingCardIcon shape={certification} width="35" height="35" />
                  </Grid>
                );
              })
            : null}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="DubaiRegular14" className="colorBlack">
            {agentData?.languageSpoken ? agentData.languageSpoken.join(", ") : null}
          </Typography>
        </Grid>
        <Grid container item rowSpacing={{ xs: 2, lg: 4 }} xs={12}>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular12" className="colorBlack agent-details-agent-phone">
                {agentData?.emailId ? agentData.emailId : defaultAgentContactEmail}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="DubaiRegular12" className="colorBlack agent-details-agent-email">
                {agentData?.workPhone ? `+${agentData.workPhone}` : defaultAgentContactNumber}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
