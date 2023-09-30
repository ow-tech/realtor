import { Grid, Typography } from "@mui/material";
import React from "react";

const MultipleChecklist = ({ list, checkedItems, setCheckedItems }) => {
  const handleCheckToggle = (itemName) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName], // Toggle the checkbox state
    }));
  };

  return (
    <Grid container>
      {list?.map((item, ind) => (
        <Grid item xs={6} sm={3} pb={1} className="alignCenter" key={ind}>
          <label className="checkbox alignCenter">
            <input
              type="checkbox"
              checked={checkedItems[item] || false}
              onChange={() => handleCheckToggle(item)}
            />
            <Typography variant="DubaiRegular16">{item}</Typography>
          </label>
        </Grid>
      ))}
    </Grid>
  );
};

export default MultipleChecklist;
