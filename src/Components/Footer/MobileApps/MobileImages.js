import React from "react";
import { Link, Box } from "@mui/material";

const MobileImages = (props) => {
  return (
    <>
      <Box>
        <Link
          href="/"
          target="_blank"
          color="inherit"
          key={props.name}
          mr={1}
          style={{ cursor: "pointer" }}
        >
          {props.icon}
        </Link>
      </Box>
    </>
  );
};

export default MobileImages;
