import React, { useState } from "react";
import SelectComponent from "../../Select/SelectComponent";
import { languageMenuItems } from "../../../Constants/ConstantValues";
const LanguageSelect = () => {
  const initial ="English";
  const [selectedLanguage, setSelectedLanguage] = useState(initial);

  const handleCountryChange = (selectedItem) => {    
    setSelectedLanguage(selectedItem);
  };

  const items = languageMenuItems.map((languageMenuItem) => ({
    value: languageMenuItem.language,
    label: languageMenuItem.language,   
  }));
 
 
  return (
    <SelectComponent
      value={selectedLanguage}
      onChange={handleCountryChange}
      items={items}
      selectComponentWrapperCustomSelect={'selectComponentWrapperCustomLanguage'}
    
    />
   
  );
};
export default LanguageSelect;