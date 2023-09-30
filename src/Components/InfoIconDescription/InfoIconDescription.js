import React from "react";
import { Box, Typography } from "@mui/material";
import TableComponent from "./TableComponent/TableComponent";
import ObjectComponent from "./TableComponent/ObjectComponent/ObjectComponent";

const InfoIconDescription = ({
  heading,
  headingColor,
  description,
  isTable,
  isObject,
  isCustom,
}) => {
  return (
    <>
      {isCustom ? (
        description
      ) : isTable || description.isTable ? (
        <TableComponent />
      ) : description.isObject || isObject ? (
        <Box className="InfoIconDescriptionContainer">
          <Box bgcolor={headingColor} className="InfoIconDescripTop">
            <Typography variant="DubaiRegular18Bold">{heading}</Typography>
          </Box>
          <ObjectComponent />
        </Box>
      ) : (
        <Box className="InfoIconDescriptionContainer">
          <Box bgcolor={headingColor} className="InfoIconDescripTop">
            <Typography variant="DubaiRegular18Bold">{heading}</Typography>
          </Box>
          <Box className="InfoIconDescripBottom">{description}</Box>
        </Box>
      )}
    </>
  );
};

export default InfoIconDescription;
