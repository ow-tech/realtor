import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

const BuildingClassificationSystem = () => {
  return (
    <Stack direction={"column"} spacing={1}>
      <Typography variant="DubaiRegular16">
        Building classifications usually categorize office buildings only.
        Unfortunately, there are no international standards established. There
        are 4 categories used for a distinction of commercial buildings: Class A
        to Class D. A building’s classification is relative to other buildings
        in any given market. Such a classification system does not exist for the
        residential property market.
      </Typography>
      <Typography variant="DubaiRegular16">
        To help the various actors in Dubai’s residential real estate market
        such as buyers, tenants and agents we have developed a classification
        system for residential buildings.
      </Typography>
      <Typography variant="DubaiRegular16">
        We have defined 10 main classes for residential buildings, with Class
        AAA being the highest class and Class D being the lowest:
      </Typography>

      <Grid container>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">AAA</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">BBB</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">CCC</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">D</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">AA</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">BB</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">CC</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16"></Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">A</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">B</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16">C</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="DubaiRegular16"></Typography>
        </Grid>
      </Grid>
      <Typography variant="DubaiRegular16">
      A + or - added to class can specify that a building is remarkably close to a higher or lower class. Learn more about the NEWTON Building Classification System in our Explore section.
      </Typography>
    </Stack>
  );
};

export default BuildingClassificationSystem;
