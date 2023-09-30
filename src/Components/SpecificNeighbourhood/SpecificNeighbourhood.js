import React, { useState, useContext } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonRightArrow } from "../../Assets/SVG/Common/CommonSvgs";
import { neighbourhoodData } from "../../Constants/StaticPagesConstants";
import { findArea } from "../../Constants/ConstantValues";
import FindAreaCard from "../../Pages/LandingPage/LandingPageFindArea/FindAreaCard/FindAreaCard";
import CommuteTimes from "./CommuteTimes/CommuteTimes";
import LocationBoundaries from "./LocationBoundaries/LocationBoundaries";
import KeyFacts from "./KeyFacts/KeyFacts";
import AppContext from "../../context/AppContext";
import { objToBase64, truncateText } from "../../utils/utility";
import ManualGallery from "../Gallery/ManualGallery";

const SpecificNeighbourhood = () => {
  const { setBuyOrRent, selectedCountry } = useContext(AppContext);
  const { name } = useParams();
  const navigate = useNavigate();

  const specificNeighbourhood = name.includes(" ")
    ? name.replace(/\s+/g, "_")
    : name;

  const {
    [specificNeighbourhood]: {
      backgroundImage,
      neighbourhood,
      WelcomeDesc,
      expectWhatDesc,
      marketDesc,
      loveThingsDesc,
      map,
      neighbours,
      commutes,
      aroundTheBlockDesc,
      aroundTheBlockImages,
      whatToExpectDesc,
      whatToExpectImages,
      theMarketDesc,
      theMarketImages,
      thingsToLoveDesc,
      thingsToLoveImages,
    },
  } = neighbourhoodData;

  const [buttonHovered, setButtonHovered] = useState([
    true, // Hover state for button at index 0
    true, // Hover state for button at index 1
  ]);

  const handleMouseEvent = (index) => {
    setButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };

  const handleClick = (value, buyOrRent) => {
    setBuyOrRent(buyOrRent);
    const queryParamValue = objToBase64({
      buyOrRent: buyOrRent,
      key: "Area",
      value,
      country: selectedCountry,
    });
    navigate(`/${buyOrRent}/search?value=${queryParamValue}`);
  };

  const filteredAreaData = findArea.filter((item) => item.imgLabel !== name);
  return (
    <>
      <Box className="specificNeighbourBgContainer">
        <Box component="img" src={backgroundImage} alt="background Image" />
      </Box>

      <Container className="specificNeighbourFactsContainer">
        <Grid container className="specificNeighbourGridCont">
          <Grid
            item
            xs={12}
            md={7.5}
            order={{ xs: 3, sm: 3, md: 1 }}
            className="specificNeighbourDescCont"
          >
            <KeyFacts
              expectWhatDesc={expectWhatDesc}
              marketDesc={marketDesc}
              loveThingsDesc={loveThingsDesc}
            />
            <Grid container spacing={1} mt={1}>
              <Grid item>
                <CustomButton
                  text={`Homes for Sale in ${truncateText(neighbourhood, 15)}`}
                  rightIcon={<ButtonRightArrow />}
                  onMouseEnter={() => handleMouseEvent(0)}
                  onMouseLeave={() => handleMouseEvent(0)}
                  dark={buttonHovered[0]}
                  variant="outlined"
                  customClassName="specificNeighborhoodBtn"
                  onClick={() => handleClick(neighbourhood, "buy")}
                />
              </Grid>
              <Grid item>
                <CustomButton
                  text={`Homes for Rent in ${truncateText(neighbourhood, 15)}`}
                  rightIcon={<ButtonRightArrow />}
                  onMouseEnter={() => handleMouseEvent(1)}
                  onMouseLeave={() => handleMouseEvent(1)}
                  dark={buttonHovered[1]}
                  variant="outlined"
                  customClassName="specificNeighborhoodBtn"
                  onClick={() => handleClick(neighbourhood, "rent")}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} order={{ xs: 2, sm: 2, md: 2 }} />
          <Grid
            item
            xs={10}
            md={3.5}
            order={{ xs: 1, sm: 1, md: 3 }}
            className="specificNeighbourWelcomeContainer"
          >
            <Box className="specificNeighbourWelcomeNote">
              <Typography variant="GothamBlack36" mb={2}>
                Welcome to {neighbourhood}
              </Typography>
              <Typography variant="DubaiRegular18">{WelcomeDesc}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="specificNeighbourLocContainer">
        <Container>
          <LocationBoundaries
            neighbourhood={neighbourhood}
            map={map}
            neighbours={neighbours}
          />
        </Container>
      </Box>

      <Container className="specificNeighbourCommute">
        <CommuteTimes commutes={commutes} />
      </Container>

      <Box className="specificNeighbourGalleryContainer padding4up16lr">
        <Typography variant="GothamBlack24">Around the block</Typography>
        <Typography variant="DubaiRegular18" my={2}>
          {aroundTheBlockDesc}
        </Typography>
        <ManualGallery images={aroundTheBlockImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up16lr">
        <Typography variant="GothamBlack24">What To Expect:</Typography>
        <Typography variant="DubaiRegular18" my={2}>
          {whatToExpectDesc}
        </Typography>

        <ManualGallery images={whatToExpectImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up16lr">
        <Typography variant="GothamBlack24">The Market</Typography>
        <Typography variant="DubaiRegular18" my={2}>
          {theMarketDesc}
        </Typography>

        <ManualGallery images={theMarketImages} />
      </Box>
      <Box className="specificNeighbourGalleryContainer padding1up4dn16lr">
        <Typography variant="GothamBlack24">Things to love</Typography>
        <Typography variant="DubaiRegular18" my={2}>
          {thingsToLoveDesc}
        </Typography>
        <ManualGallery images={thingsToLoveImages} />
      </Box>
      <Box className=" padding4updn16lr">
        <Typography variant="GothamBlack26">
          Other Neighborhoods To Explore
        </Typography>
        <Grid container spacing={2} mt={1}>
          {filteredAreaData.slice(0, 3).map((item, id) => {
            return (
              <Grid item key={id} xs={12} sm={3.8} md={3.8}>
                <FindAreaCard
                  imgLabel={item.imgLabel}
                  imgPath={item.imgPath}
                  link={item.link}
                  toSpecificNeighbourHood={true}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default SpecificNeighbourhood;
