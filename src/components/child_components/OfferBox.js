import React from "react";
import "./ChildComponents.css";
import Popup from "./Popup";
import { useState } from "react";

const OfferBox = ({ offerText }) => {
  const [popupVisible, setPopupVisible] = useState(false);
    const togglePopup = () => {
        setPopupVisible(!popupVisible);
      };
  return (
    <>
      <button className="btn" onClick={togglePopup}>
        {offerText}
      </button>
      <Popup trigger={popupVisible} setTrigger={setPopupVisible} />
    </>
  );
};

export default OfferBox;
