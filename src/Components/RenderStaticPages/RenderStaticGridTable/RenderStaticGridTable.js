import React from "react";
import { Grid, Typography,Box } from "@mui/material";
import { LogoHeadingComponent } from "../../LogoHeadingComponent/LogoHeadingComponent";

export const RenderStaticGridTable = ({ customClass, columnCount, tableContent, tableHeadingType, tableRowType }) => {
  return (
    <>
      <Grid className={customClass} container>
        {tableContent.map((item, index) => {
          //each item is a column
          return (
            <Grid key={index} container item xs={12 / columnCount} rowSpacing={2} alignContent={"flex-start"}>
              {item.tableHeading && (
                <Grid item xs={12}>
                  <LogoHeadingComponent heading={item.tableHeading} headingTypoVariant={tableHeadingType} />
                </Grid>
              )}

              {item.tableRows.map((rowItem, index) => (
                <Box className='bottomDataWrapper'>


<Grid key={index} item xs={12} pb={3}>
  <Typography variant={tableRowType}>{rowItem}</Typography>
</Grid>


                </Box>
              ))}
              {item.bottomData && item.bottomData[index] && (
    <Grid key={`bottom-${index}`} item xs={12}>
      <Typography variant='AlwynNewRoundedRegular20Bold'  className="bottomData">{item.bottomData[index]}</Typography>
    </Grid>
)}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
