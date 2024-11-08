import React, { useState, createContext } from "react";
import "./ChildComponents.css";
import Popup from "./Popup";

export const PageName = createContext();

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

      <PageName.Provider value={offerText}>
        <Popup trigger={popupVisible} setTrigger={setPopupVisible} />
      </PageName.Provider>
    </>
  );
};

export default OfferBox;
