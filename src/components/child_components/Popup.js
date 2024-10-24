import React from "react";
import "./Popup.css";
import HealthInsurance from "../offering_components/HealthInsurance";
import LifeInsurance from "../offering_components/LifeInsurance";

const Popup = ({ trigger, setTrigger }) => {
  if (!trigger) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          &times;
        </button>
        {/* <HealthInsurance /> */}
        <LifeInsurance />
      </div>
    </div>
  );
};

export default Popup;
