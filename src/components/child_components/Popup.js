import React, { useEffect, useRef } from "react";
import "./Popup.css";
import { useContext } from "react";
import { PageName } from "./OfferBox";
import RenderComponent from "../offering_components/RenderComponent";

const Popup = ({ trigger, setTrigger }) => {
  const page = useContext(PageName);
  const innerPopupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        innerPopupRef.current &&
        !innerPopupRef.current.contains(event.target)
      ) {
        setTrigger(false); // Close popup if clicked outside of popup-inner
      }
    };
    if (trigger) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [trigger, setTrigger]);

  if (!trigger) return null;

  return (
    <div className="popup">
      <div className="popup-inner" ref={innerPopupRef}>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          &times;
        </button>
        <RenderComponent componentName={page} />
      </div>
    </div>
  );
};

export default Popup;
