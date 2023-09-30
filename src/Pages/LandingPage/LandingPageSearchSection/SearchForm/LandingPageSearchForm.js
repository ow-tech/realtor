import React, { useState, useContext } from "react";
import { TextField, Paper, Autocomplete, Typography } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import AppContext from "../../../../context/AppContext";
import { rearrangeSearchData } from "../../../../utils/utility";

function SearchForm({ customClassName, placeholder, setEnteredValuesArray }) {
  const [inputValue, setInputValue] = useState("");
  const { allSearchData } = useContext(AppContext);

  const searchData = rearrangeSearchData(allSearchData, true);

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
    if (newValue) {
      setInputValue("");
      setEnteredValuesArray((prevEnteredValues) => [
        ...prevEnteredValues,
        {
          key: newValue.key,
          value: newValue.value,
        },
      ]);
    }
  };

  return (
    <Paper className={`searchFormPaper ${customClassName}`} component="form">
      <Autocomplete
        noOptionsText="No records found."
        className="buildingGuidesAutoComplete"
        size="small"
        id="grouped-demo"
        fullWidth
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={handleOptionChange}
        options={sortedOptions}
        groupBy={(option) => option.key}
        getOptionLabel={(option) => option.value}
        filterOptions={customFilterOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
            }}
            className="landingAutocompleteTextField"
          />
        )}
        renderOption={(props, option) => {
          const value = option.value;
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
