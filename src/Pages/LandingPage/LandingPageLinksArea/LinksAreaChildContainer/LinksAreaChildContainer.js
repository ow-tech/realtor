import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ArrangeRowsCols } from "../CommonFunctions/CommonFunctions";

const LinksAreaChildContainer = ({ heading, subHeading, links, colSize, clickHandler }) => {
  let linksCol = ArrangeRowsCols(links, colSize, clickHandler);
  return (
    <Box className="boxColAlign" mb={9}>
      <Typography color="white" variant="GothamBlack26">
        {heading}
      </Typography>

      <Typography color="white" variant="DubaiRegular20">
        {subHeading}
      </Typography>
      <Grid container spacing={2} mt={2}>
        {linksCol}
      </Grid>
    </Box>
  );
};

export default LinksAreaChildContainer;
