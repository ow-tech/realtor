import React, { useContext } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import _ from "lodash";
import AppContext from "../../../../context/AppContext";

export const ArrangeRowsCols = (linksArr, colSize, clickHandler) => {
  const { selectedCountry, buyOrRent } = useContext(AppContext);

  let size = colSize;

  const linkColumns = [];

  if (!_.isArray(linksArr)) {
    return linkColumns;
  }
  if (!_.isNumber(colSize)) {
    size = 0;
    return size;
  }

  for (let i = 0; i < linksArr.length; i += size) {
    const columnLinks = linksArr.slice(i, i + size);

    const column = (
      <Grid item xs={12} sm={4} md={4} key={i}>
        <Box className="boxColAlign">
          {columnLinks.map((item, id) => {
            return (
              // link now runs click handler, if you want behaviour such as navigate, execute it in the handler passed
              <Link
                key={id}
                // href={"/"}
                className="seoLinksUnderline"
                onClick={() => {
                  //build data to be passed
                  item.searchFilterObj.country = selectedCountry;
                  item.searchFilterObj.buyOrRent = buyOrRent;
                  clickHandler(item.searchFilterObj);
                }}
              >
                <Typography color="white" variant="DubaiRegular20">
                  {item.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Grid>
    );

    linkColumns.push(column);
  }
  return linkColumns;
};
