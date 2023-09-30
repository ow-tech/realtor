import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import { formatNumberWithCommasAndWithoutDecimals } from "../../utils/utility";

const MapPopupCard = ({ features, handleClose }) => {
  return (
    <div id="popup-container" className="popup popUpMainContainer">
      <div className="mapPopupHeader">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>{features[0].properties.building}</h3>
          <p>{features[0].properties.area}</p>
          {/* <p>{features[0].properties.residential_units}</p> */}
        </div>
        {/* <div
          id="mapPopupCloseBtn"
          onClick={handleClose}
          style={{ cursor: "pointer", color: "#fff" }}
        >
          <h3>X</h3>
        </div> */}
      </div>
      <div className="mapPopupBody">
        {features.map((item, ind) => {
          const {
            id,
            image,
            area,
            sale_or_rent,
            purchase_price,
            rent_price,
            beds,
            baths,
            built_up_area_m2,
            built_up_area_sqft,
          } = item.properties;
          return (
            <a
              key={ind}
              href={`/listing/${area}/${id}`}
              target="_blank"
              rel="noreferrer"
              className="popupItemLink"
            >
              <Grid container className="popupItemContainer">
                <Grid className="popupItemImg" item>
                  <Box component="img" src={image} alt="Map Thumbnail" />
                </Grid>
                <Grid className="popupItemDetails" item>
                  <h6>
                    AED{" "}
                    {sale_or_rent === "For Rent"
                      ? parseFloat(rent_price).toLocaleString("en-US")
                      : parseFloat(purchase_price).toLocaleString("en-US")}
                  </h6>
                  <Grid container className="popUpDetails">
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{beds ? beds : 0}</p>
                        <p>Beds</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{baths}</p>
                        <p>Baths</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>{built_up_area_m2}</p>
                        <p>m²</p>
                      </Box>
                    </Grid>
                    <Divider orientation="vertical" />
                    <Grid item>
                      <Box className="popUpDetailsValues">
                        <p>
                          {formatNumberWithCommasAndWithoutDecimals(
                            built_up_area_sqft
                          )}
                        </p>
                        <p>Sq.ft</p>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MapPopupCard;
