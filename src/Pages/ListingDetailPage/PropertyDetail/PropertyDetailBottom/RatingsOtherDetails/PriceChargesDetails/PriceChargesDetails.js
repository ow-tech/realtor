import React from "react";
import { Divider, Grid } from "@mui/material";
import { PriceChargesGrid } from "./PriceChargesGrid";

const PriceChargesDetails = ({ data }) => {

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Divider orientation="horizontal" flexItem />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {PriceChargesGrid(item.label, item.value, item.description)}
          </Grid>
        </React.Fragment>
      ))}
      <Divider orientation="horizontal" flexItem />
    </>
  );
};

export default PriceChargesDetails;
