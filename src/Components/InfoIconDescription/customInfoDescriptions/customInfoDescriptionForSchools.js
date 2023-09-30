import React from "react";
import InfoIconDescription from "../InfoIconDescription";
import { Typography, Grid } from "@mui/material";

function customInfoDescriptionForSchools({ infoObj }) {
  const Description = () => {
    return (
      <Grid>
        <Grid item xs={12} p={1} pb={0}>
          <Typography variant="AlwynNewRoundedRegular14" paragraph={true} width={"20vw"}>
            {infoObj.topDescription}
          </Typography>
        </Grid>
        <Grid className="nearbySchoolsRatingsCategory" item xs={12}>
          <Grid bgcolor={infoObj.headingBgColor} color={infoObj.headingColor} item xs={12} px={1}>
            <Typography variant="DubaiRegular18Bold" paragraph={true} width={"20vw"}>
              {infoObj.mainHeading}
            </Typography>
          </Grid>
          <Grid item>
            {Object.entries(infoObj.categories).map(([key, value], index) => (
              <Grid key={index} container bgcolor={index % 2 !== 0 ? "#EFEFEF " : "transparent"} p={1} alignItems={"flex-start"}>
                <Grid item minWidth={infoObj.categoryMinWidth}>
                  <Typography variant="AlwynNewRoundedRegular14" width={"20vw"}>
                    {key}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="AlwynNewRoundedRegular14" width={"20vw"}>
                    {value}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} p={1} pb={0}>
          <Grid item xs={12}>
            <Typography variant="AlwynNewRoundedRegular14Bold" paragraph={true} width={"20vw"}>
              {infoObj.ratingMethodHeading}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="AlwynNewRoundedRegular14" paragraph={true} width={"20vw"}>
              {infoObj.ratingMethodDesc}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return <InfoIconDescription heading={infoObj.heading} description={<Description />} isCustom={true} />;
}

export default customInfoDescriptionForSchools;
