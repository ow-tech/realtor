import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { isPlainObject } from "lodash";

//takes array of strings, each string is a paragraph block

export const RenderMultiParagraph = ({
  paragraphs,
  paragraphTypoVariant,
  defaultParagraphs,
  hasViewMore = false,
  expandText,
  collapsedText,
  dropDownTypoVariant,
  defaultCharacters,
}) => {
  const [expanded, setExpanded] = useState(false);
  let visibleData;

  if (Array.isArray(paragraphs)) {
    // Handle paragraphs as an array of strings
    visibleData = expanded
      ? paragraphs
      : paragraphs.slice(0, defaultParagraphs);
  } else if (isPlainObject(paragraphs)) {
    // Handle paragraphs as an object
    visibleData = expanded
      ? paragraphs
      : Object.fromEntries(
          Object.entries(paragraphs).slice(0, defaultParagraphs)
        );
  }

  const onMore = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid container rowSpacing={3}>
        {Array.isArray(visibleData)
          ? visibleData.map((paragraph, index) => (
              <Grid key={index} item>
                <Typography
                  variant={
                    paragraphTypoVariant
                      ? paragraphTypoVariant
                      : "AlwynNewRoundedRegular20"
                  }
                >
                  {paragraph}
                </Typography>
              </Grid>
            ))
          : Object.keys(visibleData).map((key, index) => (
              <Grid key={index} item>
                <Typography
                  variant={
                    paragraphTypoVariant
                      ? paragraphTypoVariant
                      : "AlwynNewRoundedRegular20"
                  }
                >
                  {visibleData[key]}
                </Typography>
              </Grid>
            ))}

        {hasViewMore && (
          <Grid container alignItems="center" spacing={1} onClick={onMore}>
            <Grid item>
              <Typography variant={dropDownTypoVariant} ml={0}>
                {expanded ? collapsedText : expandText}
              </Typography>
            </Grid>
            <Grid item mt={expanded ? 0 : 1}>
              <ListingCardIcon
                shape={expanded ? "arrowDown" : "arrowRight"}
                color={"black"}
                width={"15"}
                height={"12"}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};
