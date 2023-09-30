import React from "react";
import {TextField,Autocomplete,Box} from "@mui/material";


function SearchBuildingGuide({searchOptions,handleOptionChange}) {
    const GroupHeader = ({ group }) => <strong className="searchGroupItems">{group}</strong>;
const GroupItems = ({ children }) => (
  <ul className="searchGroupChildren">{children}</ul>
);
const sortOptionsByCategory = () => {
  return searchOptions.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.title.localeCompare(b.title);
  });
};
  const sortedOptions = sortOptionsByCategory(searchOptions);

  const groupedOptions = {};
  sortedOptions.forEach((option) => {
    if (!groupedOptions[option.category]) {
      groupedOptions[option.category] = [];
    }
    groupedOptions[option.category].push(option);
  });
  const uniqueCategories = Object.keys(groupedOptions);
 
  return (
    <Box className='buildingGuidesAutoCompleteWrapper'>

        <Autocomplete
        className="buildingGuidesAutoComplete"
        size="small"
          id="grouped-demo"
          options={sortedOptions}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.title}
          sx={{ width: 450 }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Search"   />
          )}
          renderGroup={(params) =>
            uniqueCategories.includes(params.group) && (
              <li key={params.key}>
                <GroupHeader group={params.group} />
                <GroupItems >{params.children}</GroupItems>
              </li>
            )
          }
          onChange={handleOptionChange}
        />
    </Box>
  );
}

export default SearchBuildingGuide;
