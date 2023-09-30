import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { notAvailable } from "../../../Constants/ConstantValues";

function BuildingExPloreNeighborhood({ buildingObject}) {
  // const buildingObject = listingObject.buildingData;
  // console.log('buidlingObject', buildingObject)
 
  return (
    <Box id="neighborhoodSection" className="neighborhoodWrapper">
      <Box className="exploreNeighborhoodWrapper">
        <Box>
          <Grid container>
            <Grid item xs={6} md={6}>
              <Box className="exploreNeighborhoodImage">
                <LazyLoadImage src={buildingObject.buildingImages[0]} className="homePageBackgroundImage"
                    width={544}
                    height={273}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box className="exploreNeighborhoodTextAreaWrapper">
                <Typography variant="GothamBlack30">Explore the neighborhood</Typography>
                <Box className="neighborhoodCommunityWrapper">
                  <Typography variant="DubaiRegular20Bold">{buildingObject.subAreaSubCommunity}</Typography>
                </Box>
                <Box className="neighborhoodCommunityWrapper">
                  <Typography variant="DubaiRegular18">{buildingObject.buildingNeighborhoodDescription?buildingObject.buildingNeighborhoodDescription:buildingObject.description?buildingObject.description:notAvailable}</Typography>
                </Box>
                <Box className="neighborhoodButtonWrapper">
                  <Grid container spacing={2}>
                    <Grid item xs md={6}>
                      <CustomButton dark={false} text={`${buildingObject.subAreaSubCommunity} Guide`} rightIcon={<ButtonRightArrow />} />
                    </Grid>
                    <Grid item xs md={5}>
                      <CustomButton dark={false} text={`All Neighborhoods`} rightIcon={<ButtonRightArrow />} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BuildingExPloreNeighborhood;
