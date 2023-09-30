import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Paper,
  Autocomplete,
  Typography,
  InputAdornment,
} from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import AppContext from "../../../../context/AppContext";
import { rearrangeSearchData, objToBase64 } from "../../../../utils/utility";
import { useNavigate } from "react-router-dom";
import { getAgentDetails } from "../../../../network/apiServices";

function SearchForm({ setLoading }) {
  const [inputValue, setInputValue] = useState("");

  const { allSearchData, buyOrRent, setAgentData } = useContext(AppContext);
  const navigate = useNavigate();

  const searchData = rearrangeSearchData(allSearchData);
  const GroupHeader = ({ group }) => (
    <div className="searchGroupItems searchGroupItemsWrapperHome">
      <Typography
        variant="AlwynNewRoundedRegular16Bold"
        className="searchGroupItemsHome"
      >
        {group}
      </Typography>
    </div>
  );
  const GroupItems = ({ children }) => (
    <ul className="searchGroupChildrenHome">
      <Typography variant="AlwynNewRoundedRegular14">{children}</Typography>
    </ul>
  );

  const sortOptionsByCategory = (options) => {
    return options.sort((a, b) => {
      if (a.key !== b.key) {
        return a.key.localeCompare(b.key);
      }
      return a.value.localeCompare(b.value);
    });
  };

  const groupedOptions = {};
  const sortedOptions = sortOptionsByCategory(searchData);
  sortedOptions.forEach((option) => {
    if (!groupedOptions[option.key]) {
      groupedOptions[option.key] = [];
    }
    groupedOptions[option.key].push(option);
  });
  const uniqueCategories = Object.keys(groupedOptions);

  const customFilterOptions = (options) => {
    const inputValueLowerCase = inputValue ? inputValue.toLowerCase() : "";
    return options.filter((option) =>
      option.value.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const handleOptionChange = (event, newValue) => {
    newValue.buyOrRent = buyOrRent;
    // const  = "exampleValue";

    switch (newValue.key) {
      case "Agent":
        setLoading(true);

        // form new object and redirect
        async function getAgentsData() {
          try {
            const agent = await getAgentDetails({
              agentEmail: [newValue.email],
            });
            const agentData = agent.data.agentDetails[0];

            setAgentData(agentData);
            const queryParamValue = objToBase64(agentData);
            navigate(
              `/agent-profile/${newValue.value}?agent=${queryParamValue}`
            );
            setLoading(false);
          } catch (error) {
            // console.error("Error fetching agent:", error);
          }
        }
        getAgentsData();

        break;

      default:
        const queryParamValue = objToBase64(newValue);
        navigate(`${buyOrRent}/search?value=${queryParamValue}`);
    }
  };

  useEffect(() => {}, [buyOrRent]);

  return (
    <Paper className="searchFormPaper" component="form">
      <Autocomplete
        noOptionsText="No records found."
        className="buildingGuidesAutoComplete"
        size="small"
        id="grouped-demo"
        fullWidth
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={handleOptionChange}
        options={sortedOptions}
        groupBy={(option) => option.key}
        getOptionLabel={(option) => option.value} // Use option.value instead of option.key
        filterOptions={customFilterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="City, Neighbourhood, Building, Agent"
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              endAdornment: (
                // <div className="searchIconWrapper">
                <InputAdornment position="end">
                  <ListingCardIcon shape="searchIcon" />
                  {/* <SearchIcon className="landingPageTextFieldsearchIcon" /> */}
                </InputAdornment>
                // </div>
              ),
            }}
            className="landingAutocompleteTextField"
          />
        )}
        renderOption={(props, option) => {
          const value = option.value; // Use option.key as the value to display
          const matches = match(value, inputValue, {
            insideWords: true,
          });
          const parts = parse(value, matches);

          return (
            <li {...props}>
              {parts.map((part, index) => (
                <Typography
                  variant="AlwynNewRoundedRegular14"
                  key={index}
                  className={`searchTypographyChild ${
                    part.highlight ? "highlighted" : " "
                  }`}
                >
                  {part.text.replace(/ /g, "\u00A0")}
                  {/* Use &nbsp; for spaces */}
                </Typography>
              ))}
            </li>
          );
        }}
        renderGroup={(params) =>
          uniqueCategories.includes(params.group) && (
            <li key={params.key}>
              {inputValue !== "" && <GroupHeader group={params.group} />}
              {inputValue !== "" && <GroupItems>{params.children}</GroupItems>}
            </li>
          )
        }
      />
    </Paper>
  );
}

export default SearchForm;
