import React, { useState } from "react";
import ThumbnailCarousel from "../../../../Components/Carousel/ThumbnailCarousel";
import { floorImages } from "../../../../Constants/ConstantValues";

function BuildingOtherInfoCarousel({ buildingObject }) {
  const [carouselStep, setCarouselStep] = useState(0);
  const [floorStep, setFloorStep] = useState(0);

  return (
    <ThumbnailCarousel
      carouselStep={carouselStep}
      setCarouselStep={setCarouselStep}
      floorStep={floorStep}
      setFloorStep={setFloorStep}
      carouselImages={buildingObject.images}
      floorImages={floorImages}
      thumbnails={true}
      dark={true}
      dots={false}
      videoUrl={buildingObject.video ? buildingObject.video : null}
      // width={768}
      // height={420}
    />
  );
}

export default BuildingOtherInfoCarousel;
