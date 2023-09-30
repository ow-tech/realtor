import React, { useContext, useRef,useEffect } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { currencies } from "../../../Assets/SVG/Currency/Currency";
import isEqual from "lodash/isEqual";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import { isMediumScreens } from "../../../Constants/ConstantValues";
const CurrencySelect = () => {
  const isMediumScreen = useMediaQuery(isMediumScreens);
  const {
    setToCurrency,
    selectedCurrency,
    setSelectedCurrency,
    setConversionRates,
    conversionRates,
    selectedCountry
    
  } = useContext(AppContext);
  const thirtyMinutesFromCurrentTimeStamp = useRef();

  //
  // const selectedCountryObject = currencies.find(({name})=>isEqual(name, selectedCountry))
  const fetchConversionRates = async () => {
    const selectedCountryObj = currencies.find(({name})=> isEqual(name, selectedCountry))
    await axios
      .get("https://api.exchangerate.host/latest", {
        params: {
          base:selectedCountryObj.currency,
          symbols:
            "USD,EUR,AED,GBP,CNY,JPY,AUD,SAR,RUB,HKD,INR,BRL,BTC,ETH,ADA,OMR",
        },
      })
      .then((res) => {
        const data = res.data;
        // console.log('data.rates',data.rates)
        setConversionRates(data.rates);
      })

      .catch((err) => {
        console.error("Error fetching conversion rates:", err.message);
      });
  };

  const handleCurrencyChange = (currency) => {
    if (
      Date.now() > thirtyMinutesFromCurrentTimeStamp.current ||
      !conversionRates
    ) {
      fetchConversionRates();

      thirtyMinutesFromCurrentTimeStamp.current = Date.now() + 1800000; // 30 minutes in milliseconds;
    }
   
    
    setSelectedCurrency(currency);
    setToCurrency(currency);
    window.sessionStorage.setItem('selectedCurrency',currency)
  };

  

  const items = currencies.map((country) => ({
    value: country.currency,
    label: country.currency,
    icon: country.flag,
    symbol: country.currencySymbol,
  }));


  

  return (
    <SelectComponent
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      items={items}
      currencyOptionsClassName={
        isMediumScreen
          ? "currencyOptionsClassNameIsMediumScreens"
          : "currencyOptionsClassName"
      }
      currencyButtonWrapperCustomClass={'currencyButtonWrapperCustomClass'}
      selectComponentWrapperCustomSelect={'selectComponentWrapperCustomCurrency'}
    />
  );
};

export default CurrencySelect;
