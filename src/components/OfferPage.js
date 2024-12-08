import React from "react";
import "./OfferPage.css";
import OfferBox from "./child_components/OfferBox";
import "./child_components/ChildComponents.css";

export const Offerings = Object.freeze({
  
  TERM_INSURANCE: "Life Insurance",
  HEALTH_INSURANCE: "Health Insurance",
  BUSINESS_INSURANCE: "Business Insurance",
  RETIREMENT_PLANNING: "Retirement Planning",
  MUTUAL_FUNDS: "Mutual Funds",
  INVESTMENT_ADVICE: "Investment Advice",
  DMAT_ACCOUNT_OPENING: "Dmat Account Opening",
});

const offeringsText = Object.values(Offerings);

export default function OfferPage() {
  return (
    <>
      <hr />
      <h2 className="page-heading">What I Offer</h2>
      <div style={{marginBottom:"5rem"}}>
      <div className="offer-container">
          <OfferBox offerText={offeringsText[0]} />
        </div>
        <div className="offer-container">
          <OfferBox offerText={offeringsText[1]} />
          <OfferBox offerText={offeringsText[2]} />
        </div>
        <div className="offer-container">
          <OfferBox offerText={offeringsText[3]} />
        </div>
        <div className="offer-container">
          <OfferBox offerText={offeringsText[4]} />
          <OfferBox offerText={offeringsText[5]} />
        </div>
        <div className="offer-container">
          <OfferBox offerText={offeringsText[6]} />
        </div>
      </div>
    </>
  );
}
