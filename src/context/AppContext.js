import React, { createContext, useState } from "react";
import { defaultCountry,defaultCurrency } from "../Constants/ConstantValues";
import { CountryFlags } from "../Assets/SVG/Flags/Flags";
import { uaeListings } from "../Constants/uaeListings";
import { uaeSearchData } from "../Constants/uaeSearchData";
import { allLocationsData } from "../Constants/allLocationData";


const localStgSelectCountry =window.sessionStorage.getItem('selectedCountry')
const localStgSelectedCurrency =window.sessionStorage.getItem('selectedCurrency')
const AppContext = createContext(null);
const initial =localStgSelectCountry?localStgSelectCountry: defaultCountry;
const selectedCountryCurrencyFromObject = CountryFlags.find(({name})=>initial ===name)

const initialCurrency =localStgSelectedCurrency?localStgSelectedCurrency: defaultCurrency
const AppProvider = (props) => {
  const [listings, setListings] = useState(uaeListings);
  const [userObj, setUserObj] = useState(null);
  const [userPreferences, setUserPreferences] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState(defaultCurrency);
  const [conversionRates, setConversionRates] = useState(null);
  const [toCurrency, setToCurrency] = useState(initialCurrency);
  const [selectedCurrency, setSelectedCurrency] = useState(initialCurrency);
  const [exclusives, setExclusive] = useState();
  const [editedListings, setEditedListings] = useState();
  const [exclusiveListings, setExclusiveListings] = useState([]);
  const [mapTransitSearches, setMapTransitSearches] = useState([]);
  const [buildingObjectContext, setBuildingObjectContext] = useState('');
  const [buildingReferenceNoContext, setBuildingReferenceNoContext] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(initial);
  const[displaySelectedCountry, setDisplaySelectedCountry]=useState()
  const [listingHash, setListingHash] = useState({});
  const [buildingHash, setBuildingHash] = useState({});
  const [allSearchData, setAllSearchData] = useState(uaeSearchData);
  const [buyOrRent, setBuyOrRent]=useState('buy')
  const [agentData, setAgentData] = useState(null);
  const [ navLinkBuyOrRent, setNavLinkBuyOrRent] =useState('')
  const [listingObjectContext, setListingObjectContext] = useState({});
  const [allLocationData, setAllLocationData]=useState(allLocationsData)
  const [selectedCountryCurrency, setSelectedCountryCurrency]=useState(selectedCountryCurrencyFromObject.currency)

  const contextValue = {
    baseCurrency,
    setBaseCurrency,
    userObj,
    setUserObj,
    userPreferences,
    setUserPreferences,
    toCurrency,
    setToCurrency,
    selectedCurrency,
    setSelectedCurrency,
    listings,
    setListings,
    conversionRates,
    setConversionRates,
    exclusives,
    setExclusive,
    editedListings,
    setEditedListings,
    selectedCountry,
    setSelectedCountry,
    exclusiveListings,
    setExclusiveListings,
    mapTransitSearches,
    setMapTransitSearches,
    buildingObjectContext,
    setBuildingObjectContext,
    listingHash,
    setListingHash,
    buildingHash,
    setBuildingHash,
    allSearchData,
    setAllSearchData,
    agentData,
    setAgentData,
    buyOrRent, 
    setBuyOrRent,
    navLinkBuyOrRent,
    setNavLinkBuyOrRent,
    buildingReferenceNoContext, setBuildingReferenceNoContext,
    listingObjectContext, setListingObjectContext,
    allLocationData, setAllLocationData,
    displaySelectedCountry, setDisplaySelectedCountry,
    selectedCountryCurrency, setSelectedCountryCurrency,
  };

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};

export default AppContext;

export { AppProvider };
