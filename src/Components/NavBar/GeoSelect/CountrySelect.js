import React, { useContext, useEffect } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { CountryFlags } from "../../../Assets/SVG/Flags/Flags";
import AppContext from "../../../context/AppContext";
import { getAllLocationData } from "../../../network/apiServices";
import { errorToast } from "../../../utils/useToast";
import isEqual from "lodash/isEqual";
import { defaultCountry } from "../../../Constants/ConstantValues";
import { currencies } from "../../../Assets/SVG/Currency/Currency";
import { useLocation, useNavigate } from "react-router-dom";
import { uaeListings } from "../../../Constants/uaeListings";
import { usaListings } from "../../../Constants/usaListings";
import { omanListings } from "../../../Constants/omanListings";

const CountrySelect = () => {
  const {
    setSelectedCountry,
    selectedCountry,
    setAllLocationData,
    allLocationData,
    setSelectedCurrency,
    setToCurrency,
    setListings,
    setSelectedCountryCurrency,setConversionRates
  } = useContext(AppContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // async function fetchAllLocationData() {
    //   try {
    //     const fetchData = await getAllLocationData({});
    //     const data =fetchData.data.locationsData
    //     const uaeIndex = data.findIndex(item => isEqual(item.country,"United Arab Emirates"));
    //     if (uaeIndex !== -1) {
         
    //       const uaeObject = data.splice(uaeIndex, 1)[0];
         
    //       data.sort((a, b) => a.country.localeCompare(b.country));
        
    //       data.unshift(uaeObject);
    //     }
    //     setAllLocationData(data);
    
    //   } catch (error) {
    //     errorToast(`All Location data: ${error} `);
    //   }
    // }
    // fetchAllLocationData();
    let localStgSelectCountry = window.sessionStorage.getItem("selectedCountry");
    if (localStgSelectCountry) setSelectedCountry(localStgSelectCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountryChange = (selectedItem) => {
    // // const country = CountryFlags.find({name})
    // console.log('selected', selectedItem)
    switch(selectedItem){
      case 'United States':
        setListings(usaListings)
        break;
        case 'Oman':
        setListings(omanListings)
        break;
        default:
          setListings(uaeListings)
    }

    setConversionRates(null)
    const currency = currencies.find(({ name }) => isEqual(name, selectedItem));
const country =CountryFlags.find(({name})=>isEqual(name, selectedItem))
    setSelectedCountry(selectedItem);
    setSelectedCountryCurrency(country.currency)
    window.sessionStorage.setItem("selectedCountry", selectedItem);

    // handle currency changes as per country selected
    setSelectedCurrency(currency.currency);
    setToCurrency(currency.currency);
    window.sessionStorage.setItem("selectedCurrency", currency.currency);
    if (
      location.pathname.includes("/listing/") ||
      location.pathname.includes("/building/") ||
      location.pathname.includes("agent-profile")
    ) {
      navigate("/");
    }
  };
  // console.log('allLocationData',allLocationData)

  const items =
    allLocationData.length > 0
      ? allLocationData.map((locationDataItem) => {
          const country = CountryFlags.find(({ name }) =>
            isEqual(name, locationDataItem.country)
          );
          return {
            value: country.name,
            label: country.displayName,
            icon: country.flag,
          };
        })
      : [CountryFlags.find(({ name }) => isEqual(name, defaultCountry))].map(
          (country) => {
            return {
              value: country.name,
              label: country.displayName,
              icon: country.flag,
            };
          }
        );

  return (
    <SelectComponent
      value={selectedCountry}
      onChange={handleCountryChange}
      items={items}
    />
  );
};

export default CountrySelect;
