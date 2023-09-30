import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { isEqual, startCase } from "lodash";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";
import { defaultBuildingImageImages } from "../../Constants/ConstantValues";

function SimilarBuildings({
  data,
  metaDataFields,
  defaultItems,
  hasHeart,
  hasThreeSixZero,
  imgHeight = "268px",
  imgWidth = "267px",
}) {
  const [expanded, setExpanded] = useState(false);
  const [setLiked] = useState(Array(data.length).fill(false));
  // console.log(data);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = (id) => {
    // call api to save building or unsave building
    setLiked((prevLiked) => {
      const newLiked = prevLiked.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            like: !item.like,
          };
        }
        return item;
      });

      // console.log("newLiked: ", newLiked);

      return newLiked;
    });
  };

  const dropDownText = {
    collapsed: "View More",
    expanded: "View Less",
  };

  const dropDownIcons = {
    collapsed: "arrowDown",
    expanded: "arrowRight",
  };

  const iconColor = "#fff";
  const iconWidth = "15";
  const iconHeight = "12";

  const metaFieldHeadings = Object.keys(metaDataFields);
  const visibleData = expanded ? data : data.slice(0, defaultItems);

  
  return (
    <>
      <Grid container spacing={1}>
        {/* {console.log('building',building)} */}
        {visibleData.map((building, index) => {
          // console.log('buildingT', building)
          let id = building.referenceNo;
          let image =
            building.buildingImages && !isEqual(building.buildingImages[0],null )? building.buildingImages[0]:
               defaultBuildingImageImages.images[0].imgPath
            
          let buildingName = building.buildingName;
          let community =building.subAreaSubCommunity|| building.greaterArea;
            // building.pfLocationSubcommunity ||
            // building.pfLocationCommunityLocationCity ||
            // building.pfLocationPropertyLocationSubCommunity ||
            // building.pfLocationSubCommunityLocationCommunity ||
           

          let floors = building.stories;
          let units = building.residentialUnits;
          let listings = building.buildingListings;
          let buildingObject = building;
       
          return (
            <Grid key={index} item xs={12} md={4} lg={3} sm={6}>
              <Link
                to={`/building/${buildingObject.buildingName}/${buildingObject.referenceNo}`}
                
                className="similarBuildingsLink"
              >
                <Card className="similarBuildingsCard" raised>
                  <Grid className="cardContentWrapper">
                    <Grid
                      className="cardOverlay"
                      container
                      spacing={0}
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      {hasThreeSixZero && (
                        <Grid item sm={1.25} md={1.25}>
                          <IconButton className="upperBoxListingCardIcon">
                            <ListingCardIcon shape={"360"} />
                          </IconButton>
                        </Grid>
                      )}

                      {hasHeart && (
                        <Grid item sm={1.25} md={1.25}>
                          <IconButton
                            className="upperBoxListingCardIcon"
                            onClick={() => handleLike(id)}
                          >
                            <ListingCardIcon
                              shape={building.liked ? "alreadyLiked" : "like"}
                            />
                          </IconButton>
                        </Grid>
                      )}
                    </Grid>
                    <CardMedia
                      className="similarBuildingsCardMedia"
                      sx={{ height: imgHeight }}
                      image={image}
                    
                      // title={buildingName}
                    />
                    <CardContent className="similarBuildingsCardContent">
                      <Grid item>
                        <Grid item >
                          <Typography variant="GothamBlack18" component="span">
                            {buildingName}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="DubaiRegular18" component="span">
                            {community}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container columnSpacing={1}>
                          {metaFieldHeadings.map((field, index) => {
                            return (
                              <React.Fragment key={index}>
                                <Grid item textAlign={"center"} pr={1}>
                                  <Grid item>
                                    <Typography
                                      variant="DubaiRegular14Bold"
                                      component="span"
                                    >
                                      {startCase(field)}
                                    </Typography>
                                  </Grid>
                                  {isEqual(
                                    startCase(field),
                                    metaDataFields.floors
                                  ) ? (
                                    <Grid item>
                                      <Typography
                                        variant="DubaiRegular14"
                                        component="span"
                                      >
                                        {floors}
                                      </Typography>
                                    </Grid>
                                  ) : isEqual(
                                      startCase(field),
                                      metaDataFields.units
                                    ) ? (
                                    <Grid item xs>
                                      <Typography
                                        variant="DubaiRegular14"
                                        component="span"
                                      >
                                        {units}
                                      </Typography>
                                    </Grid>
                                  ) : isEqual(
                                      startCase(field),
                                      metaDataFields.listings
                                    ) ? (
                                    <Grid item xs>
                                      <Typography
                                        variant="DubaiRegular14"
                                        component="span"
                                      >
                                        {listings?.length}
                                      </Typography>
                                    </Grid>
                                  ) : (
                                    <Grid item xs>
                                      <Typography
                                        variant="DubaiRegular14Bold"
                                        component="span"
                                      >
                                        {field}
                                      </Typography>
                                    </Grid>
                                  )}
                                </Grid>
                                {!isEqual(
                                  index,
                                  metaFieldHeadings.length - 1
                                ) && (
                                  <Divider
                                    className="whiteDivider"
                                    orientation="vertical"
                                    textAlign="center"
                                    flexItem
                                  />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      {data.length > defaultItems && (
        <Grid
          className="similarBuildingsSectionHeading"
          container
          item
          alignItems="center"
          spacing={1}
          onClick={handleClick}
        >
          <Grid item>
            <Typography variant="DubaiRegular18" ml={0}>
              {expanded ? dropDownText.expanded : dropDownText.collapsed}
            </Typography>
          </Grid>
          <Grid item mt={expanded ? 0 : 1}>
            <ListingCardIcon
              shape={
                expanded ? dropDownIcons.expanded : dropDownIcons.collapsed
              }
              color={iconColor}
              width={iconWidth}
              height={iconHeight}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default SimilarBuildings;
