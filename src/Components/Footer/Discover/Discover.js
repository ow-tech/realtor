import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
import { objToBase64 } from "../../../utils/utility";

const items = [
  { name: "Exclusives", path: "/" },
  { name: "Commercial", path: "/commercial" },
  { name: "New Developments", path: "/new-developments" },
  { name: "Find an agent", path: "/find-an-agent" },
  { name: "Area Guides", path: "/city-guides" },
  { name: "AREICO Institute", path: "/AREICO-institute" },
  { name: "Mortgage Calculator", path: "/mortgages" },
  { name: "Market Research", path: "" },
  { name: "Signature", path: "" },
  { name: "Building Classification", path: "/building-classification" },
];

function Discover() {
  const navigate = useNavigate();
  const handleExclusives = (path) => {
    const queryParamValue = objToBase64({ exclusives: true });
    navigate(`/buy/search?value=${queryParamValue}`);
  };
  return (
    <Box mt={3}>
      {items.map((item, id) =>
        isEqual(item.name, "Exclusives") ? (
          <Link className="footerLinks" key={id} onClick={() => handleExclusives(item.path)}>
            <Typography key={item} variant="DubaiRegular20" className="company-item">
              {item.name}
            </Typography>
          </Link>
        ) : (
          <Link className="footerLinks" key={id} href={item.path}>
            <Typography key={item} variant="DubaiRegular20" className="company-item">
              {item.name}
            </Typography>
          </Link>
        )
      )}
    </Box>
  );
}

export default Discover;
