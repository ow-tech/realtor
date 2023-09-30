import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as ScrollLink } from "react-scroll";

const AmenitiesDescription = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {}, [expanded]);
  return (
    <Box
    id="amenitiesDescripBox"
    className={`amenitiesDescripBox ${expanded ? "expanded" : "collapse"}`}
  >
    <pre className={`amenitiesDescripText ${expanded ? "hidden" : ""}`}>
      <div>
        <Typography variant="DubaiRegular18">{text}</Typography>
      </div>
    </pre>
    {text.length > 550 && (
      <ScrollLink
        to="amenitiesDescripBox"
        smooth={true}
        offset={-200}
        duration={500}
      >
        <Box className="amenitiesListViewBtn" onClick={toggleExpanded}>
          <Typography variant="DubaiRegular18">
            {expanded ? "Read Less" : "Continue Reading"}
          </Typography>
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Box>
      </ScrollLink>
    )}
  </Box>
  );
};

export default AmenitiesDescription;
