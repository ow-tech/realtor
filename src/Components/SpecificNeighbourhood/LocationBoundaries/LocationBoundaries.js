import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const LocationBoundaries = ({ neighbourhood, map, neighbours }) => {
  return (
    <div>
      <Stack direction="column" spacing={2} mt={1}>
        <Typography variant="GothamBlack24">Location</Typography>
        <Typography variant="DubaiRegular14">
          UAE > Dubai > {neighbourhood}
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <Box
              component="img"
              width="100%"
              src={map}
              alt="background Image"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4.5}
            ml={1.5}
            className="specificNeighbourBoundaries"
          >
            <Typography variant="DubaiRegular24Bold">Boundaries</Typography>
            <Stack direction="column" my={1}>
              <Typography variant="DubaiRegular18Bold">NORTH</Typography>
              <Typography variant="DubaiRegular18" className="underlineText">
                {neighbours.north}
              </Typography>
            </Stack>
            <Stack direction="column" my={1}>
              <Typography variant="DubaiRegular18Bold">WEST</Typography>
              <Typography variant="DubaiRegular18" className="underlineText">
                {neighbours.west}
              </Typography>
            </Stack>
            <Stack direction="column" my={1}>
              <Typography variant="DubaiRegular18Bold">SOUTH</Typography>
              <Typography variant="DubaiRegular18" className="underlineText">
                {neighbours.south}
              </Typography>
            </Stack>
            <Stack direction="column" my={1}>
              <Typography variant="DubaiRegular18Bold">EAST</Typography>
              <Typography variant="DubaiRegular18" className="underlineText">
                {neighbours.east}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default LocationBoundaries;
