import React from "react";
import { Box } from "@mui/material";

function LoadingSkeleton({
  customClass = "loaderWrapperWhiteBackground",
  customClassLoader = "loaderForWhiteBackground",
}) {
  return (
    <Box className={`loaderWrapper ${customClass}`}>
      <span className={`loader ${customClassLoader}`}></span>
    </Box>
  );
}

export default LoadingSkeleton;
