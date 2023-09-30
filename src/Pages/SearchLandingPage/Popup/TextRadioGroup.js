import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import NumberInputDropdown from "../CustomSelect/NumberInputDropdown";

const values = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
];

const TextRadioGroup = ({
  listArray,
  selected,
  handleList,
  numberInput = false,
  min = null,
  setMin = null,
  max = null,
  setMax = null,
}) => {
  return (
    <Grid container>
      <Grid item>
        <Box className="completionStatusRadio">
          <ul className="items-container">
            {listArray?.map((item, ind) => (
              <li
                key={ind}
                className={`item ${selected === item ? "checked" : ""}`}
                onClick={() => handleList(item)}
              >
                <Typography variant="DubaiRegular14" className="item-text">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Grid>
      {numberInput && (
        <Grid item className="alignCenter" mt={1.3}>
          <div className="multipleFilterPriceContainer alignCenter">
            <span className="width42">
              <NumberInputDropdown
                text={"Min. Area"}
                price={min}
                setPrice={setMin}
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
                text={"Max. Area"}
                price={max}
                setPrice={setMax}
                values={values}
              />
            </span>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default TextRadioGroup;
