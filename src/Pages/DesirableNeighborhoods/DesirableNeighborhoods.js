import React, { useState } from "react";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { Stack, Box, Typography } from "@mui/material";
import {
  findArea,
  desirableNeighborhoods,
  onlyInDubaiDesirableNeighborhoods,
} from "../../Constants/ConstantValues";
import SearchBuildingGuide from "../../Components/SearchBuildingGuide/SearchBuildingGuide";
import ElevenGalleryLayout from "../../Components/Gallery/ElevenGalleryLayout/ElevenGalleryLayout";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import isEqual from "lodash/isEqual";
import { useNavigate } from "react-router-dom";

function DesirableNeighborhoods() {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleOptionChange = (event, newValue) => {
    const desirableNeighborhoodObject = findArea.find(({ imgLabel }) =>
      isEqual(imgLabel, newValue.title)
    );

    desirableNeighborhoodObject
      ? navigate(desirableNeighborhoodObject.link)
      : navigate("/comingSoon");
  };

  return (
    <>
      <BackgroundImageAndTextWithGradientBackground
        backgroundImage={`${cdnPath}/assets/dubaiSerableNeighborhood.jpg`}
        altText="Discover Dubai’s most desirable neighbourhoods"
        heroText={
          <>
            Discover Dubai’s most <br />
            desirable neighbourhoods
          </>
        }
        customHeroClass={"buildingGuidesHeroTextWrapper"}
      />
      <Box>
        <Box className="aboutOurBuildingGuides ">
          <Box className="buildingGuidesAboutWrapper">
            <Stack spacing={1} direction="row" pb={1}>
              <ListingCardIcon shape="info" />
              <Typography variant="GothamBlack40">About Dubai</Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="AlwynNewRoundedRegular20">
                Dubai is the second largest emirate with an area of 4,114sq.
                km., which is about 5 per cent of the UAE without the islands.
              </Typography>
              <Typography variant="AlwynNewRoundedRegular20">
                The older districts of Dubai cover an area of 1500sq. m. and is
                called 'Pearl of the Gulf' and 'Jewel of the world' because of
                its heritage and history.
              </Typography>
            </Stack>
          </Box>
          {isExpanded && (
            <>
              <Box className="population">
                <Box className="buildingGuidesAboutWrapper">
                  <Stack spacing={1} direction="row" pb={1}>
                    <ListingCardIcon shape="population" />
                    <Typography variant="GothamBlack40">Population</Typography>
                  </Stack>

                  <Stack spacing={2}>
                    <Typography variant="AlwynNewRoundedRegular20">
                      The estimated population of the emirate of Dubai is
                      3,478,300 as of 2021; of whom 2,400,100 are males and
                      1,078,200 females. For a daily update on the population,
                      you can check the population clock on the website of Dubai
                      Statistics Center.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box className="LocationAndGeography">
                <Box className="buildingGuidesAboutWrapper">
                  <Stack spacing={1} direction="row" pb={1}>
                    <ListingCardIcon shape="pinPoint" />
                    <Typography variant="GothamBlack40">
                      Location and geography
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai is located on the eastern coast of the Arabian
                      Peninsula, in the southwest corner of the Arabian Gulf. It
                      shares its borders with Abu Dhabi to the south and Sharjah
                      to the northeast. To the southeast, it shares an
                      international border with the Sultanate of Oman. Dubai is
                      roughly 16 meters (52 feet) above sea level.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      The capital of the emirate is Dubai city, which is
                      characterized by the historic Dubai Creek. The creek
                      divides the city into two districts: Deira in the north
                      and Bur Dubai in the south. In 2016, a new addressing
                      system was launched that divided the emirate into 14
                      districts.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai has several sandy beaches on its western side, a
                      mangrove at the eastern end of the creek, many deserts in
                      the interior and western regions, and wadis in the Hatta
                      region.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box className="population">
                <Box className="buildingGuidesAboutWrapper">
                  <Stack spacing={1} direction="row" pb={1}>
                    <ListingCardIcon shape="growth" />
                    <Typography variant="GothamBlack40">Economy</Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai's natural harbor, Dubai Creek, helped the city
                      become a center for fishing, pearling, and sea trade. By
                      the early 20th century, Dubai had developed into a
                      successful port city.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      The discovery of oil in 1966 transformed the emirate and
                      its way of life. Dubai's first oil exports in 1969 were
                      followed by a period of rapid development that laid the
                      foundations for today's modern society.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai was a pioneer in the Islamic banking sector, opening
                      the Dubai Islamic Bank (DIB) in the 1970s and the Dubai
                      Financial Market (DFM) in 1975, the first global
                      Shari'a-compliant exchange.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      In the 1980s and early 1990s, Dubai made a strategic
                      decision to become a major international tourism
                      destination. The city's economy is now no longer reliant
                      on oil, but is diversified, with a thriving trade,
                      services, and finance sectors. Dubai's GDP reached around
                      AED 307.5 billion during the first nine months of 2022.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box className="LocationAndGeography">
                <Box className="buildingGuidesAboutWrapper">
                  <Stack spacing={2}>
                    <Stack spacing={1} direction="row">
                      <ListingCardIcon shape="tourism" />
                      <Typography variant="GothamBlack40">Tourism</Typography>
                    </Stack>

                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai is a city that boasts world-class hotels, modern
                      architecture, entertainment and dining venues, traditional
                      markets, shopping centers, and sporting events. Some of
                      the major tourist attractions in the emirate include:
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      ▪ The wadis of Hatta, which are a series of lush oases and
                      desert canyons located in the Hajar Mountains.
                      <br /> ▪ The sail-shaped Burj Al Arab hotel, which is also
                      the world's only seven-star hotel.
                      <br /> ▪ Burj Khalifa, which is the world's tallest
                      skyscraper and offers stunning views of the city.
                      <br /> ▪ The Dubai Miracle Garden, which is a colorful
                      flower garden with over 50 million flowers.
                      <br /> ▪ The Dubai Aquarium and Underwater Zoo, which is
                      home to over 33,000 marine animals.
                      <br /> ▪ Dubai Desert Safaris, which are thrilling desert
                      adventures with dune bashing, camel riding, and
                      sandboarding and other activities.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai is a city that has something to offer everyone, from
                      families to couples to adventure seekers. With its
                      stunning skyline, luxurious hotels, and endless
                      attractions, Dubai is a truly unforgettable destination.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box className="population">
                <Box className="buildingGuidesAboutWrapper">
                  <Stack spacing={1} direction="row" pb={1}>
                    <ListingCardIcon shape="rullingFamily" />
                    <Typography variant="GothamBlack40">
                      Ruling family
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="AlwynNewRoundedRegular20">
                      Dubai was established in 1833, when some 800 members of
                      the Bani Yas tribe, led by the Maktoum family, settled by
                      the Dubai creek. Since then, the Al Maktoum family have
                      ruled Dubai.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      The eighth ruler from the Al Maktoum family, the late H.
                      H. Sheikh Rashid bin Saeed Al Maktoum, ruled Dubai from
                      1958 to 1990. He guided the emirate with compassion and
                      understanding. He realised what was necessary to transform
                      Dubai into the cosmopolitan, prosperous city it is today.
                    </Typography>
                    <Typography variant="AlwynNewRoundedRegular20">
                      H. H. Sheikh Mohammed bin Rashid Al Maktoum is the
                      Vice-President and Prime Minister of the UAE and Ruler of
                      Dubai. He became the Ruler of Dubai on 4 January 2006,
                      following the demise of his brother and the then Ruler, H.
                      H. Sheikh Maktoum bin Rashid Al Maktoum.
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <Box className="LocationAndGeography">
                <Box className="buildingGuidesAboutWrapper LocationAndGeography">
                  <Stack spacing={1} direction="row" pb={1}>
                    <ListingCardIcon shape="link" />
                    <Typography variant="GothamBlack40">
                      Useful links:
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="AlwynNewRoundedRegular20">
                      <a href="/">
                        About UAE: The seven emirates - Ministry of Foreign
                        Affairs & International Cooperation Visit Dubai - The
                        official tourism portal of Dubai
                      </a>
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </>
          )}
        </Box>
        <Box
          className="amenitiesListViewBtndesirableNeighborhood "
          onClick={handleToggle}
        >
          {!isExpanded ? (
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="DubaiRegular18">Read more</Typography>
              <KeyboardArrowDownIcon />
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="DubaiRegular18">Read less</Typography>
              <KeyboardArrowUpIcon />
            </Stack>
          )}
        </Box>

        <Box className="searchBuildingGuide buildingGuidesAboutWrapper">
          <Stack spacing={2}>
            <Typography variant="GothamBlack26">
              Search or choose your neighbourhood below
            </Typography>
            <SearchBuildingGuide
              searchOptions={onlyInDubaiDesirableNeighborhoods}
              handleOptionChange={handleOptionChange}
            />
          </Stack>
        </Box>
      </Box>
      <ElevenGalleryLayout images={desirableNeighborhoods} />
      <LandingPageLinksArea />
      <LandingPageSubscribeSection />
    </>
  );
}

export default DesirableNeighborhoods;
