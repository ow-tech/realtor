import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, isValid } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DOBInput = ({ selectedDate, setSelectedDate }) => {
  const [parsedDate, setParsedDate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      let parsed;
      const formats = ["dd/MM/yyyy", "dd-MM-yyyy"];
      for (const formatString of formats) {
        parsed = parse(selectedDate, formatString, new Date());
        if (isValid(parsed)) {
          setParsedDate(parsed);
          return;
        }
      }
      setParsedDate(null);
    } else {
      setParsedDate(null);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    const formatted = date ? format(date, "dd/MM/yyyy") : "";
    setSelectedDate(formatted);
  };

  return (
    <div className="customDatePicker">
      <DatePicker
        selected={parsedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className="customDatePickerInput width94"
        customInput={
          <input
            className="customDatePickerInputField"
            readOnly
            value={selectedDate || ""}
          />
        }
        popperPlacement="top-start"
      />
      <button
        className="calendarButton"
        onClick={() =>
          document.querySelector(".customDatePickerInputField").click()
        }
      >
        <CalendarMonthIcon />
      </button>
    </div>
  );
};

export default DOBInput;
