import React, { useState, useEffect, useContext, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  MenuList,
  Box,
  TableSortLabel,
  Popper,
  ListItemIcon,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore, Check } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getListingsByBuilding } from "../../../network/apiServices";
import AppContext from "../../../context/AppContext";
import {
  convertCurrency,
  formatNumberWithCommasAndWithoutDecimals,
} from "../../../utils/utility";
import { errorToast } from "../../../utils/useToast";

function filterRows(rows, status) {
  if (_.isEqual("Active", status)) {
    return rows;
  }
  return rows.filter((row) => row.Status === status);
}
const _ = require("lodash");

function BuildingAvailableUnits({ buildingObject }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [columnOrder, setColumnOrder] = useState("id");
  const [anchorEl, setAnchorEl] = useState(null);
  const [status] = useState("Active");
  const [expanded, setExpanded] = useState(false);
  const [listingData, setListingData] = useState([]);

  const { selectedCountry, conversionRates, toCurrency, selectedCurrency,selectedCountryCurrency } =
    useContext(AppContext);

  const buildingReferenceNumber = buildingObject.referenceNo;

  useEffect(() => {
    async function fetchAndSetListings() {
      try {
        const listings = await getListingsByBuilding({
          countryName: selectedCountry,
          buildingRefNumber: buildingObject.referenceNo,
        });

        if (listings.data.status === "SUCCESS") {
          setListingData(listings.data.listings);
        } else {
          setListingData([]);
        }
      } catch (error) {
        errorToast(`Error: ${error}`);
      }
    }
    fetchAndSetListings();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buildingObject, buildingReferenceNumber,selectedCountry]);

  function createData(
    id,
    saleOrRent,
    listingStatus,
    purchasePrice,
    rentalPrice,
    priceSqm,
    priceSqft,
    beds,
    baths,
    floorPlan
  ) {
    // Determine the 'type' based on the 'saleOrRent' condition
    const Type = saleOrRent === "For Rent" ? "Rent" : "Sale";

    // Determine the 'status' based on the 'listingStatus' condition

    const Status = listingStatus === "Published" ? "Active" : "Active";

    // Determine the 'price' based on the 'purchasePrice' condition
    const price =
      purchasePrice !== null && purchasePrice !== ""
        ? purchasePrice
        : rentalPrice;

    // Convert the 'price', 'priceSqm', and 'priceSqft' to the desired currency
    const convertedPrice = convertCurrency(
      conversionRates,
      toCurrency,
      selectedCurrency,
      price,
      selectedCountryCurrency
    );

    const m2Prce = priceSqm ? priceSqm : "0";
    const PriceM2 = convertCurrency(
      conversionRates,
      toCurrency,
      selectedCurrency,
      m2Prce,
      selectedCountryCurrency
    );

    const sqftPrice = formatNumberWithCommasAndWithoutDecimals(
      priceSqft ? priceSqft : "0"
    );
    const PriceSqFt = convertCurrency(
      conversionRates,
      toCurrency,
      selectedCurrency,
      sqftPrice,
      selectedCountryCurrency
    );

    return {
      id,
      Type,
      Status,
      Price: convertedPrice,
      PriceM2,
      PriceSqFt,
      beds,
      baths,
      floorPlan,
    };
  }

  function createRows(listingData) {
    if (listingData !== undefined) {
      return listingData.map((item) =>
        createData(
          item.referenceNumber,
          item.saleOrRent,
          item.listingStatus,
          item.purchasePrice,
          item.rentalPrice,
          item.priceSqm,
          item.priceSqft,
          item.beds,
          item.baths,
          item.floorPlan
        )
      );
    }
  }

  // Call the function to create rows dynamically
  const rows = createRows(listingData);

  const columnLabels = {
    id: "Ref. No",
    Type: "Type",
    Status: "Status",
    Price: "Price",
    PriceM2: " Price m²",
    PriceSqFt: " Price Sq.Ft",
  };

  const columnSortOptions = {
    id: ["Ascending", "Descending"],
    Type: ["Rent", "Sale"],
    // Status: ["All", "Active", "Contract Signed", "Under Offer"],
    Status: ["Active"],
    Price: ["High to Low", "Low to High"],
    PriceM2: ["High to Low", "Low to High"],
    PriceSqFt: ["High to Low", "Low to High"],
  };

  const handleRequestSort = (property, event) => {
  
    setAnchorEl(event.currentTarget);
    setColumnOrder(property);
  };

  const handleSortAction = (option) => {
   
    let newOrder = "asc";
    if (
      _.isEqual(option, "High to Low") ||
      _.isEqual(option, "Descending") ||
      _.isEqual(option, "Sale")
    ) {
      newOrder = "desc";
    }
    setOrder(newOrder);

    // Update the orderBy state based on the clicked column
    if (
      _.isEqual(option, "Recent") ||
      _.isEqual(option, "Ascending") ||
      _.isEqual(option, "Descending")
    ) {
      setOrderBy("id");
    } else if (_.isEqual(option, "Rent") || _.isEqual(option, "Sale")) {
      setOrderBy("Type");
    } else if (_.isEqual(option, "Active")) {
      setOrderBy("Status");
    } else if (
      _.isEqual(option, "High to Low") ||
      _.isEqual(option, "Low to High")
    ) {
      setOrderBy("Price");
    } else if (_.isEqual(option, "Price m²")) {
      setOrderBy("PriceM2");
    } else if (_.isEqual(option, "Price Sq.Ft")) {
      setOrderBy("PriceSqFt");
    }

    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const filteredRows = useMemo(
    () => filterRows(rows, status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, orderBy, rows, status]
  );

  const sortedRows = useMemo(() => {
    const comparator = (a, b) => {
      const orderProp = a[orderBy];
      const targetProp = b[orderBy];

      if (orderProp === null && targetProp === null) {
        return 0;
      }

      if (orderProp === null) {
        return order === "asc" ? -1 : 1;
      }

      if (targetProp === null) {
        return order === "asc" ? 1 : -1;
      }

      // Extract numeric part from alphanumeric strings for sorting
      const extractNumericPart = (str) => {
        const matches = str.match(/\d+/g);
        return matches ? parseInt(matches.join("")) : NaN;
      };

      const numericOrderProp = extractNumericPart(orderProp);
      const numericTargetProp = extractNumericPart(targetProp);

      if (!isNaN(numericOrderProp) && !isNaN(numericTargetProp)) {
        return order === "asc"
          ? numericOrderProp - numericTargetProp
          : numericTargetProp - numericOrderProp;
      }

      // Handle sorting for other data types
      const compA = String(orderProp).toUpperCase();
      const compB = String(targetProp).toUpperCase();

      if (compA < compB) {
        return order === "asc" ? -1 : 1;
      } else if (compA > compB) {
        return order === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    };

    return [...filteredRows].sort(comparator);
  }, [order, orderBy, filteredRows]);

  const displayedRows = expanded ? sortedRows : sortedRows.slice(0, 7);

  return listingData.length > 0 ? (
    <Box className="paddingPageWidth">
      <Box className="availableUnitsHeader">
        <Typography variant="DubaiRegular20Bold">Available Units</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(columnLabels).map((column) => (
                <TableCell key={column}>
                  <Box display="flex" alignItems="center">
                    <TableSortLabel
                      className="buildingTableLabelIcon"
                      active={_.isEqual(columnOrder, column)}
                      direction={_.isEqual(columnOrder, column) ? order : "asc"}
                      onClick={(e) => handleRequestSort(column, e)}
                    >
                      <Typography variant="DubaiRegular18Bold">
                        {columnLabels[column]}
                        {/* {_.isEqual(orderBy, column)} */}
                        {/* {String(columnLabels[column])}
  {String(_.isEqual(orderBy, column))} */}

                        <ExpandMore />
                      </Typography>
                    </TableSortLabel>
                  </Box>
                </TableCell>
              ))}
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">Beds</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">Baths</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="DubaiRegular18Bold">
                    Floorplan
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Status}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.Price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.PriceM2}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.PriceSqFt}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.beds}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">{row.baths}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="DubaiRegular18">
                    {row.floorPlan}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Popper open={open} anchorEl={anchorEl} elevation={20}>
          <Paper elevation={3}>
            <MenuList>
              {columnSortOptions[columnOrder].map((option) => (
                <MenuItem
                  key={option}
                  onClick={() => handleSortAction(option)}
                  selected={
                    (_.isEqual(option, status) &&
                      _.isEqual(orderBy, "Status")) ||
                    (_.isEqual(option, orderBy) &&
                      !_.isEqual(orderBy, "Status"))
                  }
                >
                  {_.isEqual(option, status) || _.isEqual(option, orderBy) ? (
                    <ListItemIcon className="buildingTableCheckIcon">
                      <Check />
                    </ListItemIcon>
                  ) : null}
                  <Typography
                    variant="DubaiRegular16"
                    className="buildingTableOptions"
                  >
                    {option}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </Popper>
      </TableContainer>
      {!expanded && sortedRows.length > 7 && (
        <Grid container>
          <Grid item md={3} onClick={() => setExpanded(true)}>
            <Box display="flex" alignItems="center">
              <Typography variant="DubaiRegular18">View More </Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  ) : null;
}

export default BuildingAvailableUnits;
