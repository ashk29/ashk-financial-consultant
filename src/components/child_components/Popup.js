import React from "react";
import "./Popup.css";
import { useContext } from "react";
import { PageName } from "./OfferBox";
import RenderComponent from "../offering_components/RenderComponent";

const Popup = ({ trigger, setTrigger }) => {
  const page = useContext(PageName);
  if (!trigger) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          &times;
        </button>
        <RenderComponent componentName={page} />
      </div>
    </div>
  );
};

export default Popup;
