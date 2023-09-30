import React from "react";
import { Grid, Typography } from "@mui/material";
import { LogoHeadingComponent } from "../../LogoHeadingComponent/LogoHeadingComponent";
//takes array of strings, each string is a paragraph block

export const RenderCardGrid = ({ customClass, cardHeading, cardBody, children,cardsNotCenteredAndStretch }) => {
  
  return (
    <>
      <Grid className={customClass} container rowGap={cardsNotCenteredAndStretch?0:1} justifyContent={'flex-start'}>
        <Grid item xs={12}>
          <LogoHeadingComponent heading={cardHeading} headingTypoVariant={"GothamBlack25"} />
        </Grid>
        {cardBody && (
          <Grid item xs={12}>
            <Typography variant={"AlwynNewRoundedRegular20"}>{cardBody}</Typography>
          </Grid>
        )}
        {children}
      </Grid>
    </>
  );
};
