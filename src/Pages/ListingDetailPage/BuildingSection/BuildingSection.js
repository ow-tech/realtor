import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Stack} from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import RatingsAAAndStar from "../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { cdnPath } from "../../../Constants/StaticPagesConstants";
import { notAvailable } from "../../../Constants/ConstantValues";

import { extractMasterDeveloper } from "../../../utils/utility";
import isEqual from 'lodash/isEqual';
import { capitalizeWords } from "../../../utils/utility";

function BuildingSection({ buildingObject, width = 544, height = 473 }) {
  const [detailItems, setDetailItems] = useState({});


  // const isMediumScreen = useMediaQuery(isMediumScreens);
 
  useEffect(() => {
    if (buildingObject) {
      const getPropertyTypesString = (buildingObject) => {
        const propertyTypes = [];

        if (buildingObject.penthousefROM || buildingObject.penthouseTo) {
          propertyTypes.push("Penthouse");
        }

        if (buildingObject.apartmentsFrom || buildingObject.apartmentsTO) {
          propertyTypes.push("Apartments");
        }

        if (buildingObject.duplexFrom || buildingObject.duplexTo) {
          propertyTypes.push("Duplex");
        }

        if (buildingObject.triplexFrom || buildingObject.triplexTo) {
          propertyTypes.push("Triplex");
        }
        if (buildingObject.townhouseFrom || buildingObject.townhouseTo) {
          propertyTypes.push("Townhouse");
        }

        if (buildingObject.villaFrom || buildingObject.villaTo) {
          propertyTypes.push("Villa");
        }

        return propertyTypes.join(", ");
      };
      const developerEntry = buildingObject.crmAssociates
        ? buildingObject.crmAssociates.find(
            (associate) => associate.crmAssociateType === "Developer"
          )
        : null;

      setDetailItems({
        Building:capitalizeWords(buildingObject.buildingName || buildingObject.subAreaSubCommunity),
        Developer: developerEntry
          ? extractMasterDeveloper(developerEntry.crmAssociate)
          : notAvailable,

        Stories:buildingObject.stories && !isEqual(buildingObject.stories,'')? buildingObject.stories:notAvailable,
         
        Units:
          buildingObject.residentialUnits
          && !isEqual( buildingObject.residentialUnits,'')? buildingObject.residentialUnits:notAvailable,
         
        "Property Use":
        capitalizeWords(buildingObject.buildingUsage?buildingObject.buildingUsage:buildingObject.PropertyType?buildingObject.PropertyType:notAvailable),
        "Year Built": buildingObject.yearCompleted && !isEqual(buildingObject.yearCompleted,'')?buildingObject.yearCompleted :notAvailable,
        "Units Type":!isEqual(getPropertyTypesString(buildingObject),'')? getPropertyTypesString(buildingObject):notAvailable,
      });
    }
  }, [buildingObject]);


  return buildingObject && Object.keys(detailItems).length > 0 ? (
    <Box id="buildingSection" className="buildingSectionWrapper">
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={0}
        useFlexGap
        flexWrap="wrap"
      >
        <Box className="buildingImageWrapper">
          <LazyLoadImage
            src={
              buildingObject.buildingImages && !isEqual(buildingObject.buildingImages[0],null)
                ? `${buildingObject.buildingImages[0]}?tr=w-${width},h-${height}`
                : `${cdnPath}/dbuilding/1.jpg?tr=w-${width},h-${height}`
            }
            className="defaultNeighborhoodImage"
          />
        </Box>
        <Box className="buildingTextWrapper">
          <Typography variant="AlwynNewRoundedRegular28">
            {capitalizeWords(buildingObject.buildingName)}
          </Typography>
          <Box className="ratingsStarBuildingSection">
            <RatingsAAAndStar
            buildingObject={buildingObject}
              darkStars={false}
              className="ratingsStarBuildingSection"
            />
          </Box>

          <Box className="buildingDetailsGridWrapper">
            <Grid container spacing={2}>
              {Object.entries(detailItems).map(([key, value], index) => (
                <React.Fragment key={index}>
                  <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="AlwynNewRoundedRegular16">
                      {key}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    {index === 0 ? ( // Check if it's the first item
                      <Link
                      to={`/building/${buildingObject.buildingName}/${buildingObject.referenceNo}`}
                        className="buildingSectionLinkStylesWithUnderline"
                      >
                        {
                          <Typography variant="AlwynNewRoundedRegular16" >
                            {value}
                          </Typography>
                        }
                      </Link>
                    ) : (
                      <Typography variant="AlwynNewRoundedRegular16">
                        {value}
                      </Typography>
                    )}
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <Box className="buildingSectionButtonWrapper">
            <Grid container>
              <Grid item xs={12} sm={10} md={10}>
                <Link
                  to={`/building/${buildingObject.buildingName}/${buildingObject.referenceNo}`}
                  className="buildingSectionLinkStyles"
                >
                  <CustomButton
                    dark={false}
                    text="Learn more about the Building"
                    typographyVariant="AlwynNewRoundedRegular16"
                    rightIcon={<ButtonRightArrow />}
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Box>
  ) : null;
}

export default BuildingSection;
