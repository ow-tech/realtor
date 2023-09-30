import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { useNavigate } from "react-router-dom";
import {
  desirableNeighborhoods,
  comingSoonURL,
  defaultNeighborhoodDescription,
} from "../../../Constants/ConstantValues";
import { cdnPath } from "../../../Constants/StaticPagesConstants";
import FindAreaCard from "../../LandingPage/LandingPageFindArea/FindAreaCard/FindAreaCard";
import { findArea } from "../../../Constants/ConstantValues";
import { truncateText } from "../../../utils/utility";
function Neighborhood({ property, width = 544, height = 273 }) {
  const navigate = useNavigate();
  const _ = require("lodash");


  const neighborhoodObject= findArea.find(({areaName}) =>
  _.isEqual(property.area, areaName))
  const handleGuide = (value) => {
    switch (value) {
      case "allNeighborhoods":
        navigate("/city-guides");
        break;
      default:
        const linkUrl = neighborhoodObject
          ? neighborhoodObject.link
          : comingSoonURL;

        navigate(linkUrl);
    }
  };

  const neighborhoodName = truncateText(
    property.area || property.subAreaSubCommunity,
    30
  );

const imageSrc =neighborhoodObject?neighborhoodObject.imgPath: `${cdnPath}/dneighbour/1.jpg?tr=w-${width},h-${height}`
  return (
    <Box
      id="neighborhoodSection"
      className="neighborhoodWrapper paddingPageWidth"
    >
      <Box className="exploreNeighborhoodWrapper">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box className="exploreNeighborhoodImage">
              <LazyLoadImage
                src={imageSrc}
                className=" defaultNeighborhoodImage"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="alignCenter">
            <Box className="exploreNeighborhoodTextAreaWrapper">
              <Typography variant="GothamBlack30">
                Explore the neighborhood
              </Typography>
              <Box className="neighborhoodCommunityWrapper">
                <Typography variant="DubaiRegular20Bold">
                  { property.area || property.subAreaSubCommunity}
                </Typography>
              </Box>
              <Box className="neighborhoodCommunityWrapper">
                <Typography variant="DubaiRegular18">
                  {_.isEqual(property.area,'Jumeirah Village Circle' )?'Jumeirah Village Circle (JVC) is one of the most family-friendly master communities developed by Nakheel. Located at the heart of new Dubai and amidst landscaped gardens, it boasts a range of amenities making it an ideal spot for renters and buyers.':
                  property.neighborhoodDescription
                  ? property.neighborhoodDescription.slice(0, 100)
                  : defaultNeighborhoodDescription
                  }
                
                </Typography>
              </Box>
              <Box className="neighborhoodButtonWrapper">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={12} lg={7}>
                    <CustomButton
                      dark={false}
                      text={`${neighborhoodName} Guide`}
                      rightIcon={<ButtonRightArrow />}
                      onClick={() =>
                        handleGuide(
                          property.area || property.subAreaSubCommunity
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} lg={4}>
                    <CustomButton
                      dark={false}
                      text={`All Neighborhoods`}
                      rightIcon={<ButtonRightArrow />}
                      onClick={() => handleGuide("allNeighborhoods")}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="nearbyNeighborhoods">
        <Typography variant="DubaiRegular20Bold">
          Nearby Neighborhods
        </Typography>

        {/* <Grid container spacing={2} mt={2}>
          {listingObject.nearbyNeighborhoods.map((item, id) => {
            return (
              <Grid item key={id} xs={12} sm={3.8} md={3.8}>
                <Link href={"#"}>
                  <Box className="findAreaBox">
                    <Box className="findAreaOpacity"></Box>
                    <LazyLoadImage effect="opacity" src={item.imgPath} alt={item.name} className="findAreaImg" />
                    <Typography variant="GothamBlack27" className="findAreaTypography">
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid> */}
        <Grid container spacing={2} mt={1}>
          {findArea.slice(0, 3).map((item, id) => {
            return (
              <Grid item key={id} xs={12} sm={3.8} md={3.8}>
                <FindAreaCard
                  imgLabel={item.imgLabel}
                  imgPath={item.imgPath}
                  link={item.link}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Neighborhood;
