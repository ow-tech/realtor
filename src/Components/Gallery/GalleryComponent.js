import React from "react";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const GalleryComponent = ({
  images,
  card = false,
  width = 768,
  height = 480,
}) => {
  const getColumnCount = (totalImages) => {
    if (totalImages < 3) {
      return [12];
    } else if (totalImages === 3) {
      return [12, 6];
    } else {
      return [12, 6, 4];
    }
  };

  const columnCount = getColumnCount(images.length);

  // Divide images into sets
  const imageSets = [];
  const setCount = Math.floor(images.length / 6);
  const remainder = images.length % 6;

  // Add full sets
  for (let i = 0; i < setCount; i++) {
    const setStartIndex = i * 6;
    const setEndIndex = setStartIndex + 6;
    const imageSet = images.slice(setStartIndex, setEndIndex);
    imageSets.push(imageSet);
  }

  let columns = [];

  // Add partial set if remainder exists
  if (remainder > 0) {
    const decimalKey = (remainder / 6).toFixed(3).toString();
    const decimalToColumnMap = {
      0.833: [12, 4, 12],
      0.667: [12, 6, 12],
      "0.500": [12, 6],
      0.333: [6],
      0.167: [12],
    };

    columns = decimalToColumnMap[decimalKey];
  }

  const getImageUrlWithTrParam = (imageUrl, width, height) => {
    const trParameter = `tr=w-${width},h-${height}`;
    return imageUrl.includes("ver=")
      ? `${imageUrl}&${trParameter}`
      : `${imageUrl}?${trParameter}`;
  };

  return (
    <div>
      {imageSets.map((imageSet, setIndex) => (
        <Grid container  spacing={2} key={setIndex}>
          {/* First Column */}
          <Grid item mt={1} xs={12}>
            <LazyLoadImage
              src={getImageUrlWithTrParam(imageSet[0].imageUrl, width, height)}
              className="borderRadius10 width100 fitImage"
            />
          </Grid>

          {/* Second Column */}
          {columnCount.length > 1 && (
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <LazyLoadImage
                    src={getImageUrlWithTrParam(
                      imageSet[1].imageUrl,
                      width,
                      height
                    )}
                    className="borderRadius10 width100 fitImage"
                  />
                </Grid>
                <Grid item xs={6}>
                  <LazyLoadImage
                    src={getImageUrlWithTrParam(
                      imageSet[2].imageUrl,
                      width,
                      height
                    )}
                    className="borderRadius10 width100 fitImage"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}

          {/* Third Column */}
          {columnCount.length > 2 && (
            <Grid item xs={12}>
              <Grid container flexDirection="row" spacing={2}>
                {imageSet.slice(3).map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <LazyLoadImage
                      src={getImageUrlWithTrParam(
                        image.imageUrl,
                        width,
                        height
                      )}
                      className="borderRadius10 width100 fitImage"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      ))}
      {columns.map((column, ind) => {
        const div = 12 / column;
        let startIndex;
        if (ind === 2) {
          startIndex = images.length - 1;
        } else {
          startIndex = setCount * 6 + ind;
        }
        const endIndex = startIndex + div;

        return (
          <React.Fragment key={ind}>
            <Grid container spacing={2} mt={1}>
              {images.slice(startIndex, endIndex).map((image, index) => (
                <Grid item xs={column} key={index}>
                  <LazyLoadImage
                    src={getImageUrlWithTrParam(image.imageUrl, width, height)}
                    className="borderRadius10 width100 fitImage"
                  />
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        );
      })}
      {/* ... */}
    </div>
  );
};

export default GalleryComponent;
