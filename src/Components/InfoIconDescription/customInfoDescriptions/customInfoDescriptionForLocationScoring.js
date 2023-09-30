import React from "react";
import { Typography, Grid } from "@mui/material";

function CustomInfoDescriptionForLocationScoring({ infoObj }) {
 
  return (

    <Grid className="InfoIconDescripContainer" container spacing={2}>
      <Grid item xs={12} width={"100px"}>
        <Typography variant="AlwynNewRoundedRegular14">{infoObj.scoreDescription}</Typography>
      </Grid>
      <Grid item>
        {Object.entries(infoObj.categories).map(([key, value], index) => (
          <Grid key={index} container spacing={2}>
            <Grid item minWidth={infoObj.categoryMinWidth}>
              <Typography variant="AlwynNewRoundedRegular14" width={"20vw"}>
                {value.range}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="AlwynNewRoundedRegular14Bold" width={"20vw"}>
                    {value.heading}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="AlwynNewRoundedRegular14" width={"20vw"}>
                    {value.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
 
}

export default CustomInfoDescriptionForLocationScoring;
