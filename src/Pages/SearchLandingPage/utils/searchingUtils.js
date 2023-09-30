const _ = require("lodash");
const { stateListElement } = require("../../../Constants/UAEStatesConstants");

export const generatePayload = (
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
) => {
  let minPriceValue = minPrice ? parseInt(minPrice) : null;
  let maxPriceValue = maxPrice ? parseInt(maxPrice) : null;

  let minAreaValue = minArea ? parseInt(minArea) : null;
  let maxAreaValue = maxArea ? parseInt(maxArea) : null;

  const propertyAmenities = Object.keys(amenities).filter(
    (key) => amenities[key] === true
  );

  if (minPriceValue && !maxPriceValue) {
    maxPriceValue = 1000000000;
  } else if (!minPriceValue && maxPriceValue) {
    minPriceValue = 0;
  }

  if (minAreaValue === null && maxAreaValue) {
    minAreaValue = 0;
  } else if (minAreaValue && (maxAreaValue === null || maxAreaValue === "")) {
    maxAreaValue = 1000000;
  }

  let areasArray = enteredValuesArray
    .filter((item) => item?.key === "Area")
    .map((item) => item?.value);

  let buildingsArray = enteredValuesArray
    .filter((item) => item?.key === "Building")
    .map((item) => item?.value);
  const payload = {
    listingFilters: {
      country: selectedCountry,
      state:
        selectedState === stateListElement[selectedCountry]
          ? "All"
          : selectedState,
      city:
        selectedCity !== "All Cities"
          ? selectedCity === "Dubai City"
            ? "Dubai"
            : selectedCity
          : null,
      saleOrRent: params.name?.toUpperCase(), //RENT,BUY
      areas: areasArray.length > 0 ? areasArray : null,
      buildings: buildingsArray.length > 0 ? buildingsArray : null,
      propertyType: propertyType === "Select All" ? null : propertyType, // Use the selected property type from state
      exclusive: exclusivesChecked ? exclusivesChecked : null,
      rentalPeriod:
        params.name === "rent" && minPriceValue && maxPriceValue
          ? selectedPeriod
          : null,
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
      priceMin: minPriceValue,
      priceMax: maxPriceValue,

      completionStatus: status === "Any" ? "ALL" : status,
      propertyArea:
        minArea && maxArea ? (areaType === "sqft" ? "SQFT" : "SQMT") : null, //SQFT,SQMT
      propertyAreaMin: minAreaValue !== null ? minAreaValue : null,
      propertyAreaMax: maxAreaValue !== null ? maxAreaValue : null,
      propertyAmenities:
        propertyAmenities.length > 0 ? propertyAmenities : null,
      propertyUsage: vacant ? "Vacant" : null,
      digitalCurrencyAccepted: cryptoAccept ? "Yes" : null,
      viewingOptions: instantViewing ? "instantly" : null,
    },
  };

  return payload;
};

export const populateStatesFromSearchedObj = (
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
) => {
  if (!_.isEmpty(searchedObj)) {
    if (searchedObj.listingFilters) {
      const listingFilters = searchedObj.listingFilters;
      const modifiedBeds = listingFilters.beds
        ? listingFilters.beds.includes("ALL")
          ? ["Any"]
          : listingFilters.beds?.reduce((acc, bed) => {
              const bedNumber = parseInt(bed);
              if (bedNumber >= 8 && bedNumber <= 15) {
                if (!acc.includes("7+")) {
                  acc.push("7+");
                }
              } else {
                acc.push(bed);
              }
              return acc;
            }, [])
        : ["Any"];

      const modifiedBaths = listingFilters?.baths
        ? listingFilters?.baths.includes("ALL")
          ? ["Any"]
          : listingFilters.baths.reduce((acc, bath) => {
              const bathNumber = parseInt(bath);
              if (bathNumber >= 8 && bathNumber <= 15) {
                if (!acc.includes("7+")) {
                  acc.push("7+");
                }
              } else {
                acc.push(bath);
              }
              return acc;
            }, [])
        : ["Any"];

      setSelectedState(listingFilters.state || "All Emirates");
      setSelectedCity(
        listingFilters.city === "Dubai"
          ? "Dubai City"
          : listingFilters.city || ""
      );
      setPropertyType(
        listingFilters.propertyType === null
          ? "Select All"
          : listingFilters.propertyType
      );
      setExclusivesChecked(listingFilters.exclusive || false);

      setMinPrice(
        listingFilters.priceMin === "" ? null : listingFilters.priceMin
      );
      setMaxPrice(
        listingFilters.priceMax === "" ? null : listingFilters.priceMax
      );
      setSelectedPeriod(
        params.name === "rent" && listingFilters.rentalPeriod
          ? listingFilters.rentalPeriod
          : "Yearly"
      );

      setSelectedBedsBaths({
        beds: modifiedBeds,
        baths: modifiedBaths,
      });
      setPropertyAmenities(listingFilters.propertyAmenities, setAmenities);
      setEnteredValuesArray(listingFilters.tags);
      setStatus(
        listingFilters.completionStatus
          ? listingFilters.completionStatus === "ALL"
            ? "Any"
            : listingFilters.completionStatus
          : "Any"
      );
      setVacant(listingFilters.propertyUsage === "Vacant");
      setCryptoAccept(listingFilters.digitalCurrencyAccepted === "Yes");
      setInstantViewing(listingFilters.viewingOptions === "instantly");
      setStatesPopulated(true);
    } else {
      setEnteredValuesArray(() => {
        if (searchedObj.key) {
          const newObj = [
            {
              key: searchedObj.key,
              value: searchedObj.value,
            },
          ];
          return newObj;
        } else {
          return [];
        }
      });
      setSelectedState(searchedObj.state ? searchedObj.state : "All Emirates");
      setSelectedCity(() => {
        if (searchedObj.city === "Dubai City") {
          return "Dubai";
        } else {
          return searchedObj.city || "";
        }
      });
      setPropertyType("Select All");
      setExclusivesChecked(
        searchedObj.exclusives ? searchedObj.exclusives : false
      );
      setSelectedPeriod("Yearly");
      setSelectedBedsBaths({
        beds: ["Any"],
        baths: ["Any"],
      });
      setStatus("Any");
      setVacant(false);
      setCryptoAccept(false);
      setInstantViewing(false);
      setStatesPopulated(true);
    }
  }
};

export function setPropertyAmenities(listingFilters, setAmenities) {
  const amenitiesObject = {};

  if (!_.isEmpty(listingFilters)) {
    listingFilters.forEach((amenity) => {
      amenitiesObject[amenity] = true;
    });
    setAmenities(amenitiesObject);
  } else {
    setAmenities({});
  }
}

export function rearrangeArray(arr1, arr2) {
  // Create a copy of the input array to avoid mutating the original state
  const newArr1 = [...arr1];

  arr2.forEach((obj) => {
    const idToFind = obj?.properties.id;
    const indexToMove = newArr1.findIndex(
      (item) => item.referenceNumber === idToFind
    );

    if (indexToMove !== -1) {
      // Remove the matched object from newArr1
      const matchedObject = newArr1.splice(indexToMove, 1)[0];

      // Insert the matched object from arr2 at the beginning of newArr1
      newArr1.unshift(matchedObject);
    }
  });

  return newArr1;
}
