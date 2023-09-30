import React from "react";
import { nationalities } from "../../../../Constants/Nationalities";

const NationalitySelect = ({ selectedNationality, setSelectedNationality }) => {
  const handleChange = (event) => {
    setSelectedNationality(event.target.value);
  };

  const isValidNationality = nationalities.includes(selectedNationality);

  return (
    <div className="nationalitySelectBox">
      <select
        id="nationality-select"
        value={selectedNationality}
        onChange={handleChange}
        className="nationalitySelect width100"
      >
        {selectedNationality === "" && (
          <option value="">Select Nationality</option>
        )}
        {!isValidNationality && <option value="">Select Nationality</option>}
        {nationalities.map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NationalitySelect;
