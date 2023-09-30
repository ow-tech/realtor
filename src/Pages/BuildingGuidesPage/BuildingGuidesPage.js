import React from "react";

import { Typography, Box, Stack } from "@mui/material";
import SearchBuildingGuide from "../../Components/SearchBuildingGuide/SearchBuildingGuide";
import { useNavigate } from "react-router-dom";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import ElevenGalleryLayout from "../../Components/Gallery/ElevenGalleryLayout/ElevenGalleryLayout";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { buildingGuideSearchOptions} from "../../Constants/ConstantValues";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import isEqual from "lodash/isEqual";

const comingSoonUrl =`${cdnPath}/assets/commingSoon.jpg`
const thingsToLoveImages = [
  {
   
    imageUrl: `${cdnPath}/assets/burjkhalifabuildingGuides.jpg`,
    title: "Image 1",
    buildingRefNumber: 99887876,
    buildingName: "Burj Khalifa",
    comingSoon: true,
  },
  {
    imageUrl:comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 1",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 1",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 1",
    buildingRefNumber: 9988787687876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },
  {
    imageUrl: comingSoonUrl,
    title: "Image 2",
    buildingRefNumber: 99887876,
    buildingName: "Building A",
    comingSoon: true,
  },

  // Add more image objects here
];


function BuildingGuidesPage() {

  const navigate = useNavigate();
  const handleOptionChange = (event, newValue) => {
    const desirableNeighborhoodObject = thingsToLoveImages.find(({ buildingName }) =>
      isEqual(buildingName, newValue.title)
    );
  
    desirableNeighborhoodObject && desirableNeighborhoodObject.link
      ? navigate(desirableNeighborhoodObject.link)
      : navigate("/comingSoon");
  };
  return (
    <Box>
      <BackgroundImageAndTextWithGradientBackground
        customHeroClass={"buildingGuidesHeroTextWrapper"}
        backgroundImage={`${cdnPath}/assets/buildingGuides.jpg`}
        altText="Luxurious contemporary house in Dubai"
        heroText={
          <>
            Find out more <br /> about Dubai's Buildings
          </>
        }
      />

      <Box className="buildingGuidesAboutWrapper">
        <Box className="aboutOurBuildingGuides">
        <Stack spacing={1} direction="row">
              <ListingCardIcon shape="info" />
              <Typography variant="GothamBlack40">About our building guides </Typography>
            </Stack>
         
          <Stack spacing={2} pt={2}>
            <Typography variant="AlwynNewRoundedRegular20">
              Our building guides are a great way to find out more about a particular building in Dubai. They typically include information on the building's history, location, size, amenities, and
              facilities.
            </Typography>
            <Typography variant="AlwynNewRoundedRegular20">
              The building classification is a rating system that is used to assess the quality of a building. We have developed a grid with 12 criteria which are rated in 5 levels with a weighted
              point system. It is based on multiple factors, including the building's age, condition, and amenities among others.
            </Typography>
            <Typography variant="AlwynNewRoundedRegular20">
              The reviews are written by residents who live in the building. They can provide valuable insights into the building's pros and cons. The reviews can also help you to understand the
              building's overall atmosphere and culture.
            </Typography>
            <Typography variant="AlwynNewRoundedRegular20">
              Finally, you can get a good understanding of a particular building and whether it is a good fit for your needs. The guide can also help you to compare different buildings and find the
              perfect one for you.
            </Typography>
            <Typography variant="AlwynNewRoundedRegular20">Here are some of the benefits of using building guides:</Typography>
           
          
          </Stack>
           <Stack pt={3} >
            <Typography variant="GothamBlack21">
              ▪ They provide comprehensive information about a building.
            </Typography>
            <Typography variant="GothamBlack21">
            ▪ They can help you to compare different buildings.
            </Typography>
            <Typography variant="GothamBlack21">
            ▪ They can help you to find the perfect building for your needs.
            </Typography>

            <Typography variant="GothamBlack21">
            ▪ They can save you time and money.
            </Typography>
            </Stack>
        </Box>
        <Box className="searchBuildingGuide">
          <Stack spacing={2} mt={5}>
            <Typography variant="GothamBlack26">Search or choose a building below</Typography>
            <SearchBuildingGuide searchOptions={buildingGuideSearchOptions} handleOptionChange={handleOptionChange}/>
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

export default BuildingGuidesPage;
