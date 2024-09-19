import React from "react";
import "./ChildComponents.css";

const OfferBox = ({ offerText }) => {
  return <button className="btn">{offerText}</button>;
};

export default OfferBox;
