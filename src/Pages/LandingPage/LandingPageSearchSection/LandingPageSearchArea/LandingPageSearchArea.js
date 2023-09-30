import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Box, Grid, Typography } from "@mui/material";
import BuyOrRentToggleButtom from "../BuyOrRentToggleButtom/BuyOrRentToggleButtom";
import AgentSearchForm from "../SearchForm/AgentSearchForm";
import { isEqual } from "lodash";

function LandingPageSearchArea({ heading, hasBuyRent, page, setLoading, loading }) {
  return (
    <>
      <Box className="landingPageSearchArea">
        <Grid container justifyContent={"center"} spacing={2}>
          <Grid item>
            <Typography variant="GothamBlack36" className="findYourHome">
              {heading}
            </Typography>
          </Grid>

          <Grid container item justifyContent="space-evenly" spacing={0.25}>
            {hasBuyRent && (
              <Grid item xs={11}>
                <BuyOrRentToggleButtom />
              </Grid>
            )}

            <Grid item xs={11}>
              {isEqual(page, "findAgent") ? <AgentSearchForm  setLoading={setLoading} loading={loading} /> : <SearchForm setLoading={setLoading} loading={loading} />}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LandingPageSearchArea;
