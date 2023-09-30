import React, { useContext } from "react";
import BedBathArea from "../../../../../Components/BedBathArea/BedBathArea";
import PriceChargesDetails from "./PriceChargesDetails/PriceChargesDetails";
import RatingsAAAndStar from "../../../../../Components/RatingsAAAndStar/RatingsAAAndStar";
import ServiceCharges from "../RatingsOtherDetails/PropertyInfoDescription/ServiceCharges";
import AppContext from "../../../../../context/AppContext";
import {
  convertCurrency,
  getDateDiffInDays,
  formatNumberWithCommasAndDecimals,
  formatNumberWithCommasAndWithoutDecimals,
} from "../../../../../utils/utility";
import { notAvailable } from "../../../../../Constants/ConstantValues";
import isEqual from "lodash/isEqual";
import { capitalizeWords } from "../../../../../utils/utility";

const RatingsOtherDetails = ({ listingId, property,buildingObject }) => {
  const { toCurrency, selectedCurrency, conversionRates,selectedCountryCurrency } =
    useContext(AppContext);
  // console.log('property',property)

  let data = [
    {
      label: `${toCurrency} / m²`,
      value: convertCurrency(
        conversionRates,
        toCurrency,
        "",
        property?.priceSqm ? property?.priceSqm : "0",selectedCountryCurrency
      ),
      description: null,
    },
    {
      label: `${toCurrency} / Sq. Ft.`,
      value: convertCurrency(
        conversionRates,
        toCurrency,
        "",
        property?.priceSqft
          ? formatNumberWithCommasAndWithoutDecimals(property?.priceSqft)
          : "0",selectedCountryCurrency
      ),
      description: null,
    },
    {
      label: "Service Charge / m²",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        property?.serviceChargeSqm ? property?.serviceChargeSqm : "0",selectedCountryCurrency
      ),
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Service Charge / sqft.",
      value: convertCurrency(
        conversionRates,
        toCurrency,
        selectedCurrency,
        property?.serviceChargeSqft ? property?.serviceChargeSqft : "0",selectedCountryCurrency
      ),
      description: {
        description: <ServiceCharges />,
        heading: "Service charges",
      },
    },
    {
      label: "Property Type",
      value:capitalizeWords( property?.propertyType && !isEqual(property.propertyType, "")
      ? property.propertyType
      : notAvailable)
       ,
      description: null,
    },
    {
      label: "Digital Currency accepted",
      value:capitalizeWords(property?.digitalCurrencyAccepted &&
        !isEqual(property.digitalCurrencyAccepted, "")
          ? property.digitalCurrencyAccepted
          : notAvailable),
        
      description: null,
    },
    {
      label: "Days on Market",
      value: getDateDiffInDays(property?.createdTime),
      description: null,
    },
    {
      label: "Available",
      value:capitalizeWords(property?.saleOrRent),
      description: null,
    },
  ];
  if (property?.saleOrRent === "For Rent") {
    // Add additional items only if the condition is fulfilled
    data.push(
      {
        label: "Rental Period",
        value: property?.rentalPeriod,
        description: null,
      },
      {
        label: "Rental Deposit Amount",
        value: convertCurrency(
          conversionRates,
          toCurrency,
          selectedCurrency,
          property?.rentalDepositAmount ? property.rentalDepositAmount : "0",selectedCountryCurrency
        ),

        description: null,
      },
      {
        label: "Rental Deposit",
        value:
          property?.rentalDepositPercentage &&
          !isEqual(property.rentalDepositPercentage, "")
            ? `${property?.rentalDepositPercentage} %`
            : notAvailable,
        description: null,
      }
    );
    data = data.filter(
      (item) =>
        item.label !== "Service Charge / m²" &&
        item.label !== "Service Charge / sqft."
    );
  }

  return (
    <>
      <div className="ratingsOtherSpacer"></div>
      <RatingsAAAndStar
        listingId={listingId}
        property={property}
        customStyles="customStylesTagWithInfo"
        buildingObject={buildingObject}
      />
      <BedBathArea
        beds={property?.beds}
        baths={property?.baths}
        meters={formatNumberWithCommasAndDecimals(property?.builtUpAreaSqm)}
        sqfts={formatNumberWithCommasAndWithoutDecimals(
          property?.builtUpAreaSqft
        )}
      />
      <PriceChargesDetails
        data={data}
        listingId={listingId}
        property={property}
      />
    </>
  );
};

export default RatingsOtherDetails;
