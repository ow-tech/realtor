import React, { useState } from "react";
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Popover } from "@mui/material";
import { startCase } from "lodash";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { infoHeadersIcon } from "../../Constants/ConstantValues";
import { Check } from "@mui/icons-material";
import RatingStarAndOthers from "../RatingStarAndOthers/RatingStarAndOthers";

const HeadingInfoComponent = ({ infoObj, InfoDescription, open, anchor, handlePopoverClose }) => {
  return (
    <Grid className="tagWithInfoIconContainer" item>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: infoObj.anchorVertical,
          horizontal: infoObj.anchorHorizontal,
        }}
        transformOrigin={{
          vertical: infoObj.transformVertical,
          horizontal: infoObj.transformHorizontal,
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <InfoDescription infoObj={infoObj} />
      </Popover>
    </Grid>
  );
};

function TableComponent({ NearbyData, rowsPerPage, iconWidth, iconHeight, hasInfoHeaders = false, infoHeadersObj, InfoDescription, isSchool = false }) {
  const { title, tableData, endIcon, endIconColor, dropDownIcons, dropDownText } = NearbyData;
  // console.log()
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const visibleData = expanded ? tableData : tableData.slice(0, rowsPerPage);
  const tableHeaders = Object.keys(tableData[0]);
  const headersWithInfo = Object.keys(infoHeadersObj);
  const _ = require("lodash");
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handlePopoverOpen = (event, key) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[key] = true;
      return newState;
    });

    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (key) => {
    setOpen((prevState) => {
      const newState = [...prevState];
      newState[key] = false;
      return newState;
    });
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className="tableSectionHeading" variant="DubaiRegular20Bold" ml={0}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="tableHeadingRow">
                {tableHeaders.map((header, index) => {
                  return (
                    <TableCell key={header} className="tableHeadingTableCell">
                      {hasInfoHeaders && headersWithInfo.includes(header) ? (
                        <Grid container spacing={1}>
                          <Grid item>
                            {infoHeadersIcon[header] && infoHeadersIcon[header].icon ? (
                              <ListingCardIcon shape={infoHeadersIcon[header].icon} variant={infoHeadersIcon[header].iconVariant} />
                            ) : (
                              <Typography className="tableHeadingText" variant="DubaiRegular18Bold" ml={0}>
                                {startCase(header)}
                              </Typography>
                            )}
                          </Grid>
                          <Grid item onMouseEnter={(event) => handlePopoverOpen(event, index)} onMouseLeave={() => handlePopoverClose(index)}>
                            <ListingCardIcon shape={infoHeadersObj[header].icon} variant={infoHeadersObj[header].iconVariant} />
                          </Grid>
                          <HeadingInfoComponent
                            infoObj={infoHeadersObj[header]}
                            InfoDescription={() => (
                              <InfoDescription
                                heading={infoHeadersObj[header] && infoHeadersObj[header].heading}
                                description={infoHeadersObj[header] && infoHeadersObj[header].description}
                                infoObj={infoHeadersObj[header]}
                                headingColor={infoHeadersObj[header].headingBgColor}
                              />
                            )}
                            open={open[index] || false}
                            anchor={anchorEl}
                            close={handlePopoverClose}
                          />
                        </Grid>
                      ) : (
                        <Grid container>
                          <Grid item>
                            <Typography className="tableHeadingText" variant="DubaiRegular18Bold" ml={0}>
                              {startCase(header)}
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleData.map((row, keyIndex) => (
                <TableRow key={keyIndex} className="tableBodyRow">
                  {Object.entries(row).map(([key, value], index) => (
                    <TableCell key={index} className="tableBodyTableCell" align="left">
                      {_.isEqual(value, "Yes") ? (
                        <Typography className="tableBodyText" variant="DubaiRegular18" ml={0}>
                          <Check />
                        </Typography>
                      ) : _.isEqual(value, "No") ? null : _.isEqual(key, "rating") && !isSchool ? (
                        <Typography className="tableBodyText" variant="DubaiRegular18" ml={0}>
                          <RatingStarAndOthers defaultValue={value} />
                        </Typography>
                      ) : _.isEqual(key, "pricing") && !isSchool ? (
                        <Typography className="tableBodyText" variant="DubaiRegular18" ml={0}>
                          <RatingStarAndOthers defaultValue={value} pricingIcon="pricing" />
                        </Typography>
                      ) : (
                        <Typography className="tableBodyText" variant="DubaiRegular18" ml={0}>
                          {value}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                  {endIcon && (
                    <TableCell align="right">
                      <ListingCardIcon shape={endIcon} color={endIconColor} width={iconWidth} height={iconHeight} />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {tableData.length > rowsPerPage && (
            <Grid container alignItems="center" spacing={1} onClick={handleClick}>
              <Grid item>
                <Typography variant="DubaiRegular18" ml={0}>
                  {expanded ? dropDownText.expanded : dropDownText.collapsed}
                </Typography>
              </Grid>
              <Grid item mt={expanded ? 0 : 1}>
                <ListingCardIcon shape={expanded ? dropDownIcons.expanded : dropDownIcons.collapsed} color={endIconColor} width={iconWidth} height={iconHeight} />
              </Grid>
            </Grid>
          )}
        </TableContainer>
      </Grid>
    </Grid>
  );
}
export default TableComponent;
