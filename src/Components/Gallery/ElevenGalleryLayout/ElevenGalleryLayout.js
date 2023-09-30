import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link as RouterLink } from "react-router-dom";

function ElevenGalleryLayout({ images, card = true }) {
  const renderGridItems = () => {
    const totalImages = images.length;
    const patterns = [
      [7, 5], // First row
      [12], // Second row
      [7, 5], // Third row
      [6, 6], // Fourth row
      [12], // Fifth row
      [4, 4, 4], // Sixth row
      [7, 5], // First row
      [12], // Second row
      [5, 7], // Third row
      [6, 6], // Fourth row
     // Fifth row
      [4, 4, 4],
      [7, 5], // First row
      // Second row
      [5, 7], // Third row
      [6, 6], // Fourth row
     // Fifth row
      [4, 4, 4],
      [6, 6], // Fourth row
      // Fifth row
       [4, 4, 4],
    ];

    let startIndex = 0;
    const gridItems = [];

    for (const pattern of patterns) {
      const rowImages = images.slice(startIndex, startIndex + pattern.length);

      gridItems.push(renderRow(rowImages, pattern));
      startIndex += pattern.length;

      if (startIndex >= totalImages) {
        break;
      }
    }

    return gridItems;
  };

  const renderRow = (rowImages, pattern) => {
    return (
      <Grid container spacing={1} key={rowImages[0].id}>
        {rowImages.map((image, index) => (
          <Grid item xs={12} md={pattern[index]} lg={pattern[index]} key={image.id} className="">
            {image.comingSoon ? (
              //   <RouterLink
              //     to={`/building/${image.buildingRefNumber}/${encodeURIComponent(image.buildingName)}`}
              //   >
              <Box className="galleryCardWrapper">
                <LazyLoadImage
                  src={image.imageUrl}
                  alt={image.buildingName}
                  className="borderRadius10 width100 elevenGalleryLayoutUniformHeightGrid"
                />
                <Box className="buildingNameGalleryComponentColumn">
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="GothamBlack60"
                      className="buildingNameGalleryComponentTypography"
                    >
                      {image.buildingName}
                    </Typography>
                    <Typography
                      variant="AlwynNewRoundedRegular30"
                      className="buildingNameGalleryComponentTypographyComingSoon"
                    >
                      Coming soon
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            ) : (
              //   </RouterLink>
              <RouterLink
                to={
                  image.link
                    ? image.link
                    : `/desirableNeighborhood/${encodeURIComponent(
                        image.buildingName
                      )}/${image.buildingRefNumber}`
                }
              >
                <Box className="galleryCardWrapper">
                  <LazyLoadImage
                    src={image.imageUrl}
                    alt={image.buildingName}
                    className="borderRadius10 width100 elevenGalleryLayoutUniformHeightGrid"
                  />
                  <Box className="buildingNameGalleryComponentColumn">
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Typography
                        variant="GothamBlack60"
                        className="buildingNameGalleryComponentTypography"
                      >
                        {image.buildingName}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </RouterLink>
            )}
          </Grid>
        ))}
      </Grid>
    );
  };

  return <div>{renderGridItems()}</div>;
}

export default ElevenGalleryLayout;
