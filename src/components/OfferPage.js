import React, { useState } from "react";
import "./OfferPage.css";
import OfferBox from "./child_components/OfferBox";
import "./child_components/ChildComponents.css";
import Popup from "./child_components/Popup";

const offeringsText = [
  "Health Insurance",
  "Term Insurance",
  "Retirement Planning",
  "Mutual Funds",
  "Investment Advice",
  "Dmat Account Opening",
];

export default function OfferPage() {
  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading">What I Offer</h2>

      <div className="offer-container">
        <OfferBox className="offer-btn" offerText={offeringsText[0]} />
        <OfferBox className="offer-btn" offerText={offeringsText[1]} />
      </div>
      <div className="offer-container">
        <OfferBox className="offer-btn" offerText={offeringsText[2]} />
      </div>
      <div className="offer-container">
        <OfferBox className="offer-btn" offerText={offeringsText[3]} />
        <OfferBox className="offer-btn" offerText={offeringsText[4]} />
      </div>
      <div className="offer-container">
        <OfferBox className="offer-btn" offerText={offeringsText[5]} />
      </div>
    </>
  );
}
