import React from "react";
import Skeleton from "@mui/material/Skeleton";

const ExclusiveCardSkeleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="contentWrapper">
        <Skeleton variant="rectangular" className="boxSkeleton" />
        <Skeleton variant="rectangular" className="boxSkeleton" />
      </div>
      <Skeleton variant="rectangular" className="lineSkeleton" />
      <Skeleton variant="rectangular" className="lineSkeleton" />
    </div>
  );
};

export default ExclusiveCardSkeleton;
