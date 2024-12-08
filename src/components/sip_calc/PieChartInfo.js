import React from "react";
import "./SipCalculator.css";
import { FormatDigits } from "./CalculatorFuctions";

const PieChartInfo = ({ totalReturn, totalInvestment }) => {
  return (
    <>
      <div className="pie-chart-info">
        <span>
          Total Invested Amount
          <br />
          Total Wealth Gained
          <br />
          Total Amount
          <br />
        </span>
        <span>
          :<br />
          :<br />
          :<br />
        </span>
        <span>
          {FormatDigits(totalInvestment)}
          <br />
          {FormatDigits(totalReturn - totalInvestment)}
          <br />
          {FormatDigits(totalReturn)}
          <br />
        </span>
      </div>
    </>
  );
};

export default PieChartInfo;
