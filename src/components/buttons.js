import React from "react";

function Buttons({
  specificButtonTitle,
  specificButtonStyling,
  specificButtonText,
  specificButtonClick,
}) {
  return (
    <button
      type="button"
      title={specificButtonTitle}
      className={`${specificButtonStyling} font-avenirNextRegular py-4 px-10 text-2xl rounded outline-none bg-landTower-gold-color text-white`}
      onClick={specificButtonClick}
    >
      {specificButtonText}{" "}
    </button>
  );
}

export default Buttons;
