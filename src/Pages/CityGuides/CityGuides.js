import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { citiesSearchOPtions } from "../../Constants/ConstantValues";
import SearchBuildingGuide from "../../Components/SearchBuildingGuide/SearchBuildingGuide";
import ElevenGalleryLayout from "../../Components/Gallery/ElevenGalleryLayout/ElevenGalleryLayout";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import isEqual from "lodash/isEqual";
import { useNavigate } from "react-router-dom";


const thingsToLoveImages = [
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/dubaiCity.jpg",
    title: "Dubai",
    buildingRefNumber: 99887876,
    buildingName: "Dubai",
    comingSoon: false,
    link:'/desirableNeighborhood/Dubai/99887876'
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/ajmanCity.jpg",
    title: "Ajman",
    buildingRefNumber: 99887876,
    buildingName: "Ajman",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/sharjahCity.jpg",
    title: "Sharjah",
    buildingRefNumber: 99887876,
    buildingName: "Sharjah",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/abudhabiCity.jpg",
    title: "Abu Dhabi",
    buildingRefNumber: 99887876,
    buildingName: "Abu Dhabi",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/fujairahCity.jpg",
    title: "Fujairah",
    buildingRefNumber: 99887876,
    buildingName: "Fujairah",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/rasAlKhaimaCity.jpg",
    title: "Ras Al Khaima",
    buildingRefNumber: 99887876,
    buildingName: "Ras Al Khaima",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/umAlQuainCity.jpg",
    title: "Umm Al Quin",
    buildingRefNumber: 99887876,
    buildingName: "Umm Al Quin",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/alAinCity.jpg",
    title: "Al Ain",
    buildingRefNumber: 9988787687876,
    buildingName: "Al Ain",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/khorFakkanCity.jpg",
    title: "Khor Fakkan",
    buildingRefNumber: 99887876,
    buildingName: "Khor Fakkan",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/hattaCity.jpg",
    title: "Hatta",
    buildingRefNumber: 99887876,
    buildingName: "Hatta",
    comingSoon: true,
  },
  {
    imageUrl:
      "https://ik.imagekit.io/valcom123/images/manseel/CityGuide/kalbaCity.jpg",
    title: "Kalba",
    buildingRefNumber: 99887876,
    buildingName: "Kalba",
    comingSoon: true,
  },

  // Add more image objects here
];

function CityGuides() {
  const navigate = useNavigate();
const handleOptionChange = (event, newValue) => {
  const desirableNeighborhoodObject = thingsToLoveImages.find(({ title }) =>
    isEqual(title, newValue.title)
  );

  desirableNeighborhoodObject && desirableNeighborhoodObject.link
    ? navigate(desirableNeighborhoodObject.link)
    : navigate("/comingSoon");
};
  return (
    <Box>
      <BackgroundImageAndTextWithGradientBackground
        customHeroClass={"buildingGuidesHeroTextWrapper"}
        backgroundImage={`${cdnPath}/assets/cityGuide.jpg`}
        altText="Luxurious contemporary house in Dubai"
        heroText={
          <>
            Explore the country’s <br />
            most exciting cities
          </>
        }
      />
      <Box className="buildingGuidesAboutWrapper">
        <Box className="searchBuildingGuide">
          <Stack spacing={2}>
            <Typography variant="GothamBlack26">
              Search or choose a city below
            </Typography>
            <SearchBuildingGuide searchOptions={citiesSearchOPtions} handleOptionChange={handleOptionChange}/>
          </Stack>
        </Box>
      </Box>

      <Box className="buildingGuideGalleryComponentWrapper">
        <ElevenGalleryLayout images={thingsToLoveImages} card={true} />
        {/* <GalleryComponent images={thingsToLoveImages} card={true}/> */}
      </Box>
      <LandingPageLinksArea />
      <Box className="BuildingGuidesSubscribeSection">
        <LandingPageSubscribeSection />
      </Box>
    </Box>
  );
}

export default CityGuides;
