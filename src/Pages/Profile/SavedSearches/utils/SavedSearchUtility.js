export const generatePayload = (
  selectedCountry,
  state,
  city,
  saleOrRent,
  neighbourhood,
  buildings,
  price,
  propertyType,
  exclusive,
  beds,
  baths,
  mapping
) => {
  const priceSplit = price.split("-");
  let minPriceValue = parseInt(priceSplit[0]);
  let maxPriceValue = parseInt(priceSplit[1]);

  let tags = [];
  neighbourhood?.forEach((item) => {
    tags.push({ key: "Area", value: item });
  });

  buildings.forEach((item) => {
    tags.push({ key: "Building", value: item });
  });

  const payload = {
    listingFilters: {
      country: selectedCountry,
      state: state === "All Emirates" ? "All" : state,
      city:
        city !== "All Cities" ? (city === "Dubai City" ? "Dubai" : city) : null,
      saleOrRent: saleOrRent,
      tags: tags,
      propertyType: propertyType === "Select All" ? null : propertyType, // Use the selected property type from state
      exclusive: exclusive,
      rentalPeriod: null,
      beds:
        beds && beds?.length > 0
          ? beds[0] === "Any"
            ? ["ALL"]
            : beds.map((item) => (item === "7+" ? mapping["7+"] : item)).flat()
          : null,
      baths:
        baths && baths?.length > 0
          ? baths[0] === "Any"
            ? ["ALL"]
            : baths.map((item) => (item === "7+" ? mapping["7+"] : item)).flat()
          : null,
      priceMin: minPriceValue,
      priceMax: maxPriceValue,

      completionStatus: "ALL",
      propertyArea: null,
      propertyAreaMin: null,
      propertyAreaMax: null,
      propertyAmenities: null,
      propertyUsage: null,
      digitalCurrencyAccepted: "No",
      viewingOptions: null,
    },
  };

  return payload;
};
