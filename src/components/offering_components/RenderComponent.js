import React from "react";
import HealthInsurance from "./HealthInsurance";
import LifeInsurance from "./LifeInsurance";
import { Offerings } from "../OfferPage";
import DmatAccount from "./DmatAccount";
import MutualFund from "./MutualFund";
import InvestmentAdvice from "./InvestmentAdvice";
import RetirementPlanning from "./RetirementPlanning";
import BusinessInsurance from "./BusinessInsurance";

const RenderComponent = ({ componentName }) => {
  switch (componentName) {
    case Offerings.HEALTH_INSURANCE:
      return <HealthInsurance />;
    case Offerings.TERM_INSURANCE:
      return <LifeInsurance />;
    case Offerings.DMAT_ACCOUNT_OPENING:
      return <DmatAccount />;
    case Offerings.MUTUAL_FUNDS:
      return <MutualFund />;
    case Offerings.INVESTMENT_ADVICE:
      return <InvestmentAdvice />;
    case Offerings.RETIREMENT_PLANNING:
      return <RetirementPlanning />;
    case Offerings.BUSINESS_INSURANCE:
      return <BusinessInsurance />;
    default:
      return NaN;
  }
};

export default RenderComponent;
