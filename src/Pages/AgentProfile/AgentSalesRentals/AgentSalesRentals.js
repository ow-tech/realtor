import React, { useEffect, useState } from "react";
import { Grid, Tab, Typography } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel/TabPanel";
import TabContext from "@mui/lab/TabContext/TabContext";
import TabList from "@mui/lab/TabList/TabList";
import isEqual from "lodash/isEqual";

function AgentSalesRentals({
  titleHeading,
  handleTabClick,
  itemSpacing,
  itemRowSpacing,
  children,
  allAgentListings,
}) {
  //   const [value, setValue] = useState("sales");
  const [value, setValue] = useState("sales");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleTabClick(newValue);
  };

  const hasForRent = allAgentListings?.some((item) =>
    isEqual(item.saleOrRent, "For Rent")
  );
  const hasForSale = allAgentListings?.some((item) =>
    isEqual(item.saleOrRent, "For Sale")
  );

  useEffect(() => {
    if (hasForSale) {
      handleTabClick("sales");
      setValue("sales");
    } else if (hasForRent) {
      handleTabClick("rentals");
      setValue("rentals");
    }
  }, [hasForSale, hasForRent]);
  useEffect(() => {}, [value]);
  return (
    <Grid container className="salesRentalsContainer">
      <Grid className="tabHeader" item xs={12}>
        <Typography variant="DubaiRegular30Bold">{titleHeading}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <Grid className="tabListWrapper" item xs={12}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="indicator"
            >
              {hasForSale && (
                <Tab label="Sales" value="sales" typography="DubaiRegular18" />
              )}
              {hasForRent && (
                <Tab
                  label="Rentals"
                  value="rentals"
                  typography="DubaiRegular18"
                />
              )}
            </TabList>
          </Grid>

          <TabPanel value={value} className="agentProfileSliders">
            <Grid container spacing={itemSpacing} rowSpacing={itemRowSpacing}>
              {children}
            </Grid>
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
}

export default AgentSalesRentals;
