import React, { useState, useContext, useRef } from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import SimpleSelect from "./CustomSelect/SimpleSelect";
import MultipleGroupSelect from "./CustomSelect/MultipleGroupSelect";
import NestedSelect from "./CustomSelect/NestedSelect";
import {
  PropertyTypes,
  stateListElement,
} from "../../Constants/UAEStatesConstants";
import "../../Styles/searchLandingStyles.css";
import CustomButton from "../../Components/Button/CustomButton";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { ExpandMoreSharp } from "@mui/icons-material";
import MoreFilterPopup from "./Popup/MoreFilterPopup";
import ManseelMap from "../../Components/Map/Map";
import Card from "../../Components/Cards/Card";
import { useSearchParams, useParams } from "react-router-dom";
import {
  addObjectToArray,
  base64ToObj,
  findElementByCountryAndAddElement,
  objToBase64,
  toCarouselArray,
} from "../../utils/utility";
import AppContext from "../../context/AppContext";
import {
  ButtonLeftArrow,
  ButtonRightArrow,
  SmallSearchIcon,
} from "../../Assets/SVG/Common/CommonSvgs";
import { useEffect } from "react";
import {
  getFilteredSearchData,
  savedSearches,
} from "../../network/apiServices";
import SearchForm from "../LandingPage/LandingPageSearchSection/SearchForm/LandingPageSearchForm";
import {
  generatePayload,
  populateStatesFromSearchedObj,
  rearrangeArray,
} from "./utils/searchingUtils";
import { errorToast, successToast } from "../../utils/useToast";
import LoadingSkeleton from "../../Components/LoadingSkeleton/LoadingSkeleton";
import { mobGrids, tabGrids } from "../../Constants/ConstantValues";

const bedsBathsData = {
  beds: ["Any", "0", "1", "2", "3", "4", "5", "6", "7", "7+"],
  baths: ["Any", "1", "2", "3", "4", "5", "6", "7", "7+"],
};

const mapping = {
  "7+": ["8", "9", "10", "11", "12", "13", "14", "15"],
};

const sortOptions = ["Ascending", "Descending"];

