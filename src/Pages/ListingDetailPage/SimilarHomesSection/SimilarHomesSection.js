import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Tab, Grid, useMediaQuery } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "../../../Components/Cards/Card";
// import { exclusiveListings } from "../../../Constants/ConstantValues";
import AppContext from "../../../context/AppContext";
import { toCarouselArray } from "../../../utils/utility";
import { getSimilarHomesDetails } from "../../../network/apiServices";
import { useParams } from "react-router-dom";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import {
  isExtraSmallScreens,
  laptopGrids,
  mobGrids,
  tabGrids,
} from "../../../Constants/ConstantValues";

function SimilarHomesSection({ property, rowsPerPage }) {
  const [value, setValue] = useState("RECOMMENDED"); //PRICE ,LAYOUT ,LOCATION ,RECOMMENDED
  const [filteredListings, setFilteredListings] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const { selectedCountry } = useContext(AppContext);
  const listingId = useParams();

  const visibleData = expanded
    ? filteredListings
    : filteredListings?.slice(0, rowsPerPage);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    async function fetchAndSetSimilarHomesData() {
      try {
        const data = {
          similarHomeType: value,
          countryName: selectedCountry,
          listingRefNumber: listingId.id,
        };

        const res = await getSimilarHomesDetails(data);

        let formattedListings = toCarouselArray(
          "title",
          res.data.listings,
          "listingImages"
        );
        setFilteredListings(formattedListings);
      } catch (error) {
        // console.error("Error geting similar homes:", error);
      }
    }
    fetchAndSetSimilarHomesData();
  }, [value, listingId, selectedCountry]);

  const isExtraSmallScreen = useMediaQuery(isExtraSmallScreens);

  return property ? (
    <Box id="similarHomesSection" className="similarHomesContainer">
      <Box className="similarHomesHeader">
        <Typography variant="DubaiRegular30Bold">Similar Homes</Typography>
      </Box>
      <Box className="similarHomesTabAndCardWrapper">
        <Box>
          <TabContext value={value}>
            <Box className="similarHomesTabListWrapper">
              {isExtraSmallScreen ? (
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="indicator"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab
                    label="Recommended"
                    value="RECOMMENDED"
                    typography="DubaiRegular18"
                  />
                  <Tab label="Price" value="PRICE" />
                  <Tab label="Layout" value="LAYOUT" />
                  <Tab label="Location" value="LOCATION" />
                </TabList>
              ) : (
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="indicator"
                  allowScrollButtonsMobile
                >
                  <Tab
                    label="Recommended"
                    value="RECOMMENDED"
                    typography="DubaiRegular18"
                  />
                  <Tab label="Price" value="PRICE" />
                  <Tab label="Layout" value="LAYOUT" />
                  <Tab label="Location" value="LOCATION" />
                </TabList>
              )}
            </Box>
            <TabPanel value={value}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                className="center"
              >
                <Grid container spacing={2}>
                  {visibleData ? (
                    visibleData?.map((item, key) => (
                      <Grid
                        item
                        xs={mobGrids}
                        sm={tabGrids}
                        md={laptopGrids}
                        lg={laptopGrids}
                        key={key}
                      >
                        <Card item={item} key={key} />
                      </Grid>
                    ))
                  ) : (
                    <Typography
                      className="similarHomesSectionText"
                      variant="DubaiRegular18"
                    >
                      No records found
                    </Typography>
                  )}
                </Grid>
                {filteredListings?.length > rowsPerPage && (
                  <Grid
                    className=""
                    container
                    alignItems="center"
                    spacing={1}
                    mt={1}
                    onClick={handleClick}
                  >
                    <Grid item>
                      <Typography variant="DubaiRegular18" ml={0}>
                        {expanded ? "View Less" : "View More"}
                      </Typography>
                    </Grid>
                    <Grid item mt={expanded ? 0 : 1}>
                      <ListingCardIcon
                        shape={expanded ? "arrowRight" : "arrowDown"}
                        color={"black"}
                        width={15}
                        height={12}
                      />
                    </Grid>
                  </Grid>
                )}
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  ) : null;
}

export default SimilarHomesSection;
