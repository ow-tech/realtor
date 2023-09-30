import React, { useState, useEffect, useContext } from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import CustomButton from "../../../../Components/Button/CustomButton";
import AppContext from "../../../../context/AppContext";
import { isEqual } from "lodash";
import { savedBuilding, savedProperty } from "../../../../network/apiServices";
import {
  addObjectToArray,
  fromCarouselArray,
  removeObjectById,
} from "../../../../utils/utility";
import { isMediumScreens } from "../../../../Constants/ConstantValues";
import { errorToast } from "../../../../utils/useToast";

function TopHeaderButtons({ page, property }) {
  const _ = require("lodash");
  const context = useContext(AppContext);
  const {
    userObj,
    userPreferences,
    setUserPreferences,
    listingHash,
    setListingHash,
    buildingHash,
    setBuildingHash,
  } = context;

  const [likedShape, setLikedShape] = useState(false);

  const isMediumScreen =useMediaQuery(isMediumScreens)
  const refId =
    property?.listingReferenceId ||
    property?.referenceNumber ||
    property?.referenceNo;

  useEffect(() => {
    //not all agents are coming from saved agents
    setLikedShape(false);
    //on run, determine and set the like state based on if the property in the hashtable exists and is true
    if (isEqual(page, "listingDetails")) {
      //check if listingId exists in hash table

      if (listingHash[refId]?.liked) {
        setLikedShape(true);
      }
    } else {
      //check if listingId exists in hash table
      if (buildingHash[refId]?.liked) {
        setLikedShape(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [property]);

  const handleLike = () => {
    if (!userObj) {
      errorToast("Please login first.");
      return;
    }

    if (likedShape) {
      // Item is already liked, del from saved, set liked to false in listingHash
      const idKey =
        page === "listingDetails"
          ? "listingReferenceId"
          : "buildingReferenceId";
      const payload = {
        savedAction: "DELETE",
        [idKey]: refId,
        email: userObj?.email,
      };
      //if liked, check if listingDetails page
      if (page === "listingDetails") {
        const savedProperties = userPreferences?.savedProperties;
        savedProperty(payload)
          .then((res) => {
            if (res.data.status === "SUCCESS") {
              setListingHash((prevListingHash) => ({
                ...prevListingHash,
                [refId]: { liked: false },
              }));
              let newProp = removeObjectById(
                refId,
                savedProperties,
                "listingReferenceId"
              );

              const updatedData = {
                ...userPreferences,
                savedProperties: newProp,
              };

              setUserPreferences(updatedData);
              setLikedShape(false);
            }
          })
          .catch((err) => {
            errorToast(`Something went wrong: ${err}`);
          });
      } else {
        //building page
        const savedBuildings = userPreferences?.savedBuildings;
        savedBuilding(payload)
          .then((res) => {
            if (res.data.status === "SUCCESS") {
              setBuildingHash((prevListingHash) => ({
                ...prevListingHash,
                [refId]: { liked: false },
              }));
              let newProp = removeObjectById(
                refId,
                savedBuildings,
                "buildingReferenceId"
              );

              const updatedData = {
                ...userPreferences,
                savedBuildings: newProp,
              };

              setUserPreferences(updatedData);
              setLikedShape(false);
            }
          })
          .catch((err) => {
            errorToast(`Something went wrong: ${err}`);
          });
      }
    } else {
      // Item is not liked, set liked to true in listingHash

      if (page === "listingDetails") {
        const images = fromCarouselArray(property?.images);
        const payload = {
          savedAction: "ADD",
          email: userObj?.email,
          listingReferenceId: property?.referenceNumber,
          propertiesAmenities: ["Basic"],
          listingImages: images,
          title: property?.listingTitle[0],
          area: property?.area,
          buildingName: property?.building,
          beds: property?.beds,
          baths: property?.baths,
          sqm: property?.builtUpAreaSqm,
          sqft: property?.builtUpAreaSqft,
          price:
            property.rentalPrice && !_.isEqual(property?.rentalPrice.trim(), "")
              ? property?.rentalPrice
              : property?.purchasePrice &&
                !_.isEqual(property?.purchasePrice.trim(), "")
              ? property?.purchasePrice
              : "0",
        };
        const savedProperties = userPreferences?.savedProperties;
        savedProperty(payload)
          .then((res) => {
            if (res.data.status === "SUCCESS") {
              const updatedProperties = addObjectToArray(
                payload,
                savedProperties,
                "listingReferenceId"
              );

              const updatedData = {
                ...userPreferences,
                savedProperties: updatedProperties,
              };

              setListingHash((prevListingHash) => ({
                ...prevListingHash,
                [refId]: { liked: true },
              }));
              setUserPreferences(updatedData);
              setLikedShape(true);
            }
          })
          .catch((err) => {
            errorToast(`Something went wrong: ${err}`);
          });
      } else {
        const payload = {
          savedAction: "ADD",
          email: userObj?.email,
          buildingReferenceId: property?.referenceNo,
          buildingName: property?.buildingName,
          leadImageUrl: property?.buildingImages
            ? property?.buildingImages[0]
            : null,
          buildingLocationArea: property?.area,
          buildingStoriesOrFloors: property?.stories,
          residentialUnits: property?.residentialUnits,
          yearLaunched: property?.yearLaunched,
        };
        const savedBuildings = userPreferences?.savedBuildings;
        savedBuilding(payload)
          .then((res) => {
            if (res.data.status === "SUCCESS") {
              let newProp = addObjectToArray(
                payload,
                savedBuildings,
                "buildingReferenceId"
              );

              const updatedData = {
                ...userPreferences,
                savedBuildings: newProp,
              };
              setBuildingHash((prevListingHash) => ({
                ...prevListingHash,
                [refId]: { liked: true },
              }));
              setUserPreferences(updatedData);
              setLikedShape(true);
            }
          })
          .catch((err) => {
            errorToast(`Something went wrong: ${err}`);
          });
      }
    }
  };

  return (
    <Box className="topButtonsWrapperListingHeader paddingPageWidth">
      <Grid
        container
        justifyContent={isMediumScreen?'space-evenly':"space-between"}
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={isEqual(page, "listingDetails")?5:5} sm={isEqual(page, "listingDetails")?6:5}  md={isEqual(page, "listingDetails")?6:5} lg={3} xl={1.7}>
          <Link to="/" onClick={() => window.history.back()} className="noTextDecoration">
            <CustomButton
              customClassName="customClassNameTopHeaderButtons"
              text="Back to search results"
              dark={false}
              size={isMediumScreen ? "16px" : "12px"}
              typographyVariant="DubaiRegular14"
              leftIcon={
                <Box
                className='ListingCardIConTopHeaderButtons'
                >
              <ListingCardIcon shape="redo" shapeColor="black" />
              </Box>
              }
              variant="outlined"
            />
          </Link>
        </Grid>
        {isEqual(page, "listingDetails") ? 
        
        <Grid item xs={7} sm={6}  md={6} lg={4} xl={2.7}>
          <Grid
            spacing={1}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
         
              <Grid item xs={6} md={6} lg={6} xl={5.4}>
                <CustomButton
                  customClassName="customClassNameTopHeaderButtons"
                  text="Book a Viewing"
                  dark={false}
                  size="small"
                  typographyVariant="DubaiRegular14"
                  rightIcon={
                    <ListingCardIcon
                    className='ListingCardIConTopHeaderButtons'
                      shape={"arrowRight"}
                      shapeColor={"black"}
                    />
                  }
                  leftIcon={
                    <Box
                    className='ListingCardIConTopHeaderButtons'
                    >
                    <ListingCardIcon
                      shape={"silhouette"}
                      shapeColor={"black"}
                      
                    />
                    </Box>
                  }
                  variant="outlined"
                />
              </Grid>
           

           
              <Grid item xs={6} md={6} lg={6} xl={5}>
                <CustomButton
                  customClassName="customClassNameTopHeaderButtons"
                  text="Make an Offer"
                  dark={false}
                  size="small"
                  typographyVariant="DubaiRegular14"
                  rightIcon={
                    <ListingCardIcon
                      shape={"arrowRight"}
                      shapeColor={"black"}
                    />
                  }
                  leftIcon={
                    <Box
                    className='ListingCardIConTopHeaderButtons'
                    >
                    <ListingCardIcon shape={"dollar"} shapeColor={"black"} className='ListingCardIConTopHeaderButtons'/>
                    </Box>
                  }
                  variant="outlined"
                />
              </Grid>
          
          </Grid>
        </Grid>
        :null }

        
        <Grid item xs={isEqual(page, "listingDetails") ?12:7} sm={isEqual(page, "listingDetails") ?12:7}md={isEqual(page, "listingDetails") ?12:7} lg={3}>
          <Grid
            spacing={1}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item xs={4} md={3}>
              <CustomButton
                customClassName="customClassNameTopHeaderButtons"
                text="Share"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <Box
                  className='ListingCardIConTopHeaderButtons'
                  >
                  <ListingCardIcon shape={"share"} shapeColor={"black"} className='ListingCardIConTopHeaderButtons'/>
                  </Box>
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <CustomButton
                customClassName="customClassNameTopHeaderButtons"
                text="Save"
                dark={false}
                onClick={handleLike}
                size="small"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <Box
                  className='ListingCardIConTopHeaderButtons'
                  >
                  <ListingCardIcon
                  className='ListingCardIConTopHeaderButtons'
                    shape={"featherHeart"}
                    color={likedShape ? "red" : null}
                  />
                  </Box>
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <CustomButton
                customClassName="customClassNameTopHeaderButtons"
                text="More"
                dark={false}
                size="small"
                typographyVariant="DubaiRegular14"
                variant="outlined"
                leftIcon={
                  <Box
                  className='ListingCardIConTopHeaderButtons'
                  >
                     <ListingCardIcon shape={"more"} shapeColor={"black"} 
                 />
                  </Box>
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopHeaderButtons;
