import React from "react";
import { Typography, Box, Link } from "@mui/material";

const items = ["About us", "Team", "Career", "Contact Us", "Newsroom"];

function Company() {
  return (
    <Box id="footer-company-section" mt={3}>
      {items.map((item, id) => (
        <Link className="footerLinks" key={id} href="/">
          <Typography
            key={item}
            variant="DubaiRegular20"
            className="company-item company-footer-label"
          >
            {item}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Company;
