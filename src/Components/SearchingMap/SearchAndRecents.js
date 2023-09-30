import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import CustomDirectionsControl from "./CustomDirectionsControl";
import { LocationIcon } from "../../Assets/SVG/Common/CommonSvgs";

const SearchAndRecents = ({
  handleSetDestination,
  searchResults = [],
  setSearchResults,
}) => {
  const handleDelete = (index) => {
    setSearchResults((prevSearchResults) => {
      const updatedSearchResults = [...prevSearchResults];
      updatedSearchResults.splice(index, 1); // Remove the search result at the specified index
      return updatedSearchResults;
    });
  };

  return (
    <Box className="searchHistoryMainContainer">
      <Box className="mapTransitHeading">
        <Typography
          className="contactAgentSectionHeading"
          variant="GothamBlack24"
        >
          Calculate your travel time
        </Typography>
      </Box>

      <Typography variant="DubaiRegular18">
        Check out how long your daily travel will take from this property:
      </Typography>
      <Typography variant="DubaiRegular18">
        You can calculate up to 3 travel times.
      </Typography>

      <CustomDirectionsControl onSetDestination={handleSetDestination} />

      <Box mt={2}>
        {searchResults.map((result, index) => (
          <React.Fragment key={index}>
            <Grid container mt={1}>
              <Grid item xs={1}>
                <Box className="searchHistoryLocationIcon">
                  <LocationIcon />
                </Box>
              </Grid>

              <Grid item xs={11} className="searchHistoryDetailContainer">
                <Typography variant="DubaiRegular16Bold">
                  {result.address?.split(",")[0]}
                </Typography>
                <Box className="searchHistoryDetails">
                  {result.walking !== null && (
                    <Typography variant="DubaiRegular14">
                      Walking: {Number(result.walking / 60).toFixed(0)} mins
                    </Typography>
                  )}
                  {result.driving !== null && (
                    <Typography variant="DubaiRegular14">
                      Driving: {Number(result.driving / 60).toFixed(0)} mins
                    </Typography>
                  )}
                  <Typography
                    variant="DubaiRegular14Bold"
                    className="searchHistoryDeleteButton"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {index < searchResults.length - 1 && (
              <hr className="searchHistoryHr" />
            )}
          </React.Fragment>
        ))}
      </Box>
      <Box className="searchHistoryNote">
        <Box className="searchHistoryNoteCircle">
          <div className="circle backgroundModerateCyan">
            <Typography variant="DubaiRegular12">A</Typography>
          </div>
          <Typography variant="DubaiRegular14"> Starting Point</Typography>
        </Box>

        <Box className="searchHistoryNoteCircle">
          <div className="circle backgroundDesaturatedBlue">
            <Typography variant="DubaiRegular12">B</Typography>
          </div>
          <Typography variant="DubaiRegular14"> Destination Point</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchAndRecents;
