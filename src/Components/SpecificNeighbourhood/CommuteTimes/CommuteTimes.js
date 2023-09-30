import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";

const CommuteTimes = ({ commutes }) => {
  return (
    <div>
      <Typography variant="GothamBlack24">Commute Times</Typography>
      <Grid container mt={1} spacing={2}>
        {commutes.map((commute, i) => {
          return (
            <Grid key={i} item xs={12} sm={4}>
              <Box className="commuteTimeHeading">
                <Typography variant="DubaiRegular18Bold">
                  {commute.name}
                </Typography>
              </Box>
              <Stack direction="row">
                <Stack direction="column" mr={1}>
                  <Typography variant="DubaiRegular18Bold">Distance</Typography>
                  <Typography variant="DubaiRegular18Bold">By Car</Typography>
                  <Typography variant="DubaiRegular18Bold">
                    By Metro/Bus
                  </Typography>
                  <Typography variant="DubaiRegular18Bold">
                    By Walking
                  </Typography>
                </Stack>

                <Stack direction="column">
                  <Typography variant="DubaiRegular18">
                    {commute.distance}
                  </Typography>
                  <Typography variant="DubaiRegular18">
                    {commute.car}
                  </Typography>
                  <Typography variant="DubaiRegular18">
                    {commute.metro}
                  </Typography>
                  <Typography variant="DubaiRegular18">
                    {commute.walking
                      ? commute.walking
                      : "don't even think about it"}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CommuteTimes;
