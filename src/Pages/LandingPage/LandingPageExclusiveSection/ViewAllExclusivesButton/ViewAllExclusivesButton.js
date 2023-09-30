import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";
import { objToBase64 } from "../../../../utils/utility";
import AppContext from "../../../../context/AppContext";

function ViewAllExclusivesButton() {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState(true);
  const { selectedCountry } = useContext(AppContext);

  const navigate = useNavigate();
  const handleMouseEvent = () => {
    setExclusivesButtonHovered(!exclusivesButtonHovered);
  };

  const handleClick = (event, value) => {
    // console.log('have ben cleked')
    // setBuyOrRent(value)
    const obj = {
      state: "All",
      country: selectedCountry,
      exclusives: true,
    };
    const queryParamValue = objToBase64(obj);
    navigate(`/buy/search?value=${queryParamValue}`);
  };

  return (
    <Box className="viewAllExclusivesButtonWrapper">
      <CustomButton
        text="View all Exclusives"
        rightIcon={<ButtonRightArrow />}
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
        dark={exclusivesButtonHovered}
        variant="outlined"
        customClassName="viewAllExclusiveButton"
        onClick={handleClick}
        textIconSpacingClass={2}
      />
    </Box>
  );
}

export default ViewAllExclusivesButton;
