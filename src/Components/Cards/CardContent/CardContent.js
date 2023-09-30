import React, { useContext } from "react";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import {
  addObjectToArray,
  fromCarouselArray,
  removeObjectById,
} from "../../../utils/utility";
import AppContext from "../../../context/AppContext";
import {
  convertCurrency,
  formatNumberWithCommasAndDecimals,
  formatNumberWithCommasAndWithoutDecimals,
} from "../../../utils/utility";
import { savedProperty } from "../../../network/apiServices";
import { Link } from "react-router-dom";
import { errorToast } from "../../../utils/useToast";

function CardContent({ onClick, item, isHovered, cardContentAlignment }) {
  const context = useContext(AppContext);
  const {
    userObj,
    userPreferences,
    setUserPreferences,
    conversionRates,
    toCurrency,
    selectedCurrency,
    listingHash,
    setListingHash,
    selectedCountryCurrency
  } = context;
  const savedProperties = userPreferences?.savedProperties;

  const listingRefId = item.listingReferenceId || item.referenceNumber;

  const _ = require("lodash");
  const price =
    item.rentalPrice && !_.isEqual(item.rentalPrice.trim(), "")
      ? item.rentalPrice
      : item.purchasePrice && !_.isEqual(item.purchasePrice.trim(), "")
      ? item.purchasePrice
      : item.price && !_.isEqual(item.price.trim(), "")
      ? item.price
      : "0";

  const buildingName =
    item.buildingName && !_.isEqual(item.buildingName.trim(), "")
      ? item.buildingName
      : item.building && !_.isEqual(item.building.trim(), "")
      ? item.building
      : item.subAreaSubCommunity &&
        !_.isEqual(item.subAreaSubCommunity.trim(), "")
      ? item.subAreaSubCommunity
      : item.pfLocationCommunity;

  const handleLike = () => {
    if (userObj && listingHash[listingRefId]?.liked) {
      const payload = {
        savedAction: "DELETE",
        listingReferenceId: listingRefId,
        email: userObj?.email,
      };

      savedProperty(payload)
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            let newProp = removeObjectById(
              listingRefId,
              savedProperties,
              "listingReferenceId"
            );

            const updatedData = {
              ...userPreferences,
              savedProperties: newProp,
            };

            setUserPreferences(updatedData);

            setListingHash((prevListingHash) => {
              const newListingHash = { ...prevListingHash };
              delete newListingHash[listingRefId];
              return newListingHash;
            });
          }
        })
        .catch((err) => {});
    } else if (userObj && !listingHash[listingRefId]?.liked) {
      const images = fromCarouselArray(item?.images);
      const payload = {
        savedAction: "ADD",
        email: userObj?.email,
        listingReferenceId: listingRefId,
        propertiesAmenities: ["Basic"],
        listingImages: images,
        title: item.listingTitle ? item.listingTitle[0] : item.title,
        area: item?.area,
        buildingName: buildingName,
        beds: item?.beds,
        baths: item?.baths,
        sqm: item.plotAreaSqm ? item.plotAreaSqm : item.sqm,
        sqft: item.plotAreaSqft ? item.plotAreaSqft : item.sqft,
        price: price,
      };

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

            setUserPreferences(updatedData);

            setListingHash((prevListingHash) => ({
              ...prevListingHash,
              [listingRefId]: { liked: true },
            }));
          }
        })
        .catch((err) => {});
    } else {
      errorToast("Please login first.");
    }
  };
  const builtUpAreaSqft = item.builtUpAreaSqft ? item.builtUpAreaSqft : "0";

  const convertedAmount = convertCurrency(
    conversionRates,
    toCurrency,
    selectedCurrency,
    price,
    selectedCountryCurrency
  );
  return (
    <Box>
      <Paper square elevation={0} className="upperPaperBoxWrapper">
        <Grid
          className="upperBoxListingCardIconContainer"
          container
          spacing={1}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          pr={1}
        >
          <Grid item>
            <IconButton className="upperBoxListingCardIcon">
              <ListingCardIcon shape={"360"} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className="upperBoxListingCardIcon"
              onClick={handleLike}
            >
              <ListingCardIcon
                shape={
                  listingHash[listingRefId]?.liked ? "alreadyLiked" : "like"
                }
              />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper square elevation={0} className="lowerPaperBoxWrapper">
        <Box className="lowerCardContentWrapper">
          <Link
            to={`/listing/${item?.area}/${
              item.referenceNumber
                ? item.referenceNumber
                : item.listingReferenceId
            }`}
            className="cardContentLowerLink"
          >
            <Box
              className={`listingCardTitleWrapper ${
                isHovered ? "ListingTitleReplaceEmptySpace" : "mouseOut"
              }`}
            >
              <Typography variant="GothamBlack18" className="listingTitle">
                {item.listingTitle ? item.listingTitle : item.title}
              </Typography>
            </Box>
            <Box>
              <Box
                className={`listingCardHovered ${
                  isHovered && cardContentAlignment
                    ? "textToDisappearDownwardsPricecardContentAlignment"
                    : isHovered
                    ? "textToDisappearDownwardsPrice"
                    : "mouseOut"
                }`}
              >
                <Typography variant="GothamBlack13">
                  {convertedAmount}
                </Typography>
              </Box>
              <Box>
                <Grid container justifyContent={cardContentAlignment?'flex-start':''} >
                  {cardContentAlignment ? (
                    <Grid item xs={12} md={12}>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunitycardContentAlignment"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14">
                          {buildingName}
                        </Typography>
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuildingcardContentAlignment"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14">
                          {item?.area}
                        </Typography>
                      </Box>
                    </Grid>
                  ) : (
                    <Grid item xs={5} md={5}>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunity"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14">
                          {buildingName}
                        </Typography>
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuilding"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14">
                          {item?.area}
                        </Typography>
                      </Box>
                    </Grid>
                  )}

                  <Grid item xs={1} md={ 1}>
                    <Box className="lowerCardListingContentWrapper">
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunity"
                            : "mouseOut"
                        }`}
                      >
                        <ListingCardIcon shape={"bed"} />
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuilding"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14" display="block">
                          {item?.beds}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    color="white"
                    flexItem
                    className={`cardDivider ${
                      isHovered ? "hoveredDisplayDivider" : "mouseOut"
                    }`}
                  />
                  <Grid item xs={  1} md={1}>
                    <Box className="lowerCardListingContentWrapper">
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunity"
                            : "mouseOut"
                        }`}
                      >
                        <ListingCardIcon shape={"bath"} />
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuilding"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14">
                          {item?.baths}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    color="white"
                    flexItem
                    className={`cardDivider  ${
                      isHovered ? "hoveredDisplayDivider" : "mouseOut"
                    }`}
                  />
                  
                  <Grid item xs={ cardContentAlignment ?2.3:true } >
                    <Box className="lowerCardListingContentWrapper">
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunity"
                            : "mouseOut"
                        }`}
                      >
                        <ListingCardIcon shape={"m2"} />
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuilding"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14" display="block">
                          {formatNumberWithCommasAndDecimals(
                            item.builtUpAreaSqm ? item.builtUpAreaSqm : item.sqm
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    color="white"
                    flexItem
                    className={`cardDivider   ${
                      isHovered ? "hoveredDisplayDivider" : " mouseOut"
                    }`}
                  />
                  <Grid item xs={ cardContentAlignment ?2.3: true}>
                    <Box className="lowerCardListingContentWrapper">
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsCommunity"
                            : "mouseOut"
                        }`}
                      >
                        <ListingCardIcon shape={"sqft"} />
                      </Box>
                      <Box
                        className={`listingCardHovered ${
                          isHovered
                            ? "textToDisappearDownwardsBuilding"
                            : "mouseOut"
                        }`}
                      >
                        <Typography variant="DubaiRegular14" display="block">
                          {formatNumberWithCommasAndWithoutDecimals(
                            builtUpAreaSqft
                          )}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export default React.memo(CardContent);
