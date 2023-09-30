import React, { useState, useRef } from "react";
import { ExpandMoreSharp } from "@mui/icons-material";
import { Typography, Grid } from "@mui/material";

const MultipleGroupSelect = ({ data, selectedBedsBaths, handleBedsBaths }) => {
  const [isHovering, setIsHovering] = useState(false);
  const listItemsRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="multipleFilterContainer">
      <Grid
        container
        className={`select-btn ${isHovering ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Grid item xs={10} className="btn-text">
          <Typography component="span" variant="DubaiRegular16">
            {selectedBedsBaths.beds.includes("Any")
              ? selectedBedsBaths.beds
                  .filter((item) => item !== "Any")
                  .map((item) => (item === "0" ? "Studio" : item))
                  .join(", ") + " Beds"
              : selectedBedsBaths.beds.length > 0
              ? selectedBedsBaths.beds
                  .map((item) => (item === "0" ? "Studio" : item))
                  .join(", ") + " Beds"
              : "Beds"}{" "}
            &{" "}
            {selectedBedsBaths.baths.includes("Any")
              ? selectedBedsBaths.baths
                  .filter((item) => item !== "Any")
                  .join(", ") + " Baths"
              : selectedBedsBaths.baths.length > 0
              ? `${selectedBedsBaths.baths.join(", ")} Baths`
              : "Baths"}
          </Typography>
        </Grid>
        <Grid item xs={2} className="arrow-dwn">
          <ExpandMoreSharp />
        </Grid>
      </Grid>
      {isHovering && (
        <div
          className="list-items"
          ref={listItemsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="DubaiRegular16Bold">Bedrooms</Typography>
          <Grid container className="items-container">
            {data.beds.map((item, ind) => (
              <Grid
                item
                xs={2}
                sm={1.2}
                md={1.23}
                lg={1.25}
                key={ind}
                className={`item ${
                  selectedBedsBaths.beds.includes(item) ? "checked" : ""
                }`}
                onClick={() => handleBedsBaths("beds", item)}
              >
                <Typography variant="DubaiRegular14" className="item-text">
                  {item === "0" ? "Studio" : item}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Typography variant="DubaiRegular16Bold">Bathrooms</Typography>
          <Grid container className="items-container">
            {data.baths.map((item, ind) => (
              <Grid
                item
                xs={2}
                sm={1.2}
                md={1.23}
                lg={1.25}
                key={ind}
                className={`item ${
                  selectedBedsBaths.baths.includes(item) ? "checked" : ""
                }`}
                onClick={() => handleBedsBaths("baths", item)}
              >
                <Typography variant="DubaiRegular14" className="item-text">
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MultipleGroupSelect;
