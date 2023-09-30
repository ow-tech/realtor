import React, { useContext, useState } from "react";
import {
  TextField,
  InputAdornment,
  Paper,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import AppContext from "../../../../context/AppContext";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { objToBase64 } from "../../../../utils/utility";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
import {
  isMediumScreens,
  isSmallScreens,
} from "../../../../Constants/ConstantValues";

const AgentSearchForm = ({setLoading}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { allSearchData } = useContext(AppContext);

  const navigate = useNavigate();

  const isMediumScreen = useMediaQuery(isMediumScreens);
  const isSmallScreen = useMediaQuery(isSmallScreens);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleResultItemClick = (data) => {
    // Handle the click event here and use the itemData received as the parameter
    setLoading(true)
    const value = data.type === "leaf" ? data.value : data.name;
    // Update the search bar value with the clicked item's value
    setSearchQuery(value);

    //convert agent data and pass it as url param
    const agentName = data?.value ? data.value : data.name;
    const agentEmail = data?.email;
    const queryParamValue = objToBase64({ agentName, agentEmail });
    setLoading(false)
    navigate(
      `/agent-profile/${encodeURIComponent(agentName)}?agent=${queryParamValue}`
    );
    setLoading(false)
  };

  // Function to filter matching subs and leaves based on searchQuery
  // Function to filter matching subs and leaves based on searchQuery
  const getMatchingItems = () => {
    if (!searchQuery.trim()) {
      return [];
    }

    const matchingItems = [];
    const leafItems = []; // To store leaf type items
    const subItems = []; // To store sub type items

    Object.keys(allSearchData).map((categoryKey) => {
      const categoryItems = allSearchData[categoryKey];

      // Check if any subs or leaves match the search query in the current category
      categoryItems.map((item) => {
        if (item.value.toLowerCase().includes(searchQuery.toLowerCase())) {
          if (item.workingAgents) {
            // It's a sub, so push its value and workingAgents
            subItems.push({
              type: "sub",
              value: item.value,
              leaves: item.workingAgents,
            });
          } else {
            // It's a leaf, so push its value and email
            leafItems.push({
              type: "leaf",
              value: item.value,
              email: item.email,
            });
          }
        }
        return null;
      });
      return null;
    });
    leafItems.sort((a, b) => a.value.localeCompare(b.value));
    subItems.sort((a, b) => a.value.localeCompare(b.value));
    matchingItems.push(...subItems, ...leafItems);
    return matchingItems;
  };

  return (
    <Grid className="searchContainer">
      <Paper className="searchFormPaper agentSearchFormPaper" component="form">
        <TextField
          className="landingAutocompleteTextField agentSearchBox"
          variant="standard"
          placeholder="City, Neighbourhood, Building, Agent"
          fullWidth
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <ListingCardIcon
                  shape="searchIcon"
                  height={isSmallScreen ? 30 : 31}
                />
              </InputAdornment>
            ),
          }}
          value={searchQuery}
          onChange={handleSearchChange}
          size={isSmallScreen ? "small" : isMediumScreen ? "normal" : "normal"}
        />
      </Paper>
      {searchQuery && ( // Only display the results if searchQuery is not empty
        <Grid className="resultListContainer" item>
          <Grid className="searchResultList" container>
            {isEqual(getMatchingItems().length, 0) ? (
              <Grid item xs={12} px={2}>
                <Typography
                  className="agentSearchNoOptions"
                  variant="AlwynNewRoundedRegular14"
                >
                  {" "}
                  No records found.
                </Typography>
              </Grid>
            ) : (
              getMatchingItems().map((item, index) => {
                if (item.type === "sub") {
                  return (
                    <Grid key={index} item xs={12}>
                      <Grid container>
                        <Grid className="searchResultItemsHeading" item xs={12}>
                          <Typography
                            variant="AlwynNewRoundedRegular16Bold"
                            key={index}
                            className={`searchTypographyChild`}
                          >
                            {parse(
                              item.value,
                              match(item.value, searchQuery, {
                                insideWords: true,
                              })
                            ).map((part, index) => (
                              <span
                                key={index}
                                className={`searchTypographyChild ${
                                  part.highlight ? "highlighted" : " "
                                }`}
                              >
                                {part.text.replace(/ /g, "\u00A0")}
                                {/* Use &nbsp; for spaces */}
                              </span>
                            ))}
                          </Typography>
                        </Grid>

                        <Grid container>
                          {item.leaves.map((leaf, leafIndex) => (
                            <Grid
                              key={leafIndex}
                              item
                              xs={12}
                              className="searchResultItem"
                              onClick={() => handleResultItemClick(leaf)}
                            >
                              <Typography variant="AlwynNewRoundedRegular14">
                                {leaf.name}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                } else if (item.type === "leaf") {
                  return (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      className="searchResultItem"
                      onClick={() => handleResultItemClick(item)}
                    >
                      <Typography
                        variant="AlwynNewRoundedRegular14"
                        key={index}
                        className={`searchTypographyChild `}
                      >
                        {parse(
                          item.value,
                          match(item.value, searchQuery, { insideWords: true })
                        ).map((part, index) => (
                          <span
                            key={index}
                            className={`searchTypographyChild ${
                              part.highlight ? "highlighted" : " "
                            }`}
                          >
                            {part.text.replace(/ /g, "\u00A0")}
                            {/* Use &nbsp; for spaces */}
                          </span>
                        ))}
                      </Typography>
                    </Grid>
                  );
                }
                return null;
              })
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default AgentSearchForm;