const SearchLandingPage = () => {
  const {
    userObj,
    userPreferences,
    setUserPreferences,
    setNavLinkBuyOrRent,
    selectedCountry,
    allLocationData,
    listings
  } = useContext(AppContext);

  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const valueOfSearchParams = searchParams.get("value");
  const scrollRef = useRef(null);

  const [openPopup, setOpenPopup] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchedObj, setSearchedObj] = useState({});
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [propertyType, setPropertyType] = useState(PropertyTypes[0]);
  const [selectedBedsBaths, setSelectedBedsBaths] = useState({
    beds: ["Any"],
    baths: ["Any"],
  });
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [exclusivesChecked, setExclusivesChecked] = useState(false);
  const [enteredValuesArray, setEnteredValuesArray] = useState([]);
  const [searchedListings, setSearchedListings] = useState([]);
  const [statesPopulated, setStatesPopulated] = useState(false);
  const [status, setStatus] = useState("Any");
  const [areaType, setAreaType] = useState("sqft");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [amenities, setAmenities] = useState({});
  const [vacant, setVacant] = useState(false);
  const [cryptoAccept, setCryptoAccept] = useState(false);
  const [instantViewing, setInstantViewing] = useState(false);
  const [syncedData, setSyncedData] = useState([]);
  const [rearrangedList, setRearrangedList] = useState([]);
  const [toggleSort, setToggleSort] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Ascending");
  const [isLoading, setIsLoading] = useState(true);
  const [saveBtnHovered, setSaveBtnHovered] = useState(true);
  const [searchBtnHovered, setSearchBtnHovered] = useState(true);
  const [moreFilterBtnHovered, setMoreFilterBtnHovered] = useState(false);
  const [foundCountry, setFoundCountry] = useState([]);

  const saveHandleMouseEvent = () => {
    setSaveBtnHovered(!saveBtnHovered);
  };

  const searchHandleMouseEvent = () => {
    setSearchBtnHovered(!searchBtnHovered);
  };

  const moreFilterHandleMouseEvent = () => {
    setMoreFilterBtnHovered(!moreFilterBtnHovered);
  };

  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction * 100; // Adjust the scroll amount as needed
    }
  };

  const updateSearchParams = (newPayload) => {
    const base64String = objToBase64(newPayload);
    setSearchParams({ value: base64String });
  };

  const searchObject = () => {
    const baseToObject = base64ToObj(valueOfSearchParams);
    setNavLinkBuyOrRent(params.name);
    return baseToObject;
  };

  useEffect(() => {
    const rearrangedArray = rearrangeArray(searchedListings, syncedData);
    setRearrangedList(rearrangedArray);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syncedData]);

  const fetchFilteredSearchData = async () => {
    setIsLoading(true);
    const payload = generatePayload(
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      enteredValuesArray,
      selectedCountry,
      selectedState,
      selectedCity,
      params,
      propertyType,
      exclusivesChecked,
      selectedPeriod,
      selectedBedsBaths,
      mapping,
      status,
      areaType,
      amenities,
      vacant,
      cryptoAccept,
      instantViewing
    );
console.log('payload',
  minPrice,
      maxPrice,
      minArea,
      maxArea,
      enteredValuesArray,
      selectedCountry,
      selectedState,
      selectedCity,
      params['name'],
      propertyType,
      exclusivesChecked,
      selectedPeriod,
      selectedBedsBaths,
      mapping,
      status,
      areaType,
      amenities,
      vacant,
      cryptoAccept,
      instantViewing
)
// const filteredData = listings.filter((item)=>{
//   const exclusive =item.exclusive ==='yes'?true:false
//   return(
//     (!payload.minPrice || parseInt(item.purchasePrice?item.purchasePrice:item.rentalPrice) >= parseInt(payload.minPrice))&&
//     (!payload.maxPrice || parseInt(item.purchasePrice?item.purchasePrice:item.rentalPrice) <= parseInt(payload.maxPrice))&&
//     (!payload.minArea || parseFloat(item.builtUpAreaSqm) >= payload.minArea) &&
//     (!payload.maxArea || parseFloat(item.builtUpAreaSqm) <= payload.maxArea)&&
//     (!payload.selectedState || item.state == payload.selectedState)&&
//     (!payload.params['name'] || payload.params['name']? item.saleOrRent.includes(payload.params['name']):null)&&
//     (!payload.propertyType || item.propertyType.includes(payload.propertyType))&&
//     (!payload.exclusivesChecked ||exclusive === payload.exclusivesChecked)
   
//   )
  
// })
const filteredListings = listings.filter((item) => {
  const { minPrice, maxPrice, minArea, maxArea, selectedState, params, propertyType, exclusivesChecked } = payload;
  const { purchasePrice, rentalPrice, builtUpAreaSqm, state, saleOrRent, exclusive } = item;

  const isPriceInRange = (!minPrice || parseInt(purchasePrice ? purchasePrice : rentalPrice) >= parseInt(minPrice)) &&
                         (!maxPrice || parseInt(purchasePrice ? purchasePrice : rentalPrice) <= parseInt(maxPrice));

  const isAreaInRange = (!minArea || parseFloat(builtUpAreaSqm) >= minArea) &&
                        (!maxArea || parseFloat(builtUpAreaSqm) <= maxArea);

  const isStateMatched = !selectedState || state === selectedState;

  const isParamsNameMatched = !params || !params['name'] || (saleOrRent && saleOrRent.includes(params['name']));
  // console.log('isParamsNameMatched',isParamsNameMatched, params['name'])

  const isPropertyTypeMatched = !propertyType || propertyType.includes(item.propertyType);

  const isExclusivityMatched = (exclusivesChecked === undefined) || (exclusive === 'yes') === exclusivesChecked;

  // Return true if all criteria are met or if payload is empty
  return isPriceInRange && isAreaInRange && isStateMatched && isParamsNameMatched && isPropertyTypeMatched && isExclusivityMatched;
});

console.log('filteredListings',filteredListings);


    // await getFilteredSearchData(payload)
    //   .then((res) => {
        if (filteredListings) {
    //       let tags = [];
    //       payload.listingFilters["areas"]?.forEach((item) => {
    //         tags.push({ key: "Area", value: item });
    //       });

    //       payload.listingFilters["buildings"]?.forEach((item) => {
    //         tags.push({ key: "Building", value: item });
    //       });
    //       payload.listingFilters.tags = tags;
    //       updateSearchParams(payload);
          if (filteredListings > 0) {
            // const formattedListings = toCarouselArray(
            //   "title",
            //   res.data.listings,
            //   "listingImages"
            // );

            setSearchedListings(filteredListings);
            setRearrangedList(filteredListings);
            setIsLoading(false);
          } else {
            setSearchedListings(listings);
            setRearrangedList(listings);
            setIsLoading(false);
          }
        // } else if (res.data.status === "INVALID") {
        //   setSearchedListings([]);
        //   setRearrangedList([]);
        //   setIsLoading(false);
        // }
        setStatesPopulated(false);
      // })
      // .catch((err) => {
      //   setIsLoading(false);
      //   setStatesPopulated(false);
        // console.log("err: ", err);
      };
  };

  useEffect(() => {
    if (statesPopulated) {
      fetchFilteredSearchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statesPopulated]);

  useEffect(() => {
    populateStatesFromSearchedObj(
      searchedObj,
      params,
      setEnteredValuesArray,
      setSelectedState,
      setSelectedCity,
      setPropertyType,
      setExclusivesChecked,
      setMinPrice,
      setMaxPrice,
      setSelectedPeriod,
      setSelectedBedsBaths,
      setStatus,
      setAmenities,
      setVacant,
      setCryptoAccept,
      setInstantViewing,
      setStatesPopulated
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedObj]);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleRemoveItem = (index) => {
    setEnteredValuesArray((prevArray) =>
      prevArray.filter((_, idx) => idx !== index)
    );
  };

  const handleState = (option) => {
    setSelectedState(option);
  };

  const handleCity = (option) => {
    setSelectedCity(option);
  };

  const handlePropertyType = (option) => {
    setPropertyType(option);
  };

  const handleBedsBaths = (category, itemText) => {
    setSelectedBedsBaths((prevState) => {
      const newState = {
        beds: [...prevState.beds],
        baths: [...prevState.baths],
      };

      if (itemText === "Any") {
        newState[category] = [itemText];
      } else {
        const index = newState[category].indexOf(itemText);
        if (index === -1) {
          newState[category].push(itemText);
          const anyIndex = newState[category].indexOf("Any");
          if (anyIndex !== -1) {
            newState[category].splice(anyIndex, 1);
          }
        } else {
          newState[category].splice(index, 1);
        }
      }

      return newState;
    });
  };

  const handleExclusivesToggle = () => {
    setExclusivesChecked((prevChecked) => !prevChecked);
  };

  const saveSearch = async () => {
    if (userObj) {
      const savedSearche = userPreferences?.savedSearches;

      let areasArray = enteredValuesArray
        .filter((item) => item?.key === "Area")
        .map((item) => item?.value);

      let buildingsArray = enteredValuesArray
        .filter((item) => item?.key === "Building")
        .map((item) => item?.value);

      let minPriceValue = minPrice ? parseInt(minPrice) : null;
      let maxPriceValue = maxPrice ? parseInt(maxPrice) : null;

      if (minPriceValue && !maxPriceValue) {
        maxPriceValue = 1000000000;
      } else if (!minPriceValue && maxPriceValue) {
        minPriceValue = 0;
      }

      const payload = {
        savedAction: "ADD",
        email: userObj?.email,
        country: selectedCountry,
        state: selectedState === "All Emirates" ? "All" : selectedState,
        city:
          selectedCity !== "All Cities"
            ? selectedCity === "Dubai City"
              ? "Dubai"
              : selectedCity
            : null,
        exclusive: exclusivesChecked,
        propertyType: propertyType === "Select All" ? null : propertyType,
        beds:
          selectedBedsBaths.beds.length > 0
            ? selectedBedsBaths.beds[0] === "Any"
              ? ["ALL"]
              : selectedBedsBaths.beds
                  .map((item) => (item === "7+" ? mapping["7+"] : item))
                  .flat()
            : null,
        baths:
          selectedBedsBaths.baths.length > 0
            ? selectedBedsBaths.baths[0] === "Any"
              ? ["ALL"]
              : selectedBedsBaths.baths
                  .map((item) => (item === "7+" ? mapping["7+"] : item))
                  .flat()
            : null,
        price:
          minPriceValue && maxPriceValue
            ? `${minPriceValue}-${maxPriceValue}`
            : "Any",
        neighbourhood: areasArray,
        buildings: buildingsArray,
        saleOrRent: params.name.toUpperCase(),
      };

      await savedSearches(payload)
        .then((res) => {
          // console.log("Search saved successfully!");
          successToast("Search saved successfully!");
          const updatedSearches = addObjectToArray(
            res,
            savedSearche,
            "listingReferenceId"
          );

          const updatedData = {
            ...userPreferences,
            savedSearches: updatedSearches,
          };

          setUserPreferences(updatedData);
        })
        .catch((err) => {
          errorToast("Search not saved");
          console.log("err: ", err);
        });
    } else {
      errorToast("Please login first.");
    }
  };

  const toggleSortClick = () => {
    setToggleSort((prev) => {
      return !prev;
    });
  };

  const handleSorting = (value) => {
    setSelectedSortOption(value);
    let lists;
    // Sort the listings based on purchasePrice (convert to number for proper sorting)
    if (params.name === "buy") {
      if (value === "Ascending") {
        lists = searchedListings.sort(
          (a, b) => parseFloat(a.purchasePrice) - parseFloat(b.purchasePrice)
        );
      } else {
        lists = searchedListings.sort(
          (a, b) => parseFloat(b.purchasePrice) - parseFloat(a.purchasePrice)
        );
      }
    } else if (params.name === "rent") {
      if (value === "Ascending") {
        lists = searchedListings.sort(
          (a, b) => parseFloat(a.rentalPrice) - parseFloat(b.rentalPrice)
        );
      } else {
        lists = searchedListings.sort(
          (a, b) => parseFloat(b.rentalPrice) - parseFloat(a.rentalPrice)
        );
      }
    }

    setRearrangedList(lists);
  };

  useEffect(() => {
    setIsLoading(true);
    if (allLocationData.length > 0) {
      const foundCountry1 = findElementByCountryAndAddElement(
        allLocationData,
        selectedCountry,
        stateListElement[selectedCountry]
      );
      setFoundCountry(foundCountry1);
      const newSearchObj = {
        city: "",
        country: selectedCountry,
        state: stateListElement[selectedCountry],
      };

      updateSearchParams(newSearchObj);
      setSearchedObj(newSearchObj);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, allLocationData]);

  useEffect(() => {
    setSearchedObj(searchObject());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.name, allLocationData]);

  // Sort the stateList array alphabetically, placing "All States" or "All Emirates" first
  const sortedStateList = foundCountry?.stateList
    ? foundCountry.stateList?.slice()?.sort((a, b) => {
        if (a === stateListElement[selectedCountry]) return -1;
        if (b === stateListElement[selectedCountry]) return 1;
        return a.localeCompare(b);
      })
    : [];

  // Sort the selectedState's cityList array alphabetically, placing "All Cities" first
  const sortedCityList =
    foundCountry && foundCountry.stateCityList
      ? foundCountry.stateCityList[selectedState]?.slice()?.sort((a, b) => {
          if (a === "All Cities") return -1;
          if (b === "All Cities") return 1;
          return a.localeCompare(b);
        })
      : [];

  return (
    <>
      <Box mx={3} mt={3}>
        <Grid container spacing={1} className="searchLandingMainContainer">
          <Grid item xs={6} sm={4} lg={2}>
            <SimpleSelect
              value={selectedState}
              onChange={handleState}
              items={sortedStateList}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <SimpleSelect
              value={selectedCity}
              onChange={handleCity}
              items={
                foundCountry && foundCountry.stateCityList ? sortedCityList : []
              }
            />
          </Grid>
          <Box className="visibleOnlyInXS" />
          <Grid item xs={6} sm={4} lg={2}>
            <SimpleSelect
              value={propertyType}
              onChange={handlePropertyType}
              items={PropertyTypes}
              isPropertyType={true}
            />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <MultipleGroupSelect
              data={bedsBathsData}
              handleBedsBaths={handleBedsBaths}
              selectedBedsBaths={selectedBedsBaths}
            />
          </Grid>
          <Box className="visibleOnlyInXS" />
          <Grid item xs={4.3} sm={4} lg={2}>
            <NestedSelect
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              params={params.name}
            />
          </Grid>
          <Grid item xs={3.2} sm={1.7} md={1.8} lg={0.8}>
            <CustomButton
              onClick={fetchFilteredSearchData}
              text="Search"
              onMouseEnter={searchHandleMouseEvent}
              onMouseLeave={searchHandleMouseEvent}
              dark={searchBtnHovered}
              size="small"
              customClassName="searchLandingBtn"
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={<SmallSearchIcon />}
            />
          </Grid>
          <Grid item xs={4.5} sm={2.3} md={2.2} lg={1.2}>
            <CustomButton
              onClick={saveSearch}
              text="Save Search"
              onMouseEnter={saveHandleMouseEvent}
              onMouseLeave={saveHandleMouseEvent}
              dark={saveBtnHovered}
              size="small"
              customClassName="searchLandingBtn"
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={
                <ListingCardIcon
                  shape={"saveIcon"}
                  shapeColor={saveBtnHovered ? "black" : "white"}
                />
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          mt={1}
          className="searchLandingMainContainer "
        >
          <Grid item xs={4} sm={4} lg={2} className="textCenter height100">
            <SearchForm
              customClassName="inputTagSearchLanding"
              placeholder={"Neighbourhood, Buildings"}
              setEnteredValuesArray={setEnteredValuesArray}
            />
          </Grid>
          <Grid
            container
            item
            xs={8}
            sm={8}
            lg={6}
            pb={1}
            className="textCenter alignCenter"
          >
            <Grid item sm={0.5} className="searchLandingDividerVertXS">
              <button
                className="scrollButton"
                onClick={() => scrollContainer(-1)}
              >
                <ButtonLeftArrow />
              </button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={11}
              className="tagSearchLandingContainer"
              ref={scrollRef}
            >
              <Stack direction={"row"} className="horizontalScroll">
                {enteredValuesArray.map((item, index) => (
                  <Box key={index} className="tagSearchLanding">
                    <Typography variant="DubaiRegular16ForFilters">
                      {item.value}
                    </Typography>
                    <Box
                      size="small"
                      className="tagCloseBtnSearch"
                      onClick={() => handleRemoveItem(index)}
                    >
                      <Typography variant="DubaiRegular12">X</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item sm={0.5} className="searchLandingDividerVertXS">
              <button
                className="scrollButton"
                onClick={() => scrollContainer(1)}
              >
                <ButtonRightArrow />
              </button>
            </Grid>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="searchLandingDividerVert"
          />
          <Grid item xs={6} sm={3} lg={1.3} pb={1} className="textCenter ">
            <CustomButton
              text="More Filters"
              onMouseEnter={moreFilterHandleMouseEvent}
              onMouseLeave={moreFilterHandleMouseEvent}
              dark={moreFilterBtnHovered}
              size="small"
              customClassName="moreSearchLandingBtn "
              typographyVariant="DubaiRegular16ForFiltersBtns"
              rightIcon={<ListingCardIcon shape={"moreIcon"} />}
              variant="outlined"
              onClick={handleOpenPopup}
            />
          </Grid>
          <Grid
            item
            xs={5}
            sm={3}
            lg={1}
            pb={1}
            className="textCenter alignCenter"
          >
            <label className="checkbox">
              <input
                type="checkbox"
                checked={exclusivesChecked}
                onChange={handleExclusivesToggle}
                className="mt5"
              />
              <Typography
                variant="DubaiRegular16ForFilters"
                lineHeight={"1.65rem"}
              >
                Exclusives
              </Typography>
            </label>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            className="searchLandingDividerVertXS"
          />
          <Grid
            item
            xs={6}
            sm={2.95}
            lg={0.9}
            pb={1}
            className="textCenter alignCenter"
          >
            <Typography variant="DubaiRegular16ForFilters">
              {searchedListings.length > 0 ? searchedListings.length : 0}{" "}
              Listings
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid
            container
            item
            xs={5}
            sm={2.95}
            lg={0.7}
            pb={1}
            className="textCenter alignCenter searchLandingSortCont"
            onMouseEnter={toggleSortClick}
            onMouseLeave={toggleSortClick}
          >
            <Grid item pl={0.6}>
              <Typography variant="DubaiRegular16ForFilters">
                Sort by
              </Typography>
            </Grid>

            <Grid item className="arrow-dwn">
              <ExpandMoreSharp />
            </Grid>
            {toggleSort && (
              <Stack direction="column" className="searchLandingSortDiv">
                {sortOptions.map((item, ind) => (
                  <Typography
                    variant="DubaiRegular16ForFilters"
                    key={ind}
                    onClick={() => handleSorting(item)}
                    px={2}
                    py={1}
                    className={
                      selectedSortOption === item
                        ? "active cursorPointer searchLandingPageSortOptions"
                        : "cursorPointer searchLandingPageSortOptions"
                    }
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
        <hr className="searchLandingHrTag" />
      </Box>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <Grid container className="mapAndListingsContainer">
          <Grid item xs={12} sm={12} md={7} mb={1}>
            <Box ml={3} mr={1}>
              <ManseelMap
                listings={searchedListings}
                areaStartRange={6}
                sync
                setSyncedData={setSyncedData}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4.8}
            mt={2}
            className="searchListingCardContainer"
          >
            <Grid container>
              {rearrangedList.length > 0 ? (
                rearrangedList?.map((item, key) => (
                  <Grid
                    item
                    xs={mobGrids}
                    sm={tabGrids}
                    md={tabGrids}
                    lg={tabGrids}
                    key={key}
                    className="searchLandingCardsGrid"
                  >
                    <Card
                      item={item}
                      key={key}
                      width={220}
                      height={240}
                      availableGrids={2.4}
                      cardContentAlignment="true"
                    />
                  </Grid>
                ))
              ) : (
                <Typography variant="AlwynNewRoundedRegular16" ml={2} mt={1}>
                  No records found.
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}

      <MoreFilterPopup
        open={openPopup}
        onClose={handleClosePopup}
        status={status}
        setStatus={setStatus}
        areaType={areaType}
        setAreaType={setAreaType}
        minArea={minArea}
        setMinArea={setMinArea}
        maxArea={maxArea}
        setMaxArea={setMaxArea}
        checkedItems={amenities}
        setCheckedItems={setAmenities}
        vacant={vacant}
        setVacant={setVacant}
        cryptoAccept={cryptoAccept}
        setCryptoAccept={setCryptoAccept}
        instantViewing={instantViewing}
        setInstantViewing={setInstantViewing}
        fetchFilteredSearchData={fetchFilteredSearchData}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </>
  );
};

export default SearchLandingPage;
