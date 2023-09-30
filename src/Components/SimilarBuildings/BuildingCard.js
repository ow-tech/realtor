import React, { useContext } from "react";
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
import AppContext from "../../context/AppContext";
import { removeObjectById } from "../../utils/utility";
import { savedBuilding } from "../../network/apiServices";
import { Link } from "react-router-dom";
import { defaultBuildingImageImages } from "../../Constants/ConstantValues";

function BuildingCard({
  building,
  metaDataFields,
  defaultItems,
  hasHeart,
  hasThreeSixZero,
  imgHeight = "268px",
}) {
  const context = useContext(AppContext);
  const { userObj, userPreferences, setUserPreferences } = context;
  const savedBuildings = userPreferences?.savedBuildings;

  const handleLike = () => {
    if (userObj && building?.liked) {
      const payload = {
        savedAction: "DELETE",
        buildingReferenceId: building?.buildingReferenceId,
        email: userObj?.email,
      };

      savedBuilding(payload)
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            let newProp = removeObjectById(
              building?.buildingReferenceId,
              savedBuildings,
              "buildingReferenceId"
            );

            const updatedData = {
              ...userPreferences,
              savedBuildings: newProp,
            };

            setUserPreferences(updatedData);
          }
        })
        .catch((err) => {});
    }
  };

  // console.log("building card building obj: ", building);
  const metaFieldHeadings = Object.keys(metaDataFields);

  let id = building.buildingReferenceId;
  let image =
    building.leadImageUrl && building.leadImageUrl !== ""
      ? building.leadImageUrl
      : defaultBuildingImageImages.images[0].imgPath;
  let buildingName = building.buildingName;
  let community = building.buildingLocationArea;
  let floors = building.buildingStoriesOrFloors;
  let units = building.residentialUnits;
  let listings = building.listings;

  return (
    <Grid item xs={12} sm={12 / defaultItems}>
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
              <IconButton className="upperBoxListingCardIcon">
                <ListingCardIcon shape={"360"} />
              </IconButton>
            )}

            {hasHeart && (
              <IconButton
                className="upperBoxListingCardIcon"
                onClick={() => handleLike(id)}
              >
                <ListingCardIcon
                  shape={building?.liked ? "alreadyLiked" : "like"}
                />
              </IconButton>
            )}
          </Grid>
          <Link
            to={`/building/${buildingName}/${id}`}
            state={building}
            className="similarBuildingsLink"
          >
            <CardMedia
              className="similarBuildingsCardMedia"
              sx={{ height: imgHeight }}
              image={image}
              title={buildingName}
            />
            <CardContent className="similarBuildingsCardContent">
              <Grid item>
                <Grid item xs={12}>
                  <Typography variant="GothamBlack18" component="span">
                    {buildingName}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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
                          {isEqual(startCase(field), metaDataFields.floors) ? (
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
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                              <Typography
                                variant="DubaiRegular14"
                                component="span"
                              >
                                {listings}
                              </Typography>
                            </Grid>
                          ) : (
                            <Grid item xs={12}>
                              <Typography
                                variant="DubaiRegular14Bold"
                                component="span"
                              >
                                {field}
                              </Typography>
                            </Grid>
                          )}
                        </Grid>
                        {!isEqual(index, metaFieldHeadings.length - 1) && (
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
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
}

export default BuildingCard;
