import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const AgentImage = ({ imgPath, imgLabel, imgCustomClass, height }) => {
  return <LazyLoadImage className={`popUpListingAgentImage ${imgCustomClass}`} src={imgPath} alt={imgLabel} width={"100%"} height={height} />;
};
