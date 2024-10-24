import React from "react";
import HealthInsurance from "./HealthInsurance";
import LifeInsurance from "./LifeInsurance";

const RenderComponent = ({ componentName }) => {
  switch (componentName) {
    case "health_insurance":
      return <HealthInsurance />;
    case "life_insurance":
      return <LifeInsurance />;
  }
};

export default RenderComponent;
