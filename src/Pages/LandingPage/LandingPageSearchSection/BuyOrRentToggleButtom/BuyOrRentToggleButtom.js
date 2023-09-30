import React, { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { Typography } from "@mui/material";
import AppContext from "../../../../context/AppContext";

function BuyOrRentToggleButtom() {
  const { buyOrRent, setBuyOrRent } = useContext(AppContext);

  const handleBuyOrRentValue = (event, buyOrRent) => {
    if (buyOrRent !== null) {
      setBuyOrRent(buyOrRent);
    }
  };
  // console.log(buyOrRent)

  return (
    <ToggleButtonGroup
      value={buyOrRent}
      exclusive
      onChange={handleBuyOrRentValue}
      aria-label="text alignment large"
      className="buyRent"
    >
      <ToggleButton value="buy" aria-label="Buy">
        <Typography variant="DubaiRegular16Bold">Buy</Typography>
      </ToggleButton>
      <ToggleButton value="rent" aria-label="Rent">
        <Typography variant="DubaiRegular16Bold">Rent</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default BuyOrRentToggleButtom;
