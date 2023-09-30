import React, { useState, useRef, useContext } from "react";
import { ExpandMoreSharp } from "@mui/icons-material";
import { Typography, Grid, Divider } from "@mui/material";
import NumberInputDropdown from "./NumberInputDropdown";
import AppContext from "../../../context/AppContext";

const values = [
  "10,000",
  "20,000",
  "30,000",
  "40,000",
  "50,000",
  "60,000",
  "70,000",
  "80,000",
  "90,000",
  "100,000",
];

const NestedSelect = ({
  selectedPeriod,
  setSelectedPeriod,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  params,
}) => {
  const context = useContext(AppContext);
  const { selectedCurrency } = context;
  const listItemsRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handlePeriod = (value) => {
    setSelectedPeriod(value);
  };

  const rentalPeriod = ["Yearly", "Monthly", "Weekly", "Daily"];

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
            {/* Conditionally display minPrice and maxPrice */}
            {minPrice && maxPrice
              ? `${minPrice} - ${maxPrice}`
              : minPrice
              ? `${minPrice} - `
              : maxPrice
              ? `Up to ${maxPrice}`
              : "Price"}
          </Typography>
        </Grid>
        <Grid item xs={2} className="arrow-dwn">
          <ExpandMoreSharp />
        </Grid>
      </Grid>
      {isHovering && (
        <div
          className="nestedListItems"
          ref={listItemsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="multipleFilterPriceContainer">
            <span className="width42">
              <NumberInputDropdown
                text={`Min. Price ${selectedCurrency}`}
                price={minPrice}
                setPrice={setMinPrice}
                values={values}
              />
            </span>
            <span className="width6">
              <Divider
                className="multipleFilterDivider"
                orientation="horizontal"
              />
            </span>
            <span className="width42">
              <NumberInputDropdown
                text={`Max. Price ${selectedCurrency}`}
                price={maxPrice}
                setPrice={setMaxPrice}
                values={values}
              />
            </span>
          </div>
          {params === "rent" && (
            <>
              <Typography variant="DubaiRegular16Bold">
                Rental Period
              </Typography>
              <ul className="items-container">
                {rentalPeriod?.map((item, ind) => (
                  <li
                    key={ind}
                    className={`item ${
                      selectedPeriod === item ? "checked" : ""
                    }`}
                    onClick={() => handlePeriod(item)}
                  >
                    <Typography variant="DubaiRegular14" className="item-text">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NestedSelect;
