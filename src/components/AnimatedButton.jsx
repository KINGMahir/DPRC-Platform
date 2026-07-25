// src/CustomImageButton.jsx
import React from "react";

function CustomImageButton() {
  const handleClick = () => {
    alert("Custom circular button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="p-0 border-none bg-transparent focus:outline-none"
    >
      <img
        src="/circle-button.png"
        alt="Circular Button"
        className="w-24 h-24 rounded-full hover:scale-110 transition-transform duration-300"
      />
    </button>
  );
}

export default CustomImageButton;

