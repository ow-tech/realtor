import React from "react";
import CustomButton from "../Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Box } from "@mui/material";
import { ButtonLeftArrow } from "../../Assets/SVG/Common/CommonSvgs";

function ErrorBoundaryFallBack({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  const goToPageOnClick = () => {
    navigate("/");
    navigate(0);
  };
  return (
    <Box className="errorBoundaryWrapper">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={20}
      >
        <Grid item>
          <Typography variant="GothamBlack20Bold">
            Oops! Something went wrong
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <CustomButton
            onClick={goToPageOnClick}
            text="Back to home"
            leftIcon={<ButtonLeftArrow />}
          />
        </Grid>
        <Grid item xs={3}>
          <details
            style={{ whiteSpace: "pre-wrap", color: "black" }}
            className="title"
          >
            {error &&
              (typeof error === "object" &&
              error !== null &&
              Object.keys(error).length === 0
                ? "Empty Error Object"
                : error.toString())}
            <br />
            {error && error.message}
          </details>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ErrorBoundaryFallBack;
