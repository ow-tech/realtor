import React, { useContext } from "react";
import { Typography, Box, Grid, Divider } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";
import { objToBase64, removeObjectById } from "../../../../utils/utility";
import AppContext from "../../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { savedSearches } from "../../../../network/apiServices";
import { generatePayload } from "../utils/SavedSearchUtility";
import { errorToast, successToast } from "../../../../utils/useToast";

const SearchedCard = ({
  id,
  country,
  state,
  city,
  buildings,
  exclusive,
  propertyType,
  beds,
  baths,
  price,
  neighbourhood,
  saleOrRent,
}) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const { userObj, userPreferences, setUserPreferences, selectedCountry } =
    context;
  const savedSearchData = userPreferences?.savedSearches;

  // console.log("savedSearchData: ", savedSearchData);

  const mapping = {
    "7+": ["8", "9", "10", "11", "12", "13", "14", "15"],
  };

  const modifiedBeds = beds?.reduce((acc, bed) => {
    const bedNumber = parseInt(bed);
    if (bedNumber >= 8 && bedNumber <= 15) {
      if (!acc.includes("7+")) {
        acc.push("7+");
      }
    } else {
      acc.push(bed);
    }
    return acc;
  }, []);

  const modifiedBaths = baths?.reduce((acc, bath) => {
    const bathNumber = parseInt(bath);
    if (bathNumber >= 8 && bathNumber <= 15) {
      if (!acc.includes("7+")) {
        acc.push("7+");
      }
    } else {
      acc.push(bath);
    }
    return acc;
  }, []);

  // console.log("beds:", modifiedBeds);

  const handleSearchRedirect = () => {
    const payload = generatePayload(
      selectedCountry,
      state,
      city,
      saleOrRent,
      neighbourhood,
      buildings,
      price,
      propertyType,
      exclusive,
      beds,
      baths,
      mapping
    );

    const base64Str = objToBase64(payload);

    navigate(`/${saleOrRent.toLowerCase()}/search?value=${base64Str}`);
  };

  const handleRemove = (id) => {
    const payload = {
      savedAction: "DELETE",
      savedSearchId: id,
      email: userObj?.email,
    };
    savedSearches(payload)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          successToast(`Deleted successfully`);
          let newProp = removeObjectById(id, savedSearchData, "savedSearchId");

          const updatedData = {
            ...userPreferences,
            savedSearches: newProp,
          };

          setUserPreferences(updatedData);
        }
      })
      .catch((err) => {
        errorToast(`Error: ${err}`);
      });
  };
  return (
    <>
      <Box className="savedSearchContainer">
        <div>
          <Grid container alignItems="center">
            <Grid item xs={11.5} className="savedSearchLocHeading">
              <Typography variant="DubaiRegular16Bold">Location:</Typography>
            </Grid>
            <Grid item xs={0.5} className="savedSearchRemoveBtn">
              <Box
                onClick={() => {
                  handleRemove(id);
                }}
              >
                <Typography variant="DubaiRegular20Bold" color="red">
                  x
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container my={1}>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Country:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">{country}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">City:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">
                {city ? city : "All Cities"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Building:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box className="savedSearchAreaText">
                {buildings.length > 0 ? (
                  buildings?.map((item, id) => (
                    <Typography variant="DubaiRegular16" key={id}>
                      {item}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="DubaiRegular16">
                    No building selected
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Grid container my={1}>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Property type:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">
                {propertyType ? propertyType : "All"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Beds:</Typography>
            </Grid>
            <Grid item xs={6}>
              {modifiedBeds ? (
                modifiedBeds.map((item, id, arr) => (
                  <Typography key={id} variant="DubaiRegular16">
                    {item === "ALL" ? "Any" : item === "0" ? "Studio" : item}
                    {id !== arr.length - 1 && ", "}
                  </Typography>
                ))
              ) : (
                <Typography key={id} variant="DubaiRegular16">
                  Any
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Baths:</Typography>
            </Grid>
            <Grid item xs={6}>
              {modifiedBaths ? (
                modifiedBaths?.map((item, id, arr) => (
                  <Typography key={id} variant="DubaiRegular16">
                    {item === "ALL" ? "Any" : item}
                    {id !== arr.length - 1 && ", "}
                  </Typography>
                ))
              ) : (
                <Typography key={id} variant="DubaiRegular16">
                  Any
                </Typography>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">Price:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="DubaiRegular16">{price}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Box my={1}>
            <Typography variant="DubaiRegular16">Neighbourhood: </Typography>
            {neighbourhood.length > 0 ? (
              neighbourhood?.map((item, id, arr) => (
                <Typography key={id} variant="DubaiRegular16">
                  {item}
                  {id !== arr.length - 1 && ", "}
                </Typography>
              ))
            ) : (
              <Typography variant="DubaiRegular16">
                No neighbourhood selected
              </Typography>
            )}
          </Box>
        </div>
        <CustomButton
          onClick={handleSearchRedirect}
          text="Search"
          rightIcon={<ButtonRightArrow />}
        />
      </Box>
    </>
  );
};

export default SearchedCard;
