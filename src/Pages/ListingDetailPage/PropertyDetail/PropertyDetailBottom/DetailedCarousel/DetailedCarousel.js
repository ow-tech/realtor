import React, { useEffect } from "react";
import ThumbnailCarousel from "../../../../../Components/Carousel/ThumbnailCarousel";


const DetailedCarousel = ({ listingId, property }) => {
  const [carouselStep, setCarouselStep] = React.useState(0);
  const [floorStep, setFloorStep] = React.useState(0);
  const [floorImages, setFloorImages] = React.useState([]);
  const [carouselImages, setCarouselImages] = React.useState([]);
  const [isLoading, setIsLoading]=React.useState(false)



  useEffect(() => {
    setIsLoading(true)
    const separateImages = () => {
      
      const floorsImages = property?.images.filter((image) =>
        image.imgPath.includes("Floor%20Plan")
      );
  
      const nonFloorImages = property?.images.filter(
        (image) => !image.imgPath.includes("Floor%20Plan")
      );
    
      return { floorsImages, nonFloorImages };
    };
    const { floorsImages, nonFloorImages } = separateImages();
    setFloorImages(floorsImages);
    setCarouselImages(nonFloorImages);
    setIsLoading(false)
  }, [property]);


  return isLoading?
null
:
<ThumbnailCarousel
carouselStep={carouselStep}
setCarouselStep={setCarouselStep}
floorStep={floorStep}
setFloorStep={setFloorStep}
carouselImages={carouselImages}
floorImages={floorImages} // Use the separated images here
thumbnails={true}
dark={true}
dots={false}
videoUrl={property?.video}
// width={768}
// height={420}
/>
  ;
};

export default DetailedCarousel;
