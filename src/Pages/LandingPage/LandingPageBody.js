import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import ManseelMap from "../../Components/Map/Map";
import LandingPageExclusiveSection from "./LandingPageExclusiveSection/LandingPageExclusiveSection";
import LandingPageNewDevelopmentSection from "./LandingPageNewDevelopmentSection/LandingPageNewDevelopmentSection";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import LandingPageInternationalPropertySection from "./LandingPageInternationalPropertySection/LandingPageInternationalPropertySection";
import LandingPageFindArea from "./LandingPageFindArea/LandingPageFindArea";
import LandingPageLinksArea from "./LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "./LandingPageSubscribeSection/LandingPageSubscribeSection";
import PageSearchArea from "../LandingPage/LandingPageSearchSection/LandingPageSearchSection";
import AppContext from "../../context/AppContext";
import { getAllExclusives } from "../../network/apiServices";
import { toCarouselArray } from "../../utils/utility";
import { getListings } from "../../network/apiServices";
import { useInView } from "react-intersection-observer";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import LoadingSkeleton from "../../Components/LoadingSkeleton/LoadingSkeleton";

function LandingPageBody() {
  const {
    setListings,
    selectedCountry,
    exclusiveListings,
    setExclusiveListings,
    listings,
  } = useContext(AppContext);
  const [exclusiveFlag, setExclusiveFlag] = useState(false);
  const [mapFlag, setMapFlag] = useState(false);
  const [exclusiveSectionRef, inViewExclusive] = useInView({ threshold: 0.1 });
  const [mapSectionRef, inViewMap] = useInView();
  const [mapList, setMapList] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   if (inViewMap) {
  //     getListings({ countryName: selectedCountry })
  //       .then((res) => {
  //         let images = toCarouselArray(
  //           "title",
  //           res.data.listings,
  //           "listingImages"
  //         );
  //         setListings(images);
  //         setMapList(images);
  //       })
  //       .catch((err) => {
  //         setListings([]);
  //         setMapList([]);
  //       });
  //   }
  // };

  // async function fetchAndSetExclusives() {
  //   if (inViewExclusive) {
  //     try {
  //       const exclusives = await getAllExclusives({
  //         countryName: selectedCountry,
  //         // portal: "Propertyfinder",
  //         exclusive: true,
  //       });
  //       let images = exclusives.data.listings
  //         ? toCarouselArray("title", exclusives.data.listings, "listingImages")
  //         : [];

  //       setExclusiveListings(images);
  //       setExclusiveFlag(true);
  //     } catch (error) {
  //       // console.error("Error fetching exclusives:", error);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (exclusiveFlag) return;

  //   fetchAndSetExclusives();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inViewExclusive, selectedCountry]);

  // useEffect(() => {
  //   if (mapFlag) return;

  //   fetchData();
  //   setMapFlag(true);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inViewMap, selectedCountry]);

  useEffect(() => {
    const exclusiveListings = listings.filter(listing => listing.exclusive === 'Yes');
    setExclusiveListings(exclusiveListings);
    setMapList(exclusiveListings);
  }, [selectedCountry]);

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <Box>
          <PageSearchArea
            heading={"Find your home"}
            hasBuyRent={true}
            imgUrl={`https://res.cloudinary.com/dameisncm/image/upload/v1730921108/realtor/pexels-vividcafe-681368_tqoteu.jpg`}
            placeHolderUrl={`${cdnPath}/assets/HomePageHeaderPlaceholder`}
            imgAlt={"Luxurious contemporary house in Dubai"}
            loading={loading}
            setLoading={setLoading}
            // size={width:"";
            //   height:'2000px';
            // }
          />
          <LandingPageExclusiveSection
            referrer={exclusiveSectionRef}
            exclusives={exclusiveListings}
          />
          {/* Landing Page Map */}
          <Container
            ref={mapSectionRef}
            disableGutters={true}
            className="mapAreaContainer"
          >
            <Box>
              <Typography variant="GothamBlack26">Our Map</Typography>
            </Box>
            <Typography variant="DubaiRegular20">
              Explore the city's best properties
            </Typography>
            <ManseelMap listings={mapList} />
          </Container>
          {/* Landing Page Map */}
          <LandingPageNewDevelopmentSection />
          <LandingPageInternationalPropertySection />
          <LandingPageFindArea />
          <LandingPageLinksArea />
          <LandingPageSubscribeSection />
        </Box>
      )}
    </ErrorBoundary>
  );
}

export default LandingPageBody;
