import React, { useState } from "react";

function NumberInputDropdown({ text = "", price, setPrice, values }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleNumberInputChange = (type = "", inputValue) => {
    if (type === "li") {
      inputValue = inputValue.replace(/,/g, "");
    }

    setPrice(inputValue);
  };

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  return (
    <div className="numInpDDContainer">
      <input
        type="number"
        id="numberInput"
        className="numInpDDField"
        placeholder={text}
        min="1"
        step="1"
        value={price}
        onChange={(e) => handleNumberInputChange("", e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isDropdownVisible && (
        <ul className="numInpDDUl">
          {values.map((value, ind) => (
            <li key={ind} onClick={() => handleNumberInputChange("li", value)}>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NumberInputDropdown;
