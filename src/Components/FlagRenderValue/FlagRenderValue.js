import { Typography } from "@mui/material";
import { CountryFlags } from "../../Assets/SVG/Flags/Flags";
import { currencies } from "../../Assets/SVG/Currency/Currency";
import { languageMenuItems } from "../../Constants/ConstantValues";
import LanguageIcon from "@mui/icons-material/Language";
import { CallingCountryCodes } from "../../Assets/SVG/Flags/CallingCountryCodes/CallingCountryCodes";
import isEqual from "lodash/isEqual";

const FlagWithLabel = ({ flagComponent, name }) => (
  <>
 
    <Typography variant="DubaiRegular16" className="flagRenderPadding" mr={1}>
      {" "}
      {flagComponent}
    </Typography>{" "}
    {name ? <span className="flag-name">{name}</span> : <></>}
  </>
);


export const FlagRenderValue = ({ value }) => {

  const _ = require("lodash");
  const matchingItem = CountryFlags.find((itemFlag) =>
   isEqual(itemFlag.name, value)
  );

  const matchingCurrency = currencies.find((currency) =>
   isEqual(currency.currency, value)
  );

  const isLanguage = languageMenuItems.some((language) =>
   isEqual(language.language, value)
  );
  const callingCountryCode = CallingCountryCodes.find((countryCode) =>
   isEqual(countryCode.phoneCode, value)
  );
// console.log('value', value)
  if (matchingItem) {
    const editedValue = matchingItem ? (
      <FlagWithLabel
        flagComponent={matchingItem.flag}
        name={matchingItem.displayName}
      />
    ) : (
      value
    );
    return editedValue;
  } else if (matchingCurrency) {
    return (
      <FlagWithLabel
        // flagComponent={matchingCurrency.flag}
        name={`${matchingCurrency.currency} (${matchingCurrency.currencySymbol})`}
      />
    );
  } else if (isLanguage) {
    return (
      <FlagWithLabel
      // not using flagComponent due to padding. Otherwise passing icon as Name.
        // flagComponent={<LanguageIcon className="languageIcon" />}
        name={<LanguageIcon className="languageIcon" />}
      />
    );
  } else if (callingCountryCode) {
    return (
      <FlagWithLabel
        flagComponent={callingCountryCode.flag}
        name={`+${callingCountryCode.phoneCode}`}
      />
    );
  }

  return value;
};
