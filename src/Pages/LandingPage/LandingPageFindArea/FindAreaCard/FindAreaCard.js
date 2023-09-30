import React, { useContext } from "react";
import { Box, Typography, Link } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AppContext from "../../../../context/AppContext";
import { objToBase64 } from "../../../../utils/utility";
import { isEqual } from "lodash";

const FindAreaCard = ({ imgLabel, imgPath, link, toSpecificNeighbourHood }) => {
  const { buyOrRent, selectedCountry } = useContext(AppContext);
  const queryParamValue = objToBase64({
    key: "Area",
    value: isEqual(imgLabel, "Meydan") ? "Al Meydan" : imgLabel,
    buyOrRent: buyOrRent,
    country: selectedCountry,
  });
  return (
    <Link href={toSpecificNeighbourHood?link:`/${buyOrRent}/search?value=${queryParamValue}`}>
      <Box className="findAreaBox">
        <Box className="findAreaOpacity"></Box>
        <LazyLoadImage effect="opacity" src={imgPath} alt={imgLabel} className="findAreaImg" />
        <Typography variant="GothamBlack27" className="findAreaTypography">
          {imgLabel}
        </Typography>
      </Box>
    </Link>
  );
};

export default FindAreaCard;
