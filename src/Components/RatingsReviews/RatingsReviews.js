import React, { useState } from "react";
import { Typography, Grid, Popover } from "@mui/material";
import InfoIconDescription from "../InfoIconDescription/InfoIconDescription";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { isEqual } from "lodash";
import RatingStarAndOthers from "../RatingStarAndOthers/RatingStarAndOthers";
import { ScrollUpBtnIcon } from "../../Assets/SVG/Common/CommonSvgs";

export const RatingStars = ({ value }) => {
  return (
    <Grid item xs={12}>
      <RatingStarAndOthers defaultValue={value} dark />
    </Grid>
  );
};

export const RatingHeadingItem = ({ heading, typoVariant, componentType = "span" }) => (
  <Grid item xs={12}>
    <Typography variant={typoVariant} component={componentType}>
      {heading}
    </Typography>
  </Grid>
);

export const ReviewDescriptionItem = ({ description, typoVariant, componentType = "span" }) => (
  <Typography variant={typoVariant} component={componentType}>
    {description}
  </Typography>
);

export const ReviewValueBox = ({ value, colorVariant = "dark", typoVariant, size = "large", componentType = "span", withInfo = false, infoHeading, infoDescription, infoIcon, customClassName }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Grid
      className={`${customClassName} ${isEqual(colorVariant, "light") ? "reviewValueBoxLight" : "reviewValueBoxDark"} ${isEqual(size, "large") ? "reviewValueBoxLarge" : "reviewValueBoxSmall"}`}
      container
      item
      px={2}
      alignItems={"center"}
    >
      <Grid item>
        <Typography variant={typoVariant} component={componentType}>
          {value}
        </Typography>
      </Grid>
      {withInfo && infoHeading && infoDescription && (
        <Grid className="reviewValueInfoIcon" item onMouseEnter={(event) => handlePopoverOpen(event)} onMouseLeave={() => handlePopoverClose()}>
          {isEqual(colorVariant, "light") ? <ListingCardIcon shape={infoIcon} variant={"dark"} /> : <ListingCardIcon shape={infoIcon} variant={"light"} />}
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <InfoIconDescription heading={infoHeading} headingColor={"#808080"} description={infoDescription} />
          </Popover>
        </Grid>
      )}
    </Grid>
  );
};

export const CategorizedRatingBox = ({ data }) => {
  return (
    <Grid container item rowSpacing={1} columnSpacing={25}>
      {data.map((category, index) => (
        <Grid key={index} container item xs={12} md={6} justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={12} md={"auto"}>
            <ReviewDescriptionItem description={category.heading} typoVariant="DubaiRegular18" />
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item>
                <ReviewValueBox value={category.rating} colorVariant="light" size="small" typoVariant={"AlwynNewRoundedRegular15"} withInfo={false} />
              </Grid>
              <Grid item>
                <RatingStars value={category.rating} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export const ResidentReviews = ({ reviewsData }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleScrollUp = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleScrollDown = () => {
    setVisibleIndex((prevIndex) => Math.min(prevIndex + 1, reviewsData.length - 2));
  };

  const visibleReviews = reviewsData.slice(visibleIndex, visibleIndex + 2);

  return (
    <>
      <Grid className="residentReviewsContainer" item px={2}>
        {visibleReviews.map((review, index) => (
          <Grid key={index} item>
            <Grid container item columnSpacing={2} alignItems={"center"}>
              <Grid item>
                <ReviewValueBox value={review.rating} colorVariant="light" typoVariant={"DubaiRegular20Bold"} withInfo={false} />
              </Grid>
              <Grid item>
                <Grid item xs={12}>
                  <RatingHeadingItem heading={review.reviewHeading} typoVariant={"DubaiRegular18Bold"} />
                </Grid>
                <Grid item xs={12}>
                  <ReviewDescriptionItem description={`${review.reviewer}, ${review.reviewerLocation}, ${review.reviewDate}`} typoVariant="DubaiRegular18" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ReviewDescriptionItem description={review.reviewBody} typoVariant="DubaiRegular18" />
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid item ml={4}>
        <Grid item>
          <button className="scrollUpBtnIcon " onClick={handleScrollUp} isDisabled={visibleIndex === 0}>
            <ScrollUpBtnIcon />
          </button>
        </Grid>
        <Grid item>
          <button className="scrollDownBtnIcon " onClick={handleScrollDown} disabled={visibleIndex >= reviewsData.length - 2}>
            <ScrollUpBtnIcon />
          </button>
        </Grid>
      </Grid>
    </>
  );
};
