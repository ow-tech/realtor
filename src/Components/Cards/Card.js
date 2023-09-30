import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import CardContent from "./CardContent/CardContent";
import { Box } from "@mui/material";

function Card({
  onClick,
  item,
  width = 768,
  height = 500,
  availableGrids = 4,
  cardContentAlignment,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Box
        className={`cardBoxWrapperContainer ${
          isHovered ? "listingCardHovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box className="cardBoxWrapper">
          <CardContent
            item={item}
            isHovered={isHovered}
            cardContentAlignment={cardContentAlignment}
          />
          <Carousel
            dots={false}
            images={item?.images}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            width={width}
            height={height}
            availableGrids={availableGrids}
            customState={`/listing/${item?.area}/${
              item.referenceNumber
                ? item.referenceNumber
                : item.listingReferenceId
            }`}
          />
        </Box>
      </Box>
    </>
  );
}

export default Card;
