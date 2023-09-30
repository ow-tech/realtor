import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TimerLoadingSkeleton({
  customClass = "loaderWrapperWhiteBackground",
  customClassLoader = "loaderForWhiteBackground",
  loadTime = 35000, // 35 seconds,
  specialMessage,
}) {
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate(); // Get the history object from react-router-dom

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (specialMessage) {
        setShowMessage(true);
      } else {
        navigate("*");
      }
    }, loadTime);

    return () => clearTimeout(timeout);
  }, [navigate, specialMessage, loadTime]);

  return showMessage ? (
    <Typography variant="AlwynNewRoundedRegular16" ml={2} mt={1}>
      No records found.
    </Typography>
  ) : (
    <Box className={`loaderWrapper ${customClass}`}>
      <span className={`loader ${customClassLoader}`}></span>
    </Box>
  );
}

export default TimerLoadingSkeleton;
