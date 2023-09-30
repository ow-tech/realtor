import React, { useState, useRef } from "react";

const InputWithChangeBtn = ({
  initialValue,
  onValueChange,
  type,
  customCLass = "",
  enabled = false,
  setEnabled = null,
}) => {
  const inputRef = useRef(null);
  const [isTypingEnabled, setIsTypingEnabled] = useState(enabled);

  const handleInputChange = (event) => {
    onValueChange(event.target.value);
  };

  const handleStartTyping = () => {
    setIsTypingEnabled(true);
    inputRef.current.focus();
    if (setEnabled) {
      setEnabled(true);
    }
  };

  const handleInputClick = () => {
    if (!isTypingEnabled) {
      setIsTypingEnabled(true);
      inputRef.current.focus();
      if (setEnabled) {
        setEnabled(true);
      }
    }
  };

  return (
    <div className={`inputWithChange ${customCLass}`}>
      <input
        className="width100"
        type={type}
        value={initialValue}
        onChange={isTypingEnabled ? handleInputChange : undefined}
        ref={inputRef}
        onClick={handleInputClick}
        disabled={!isTypingEnabled}
        style={{
          pointerEvents: isTypingEnabled ? "auto" : "none",
        }}
      />
      <span onClick={handleStartTyping} className="inputWithChangeBtn">
        Change
      </span>
    </div>
  );
};

export default InputWithChangeBtn;
