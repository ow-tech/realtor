import React, { useState, useEffect } from "react";
import { MenuItem, Box, Typography, Grid } from "@mui/material";
import { ExpandMoreSharp, Check } from "@mui/icons-material";

const SimpleSelect = ({
  value,
  onChange,
  items = [],
  flag = false,
  isPropertyType = false,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    if (items.length <= 1 && value === "All Cities") {
      return;
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getFlagImage = (imageName) => {
    try {
      const formattedImageName = imageName.toLowerCase().replace(/\s+/g, "-");
      const flagImage = `/images/EmiratesFlags/${formattedImageName}.png`;
      return flagImage;
    } catch (error) {
      return null;
    }
  };

  const defaultValue = value === "" || value === null ? items[0] : value;

  useEffect(() => {
    if (!items?.includes(value)) {
      onChange(items[0] || "");
    }
  }, [items, onChange, value]);

  return (
    <div
      className="state-select"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid container className="select-button">
        {flag ? (
          <Grid item xs={3} sm={2} className="emirateSelectedValue">
            {defaultValue ? (
              <img
                src={getFlagImage(defaultValue)}
                alt={`${defaultValue} Flag`}
                width={22}
              />
            ) : (
              "🏳️"
            )}
          </Grid>
        ) : null}
        <Grid
          item
          xs={flag ? 7 : 10}
          sm={flag ? 8 : 10}
          pl={1}
          className="option-text"
        >
          <Typography component="span" variant="DubaiRegular16">
            {isPropertyType && defaultValue === "Select All"
              ? "Property Type"
              : defaultValue
              ? defaultValue
              : "Select option"}
          </Typography>
        </Grid>
        <Grid item xs={2} className="emirateExpandArrow">
          <ExpandMoreSharp />
        </Grid>
      </Grid>
      {isHovering && (
        <div className="options">
          {items &&
            items?.map((item) => (
              <MenuItem
                key={item}
                value={item}
                className="menu-item"
                onClick={() => handleOptionClick(item)}
              >
                <Grid container className="simpleSelectMenuItemCont">
                  <Grid item xs={1.5} sm={2}>
                    {item === defaultValue && (
                      <Box className="simpleSelectCheckMark">
                        <Check />
                      </Box>
                    )}
                  </Grid>
                  {flag ? (
                    <Grid item xs={3} sm={2}>
                      {item && getFlagImage(item) ? (
                        <img
                          src={getFlagImage(item)}
                          alt={`${item} Flag`}
                          width={25}
                        />
                      ) : (
                        "🏳️"
                      )}
                    </Grid>
                  ) : null}
                  <Grid item xs={flag ? 7 : 10} sm={flag ? 8 : 10}>
                    <Typography
                      component="span"
                      variant="DubaiRegular16"
                      className="item-label"
                    >
                      {item}
                    </Typography>
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
        </div>
      )}
    </div>
  );
};

export default SimpleSelect;
