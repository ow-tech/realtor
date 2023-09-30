import React, { useEffect, useState } from "react";
import { Divider, Grid, Stack, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoIconDescription from "../../../../Components/InfoIconDescription/InfoIconDescription";
import { InfoIcon } from "../../../../Assets/SVG/Common/CommonSvgs";
import { Link as ScrollLink } from "react-scroll";

const _ = require("lodash");

const AmenitiesLists = ({
  leftData,
  rightData,
  reactComponentLeft,
  reactComponent,
  reactComponentRight,
  buildingDividers,
  buildingObject,
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleLeftData = expanded ? leftData : leftData.slice(0, 9);
  const visibleRightData = expanded ? rightData : rightData.slice(0, 9);
  // const propertyAmenities = visibleLeftData;
  // const buildingAmenities = visibleRightData;
  // console.log(' leftData,', leftData)
  const handleClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {}, [buildingObject]);

  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        // alignItems={"center"}
        className="amenitiesListsContainer"
        id='amenitiesItemsBox'
      >
        {reactComponent ? 
        // <Grid item xs>
reactComponent()
       : null}

        {buildingDividers ? (
          <Grid item xs={12} mt={2} flexDirection={"column"}>
            {visibleLeftData.map((item, id) => {
              return (
                <React.Fragment key={id}>
                  <Grid container my={0.3}>
                    {_.isArray(item) ? (
                      <Grid
                        item
                        xs={4}
                        sm={4}
                        md={4}
                        className="serviceChargeWithIcon"
                      >
                        <Typography variant="DubaiRegular18">
                          {item[0]}
                        </Typography>
                        <Box className="buildingInfoIcon">
                          <div className="tagWithInfoIconContainer">
                            <InfoIcon />
                            <div className="tagWithInfoIconTextBox">
                              <InfoIconDescription
                                heading={item[3]}
                                headingColor={"#777575"}
                                description={item[4]}
                              />
                            </div>
                          </div>
                        </Box>
                      </Grid>
                    ) : (
                      <Grid item xs={4}>
                        <Typography variant="DubaiRegular18">
                          {item}{" "}
                        </Typography>
                      </Grid>
                    )}
                    <Grid item xs={8}>
                      <Typography variant="DubaiRegular18">
                        {visibleRightData[id]}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </React.Fragment>
              );
            })}
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={5.5} mr={4}>
              {visibleLeftData.length > 0 ? reactComponentLeft() : null}
              {visibleLeftData.map((item, id) => {
                return (
                  <Stack key={id} direction={"column"} spacing={0.5} mt={0.5}>
                    <Typography variant="DubaiRegular18">{item}</Typography>
                    <Divider />
                  </Stack>
                );
              })}
              <ScrollLink
                to="amenitiesItemsBox"
                smooth={true}
                offset={-200}
                duration={500}
              >
                <Box
                  className="amenitiesListViewBtnItems"
                  onClick={handleClick}
                >
                  {expanded && leftData.length > 9 ? (
                    <>
                      <Typography variant="DubaiRegular18">
                        View Less
                      </Typography>
                      <KeyboardArrowUpIcon />
                    </>
                  ) : leftData.length > 9 ? (
                    <>
                      <Typography variant="DubaiRegular18">
                        View more
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </>
                  ) : null}
                </Box>
              </ScrollLink>
            </Grid>
            <Grid item xs={12} sm={5.5}>
              {visibleRightData.length > 0 ? reactComponentRight() : null}
              {visibleRightData.map((item, id) => {
                return (
                  <Stack key={id} direction={"column"} spacing={0.5} mt={0.5}>
                    <Typography variant="DubaiRegular18">{item}</Typography>
                    <Divider />
                  </Stack>
                );
              })}
              <ScrollLink
                to="amenitiesItemsBox"
                smooth={true}
                offset={-200}
                duration={500}
              >
                <Box
                  className="amenitiesListViewBtnItems"
                  onClick={handleClick}
                >
                  {expanded && rightData.length > 9 ? (
                    <>
                      <Typography variant="DubaiRegular18">
                        View Less
                      </Typography>
                      <KeyboardArrowUpIcon />
                    </>
                  ) : rightData.length > 9 ? (
                    <>
                      <Typography variant="DubaiRegular18">
                        View more
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </>
                  ) : null}
                </Box>
              </ScrollLink>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default AmenitiesLists;
