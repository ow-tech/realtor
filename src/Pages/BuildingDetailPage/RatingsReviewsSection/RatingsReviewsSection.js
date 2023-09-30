import React, { useState } from "react";
import { Grid, Dialog, Typography } from "@mui/material";
import CustomButton from "../../../Components/Button/CustomButton";
import { CategorizedRatingBox, RatingHeadingItem, RatingStars, ResidentReviews, ReviewDescriptionItem, ReviewValueBox } from "../../../Components/RatingsReviews/RatingsReviews";

function RatingsReviewsSection({ generalData }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const { residentReviewsData, categorizedRatingData } = generalData;
  return (
    <Grid container rowSpacing={2} px={20}>
      <Grid item xs={12}>
        <RatingHeadingItem heading={generalData.sectionTitle} typoVariant={"DubaiRegular20Bold"} />
      </Grid>
      <Grid container item justifyContent={"space-between"}>
        <Grid item>
          <Grid container item columnSpacing={1} alignItems={"center"}>
            <Grid item>
              <ReviewValueBox value={"4.1"} colorVariant="light" size="large" typoVariant={"DubaiRegular20Bold"} withInfo={false} />
            </Grid>
            <Grid item>
              <RatingStars value={4.1} />
            </Grid>
            <Grid item>
              <ReviewDescriptionItem
                description={`(${generalData.overallRatingCount > 1 ? generalData.overallRatingCount + " Ratings" : generalData.overallRatingCount + " Rating"})`}
                typoVariant="DubaiRegular18"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <CustomButton customClassName="rateBtn" text={generalData.rateBtnText} typographyVariant="AlwynNewRoundedRegular18" fullWidth={false} onClick={handleOpenDialog} />
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Dialog>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingHeadingItem heading={generalData.categoryRatingTitle} typoVariant={"DubaiRegular20Bold"} />
      </Grid>
      <CategorizedRatingBox data={categorizedRatingData} />
      <Grid item xs={12}>
        <RatingHeadingItem
          heading={`${generalData.residentReviewsTitle} (${residentReviewsData.length > 1 ? residentReviewsData.length + " Reviews" : residentReviewsData.length + "Review"})`}
          typoVariant={"DubaiRegular20Bold"}
        />
      </Grid>
      <Grid className="no-wrap-container" container item justifyContent={"space-between"} alignItems={"center"}>
        <ResidentReviews reviewsData={residentReviewsData} />
      </Grid>
    </Grid>
  );
}
export default RatingsReviewsSection;
