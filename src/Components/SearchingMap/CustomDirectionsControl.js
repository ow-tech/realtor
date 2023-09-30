import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import { SearchIcon } from "../../Assets/SVG/Common/CommonSvgs";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const CustomDirectionsControl = ({ onSetDestination }) => {
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  let suggestionTimeoutId = null; // Track the timeout ID

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const destination = event.target.value.trim();

      if (destination) {
        onSetDestination(destination);
        setSuggestions([]); // Clear suggestions after pressing Enter
        setInputValue("");
      }
    }
  };

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    clearTimeout(suggestionTimeoutId);

    // Delay updating the suggestions state by 500ms
    suggestionTimeoutId = setTimeout(() => {
      fetchSuggestions(newInputValue);
    }, 500);
  };

  const fetchSuggestions = async (input) => {
    try {
      const trimmedInput = input.trim();
      if (!trimmedInput) {
        setSuggestions([]);
        return;
      }

      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${trimmedInput}.json?access_token=${mapboxgl.accessToken}`
      );

      if (response.status === 200) {
        const data = response.data;
        setSuggestions(data.features);
      }
    } catch (error) {
      console.log("Error fetching suggestions:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue("");
    setSuggestions([]); // Clear suggestions when a suggestion is selected
    inputRef.current.blur(); // Remove focus from the input box after selecting a suggestion
    onSetDestination(suggestion.place_name);
  };

  const handleClickOutside = (event) => {
    if (
      suggestionsRef.current &&
      !suggestionsRef.current.contains(event.target) &&
      !inputRef.current.contains(event.target)
    ) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="customDirectionsControl">
      <input
        type="text"
        placeholder="Building, School, Metro Station"
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        value={inputValue}
        ref={inputRef}
      />
      <span className="customDirectionSearchIcon">
        <SearchIcon />
      </span>
      {suggestions.length > 0 && (
        <ul className="suggestions" ref={suggestionsRef}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => {
                handleSuggestionClick(suggestion);
                setSuggestions([]); // Clear suggestions when a suggestion is clicked
              }}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDirectionsControl;
