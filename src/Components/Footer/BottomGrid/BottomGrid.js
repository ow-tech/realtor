import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FlagRenderValue } from "../../FlagRenderValue/FlagRenderValue";

function BottomGrid() {
  return (
    <Grid container className="bottomGridFooter" mt={7} pb={3} px={9}>
      <Grid item xs={12} sm={6}>
        <Typography variant="DubaiRegular18" gutterBottom>
          Copyright © 2021-{new Date().getFullYear()} MANSEEL. All
          rights reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography
          variant="DubaiRegular16"
          align="center"
          className="bottomGridFooter-links"
        >
          <Link href="/" className="bottomGridFooter-links">
            Terms of use
          </Link>
          {" | "}
          <Link href="/" className="bottomGridFooter-links">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/" className="bottomGridFooter-links">
            Legal
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} className="footer-flag">
        <FlagRenderValue value={"United Arab Emirates"} />
      </Grid>
    </Grid>
  );
}

export default BottomGrid;
