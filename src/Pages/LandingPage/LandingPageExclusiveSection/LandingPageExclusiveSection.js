import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ExclusivesTopSection from "./ExclusivesTopSection/ExclusivesTopSection";
import Card from "../../../Components/Cards/Card";
import ViewAllExclusivesButton from "./ViewAllExclusivesButton/ViewAllExclusivesButton";
import ExclusiveCardSkeleton from "../../../Components/ExclusiveCardSkeleton/ExclusiveCardSkeleton";
import {
  laptopGrids,
  mobGrids,
  tabGrids,
} from "../../../Constants/ConstantValues";

function LandingPageExclusiveSection({ referrer, exclusives }) {
  return (
    <Container
      ref={referrer}
      disableGutters
      maxWidth={false}
      className="LandingPageExclusiveSectionWrapper"
    >
      <ExclusivesTopSection />
      <Box display="flex" justifyContent="center" className="center">
        <Grid container spacing={1.5}>
          {exclusives && exclusives?.length > 0
            ? exclusives.slice(0, 9).map((item, key) => (
                <Grid
                  item
                  xs={mobGrids}
                  sm={tabGrids}
                  md={laptopGrids}
                  lg={laptopGrids}
                  key={key}
                >
                  <Card
                    item={item}
                    key={key}
                    width={768}
                    height={500}
                    availableGrids={4}
                  />
                </Grid>
              ))
            : (() => {
                const cardSkeletons = [];

                for (let i = 0; i < 9; i++) {
                  cardSkeletons.push(
                    <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
                      <ExclusiveCardSkeleton />
                    </Grid>
                  );
                }

                return cardSkeletons;
              })()}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <ViewAllExclusivesButton />
      </Box>
    </Container>
  );
}

export default LandingPageExclusiveSection;
