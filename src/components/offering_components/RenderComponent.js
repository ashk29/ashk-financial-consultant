import React from "react";
import HealthInsurance from "./HealthInsurance";
import LifeInsurance from "./LifeInsurance";
import { Offerings } from "../OfferPage";

const RenderComponent = ({ componentName }) => {
  switch (componentName) {
    case Offerings.HEALTH_INSURANCE:
      return <HealthInsurance />;
    case Offerings.TERM_INSURANCE:
      return <LifeInsurance />;
  }
};

export default RenderComponent;
