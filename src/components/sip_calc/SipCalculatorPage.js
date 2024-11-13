import React, { useState, useEffect } from "react";
import {
  CalculateTotalReturn,
  CalculateTotalInvestment,
} from "./CalculatorFuctions";
import SipLineChart from "./SipLineChart";
import "./SipCalculator.css";
import SipPieChart from "./SipPieChart";

export default function SipCalculator() {
  // Step 1: Create a state variable to manage input value
  const [sipAmount, setSipAmount] = useState(2000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [investmentPeriod, setinvestmentPeriod] = useState(30);
  const [chartData, setChartData] = useState();
  const [yearLables, setYearLables] = useState();
  const [investedAmounts, setInvestedAmounts] = useState();
  const [totalReturn, setTotalReturn] = useState();
  const [totalInvestment, setTotalInvestment] = useState();

  var perYearReturns;
  var labels;

  // Step 2: Create an event handler to handle the value change
  const handleSipAmount = (event) => {
    setSipAmount(event.target.value);
  };
  const handleRateOfReturn = (event) => {
    setRateOfReturn(event.target.value);
  };
  const handleInvestmentPeriod = (event) => {
    setinvestmentPeriod(event.target.value);
  };

  // Step 3: Create an event handler to handle form submission or button click
  const handleSubmit = () => {
    setChartData([]);
    CalculateAllAmounts();
  };

  useEffect(() => {
    CalculateAllAmounts();
  }, []);

  const CalculateAllAmounts = () => {
    perYearReturns = CalculateTotalReturn(
      sipAmount,
      investmentPeriod,
      rateOfReturn
    );
    setTotalReturn(Math.round(perYearReturns[perYearReturns.length - 1]));
    setTotalInvestment(sipAmount * 12 * investmentPeriod);
    labels = Array.from({ length: investmentPeriod }, (_, index) => 1 + index);
    setInvestedAmounts(CalculateTotalInvestment(sipAmount, investmentPeriod));
    setChartData(perYearReturns);
    setYearLables(labels);
    console.log("investedAmounts" + investedAmounts);
  };

  return (
    <>
      <h2 className="page-heading"> SIP Calculator</h2>
      <div className="sip-calculator-container">
        <div className="calc-param-container">
          <span className="input">
            <input
              type="number"
              value={sipAmount}
              onChange={handleSipAmount}
              className="input-box"
            ></input>
            <div className="sign">₹</div>
          </span>
          <span className="input">
            <input
              type="number"
              value={rateOfReturn}
              onChange={handleRateOfReturn}
              className="input-box"
            ></input>
            <div className="sign">%</div>
          </span>
          <span className="input">
            <input
              type="number"
              value={investmentPeriod}
              onChange={handleInvestmentPeriod}
              className="input-box bg-color"
            ></input>
            <div className="sign">years</div>
          </span>
          <button className="question-btn" onClick={handleSubmit}>
            Calculate
          </button>
        </div>
        <div className="sip-chart-container">
        <div className="sip-chart">
          {chartData && (
            <SipLineChart
              perYrReturn={chartData}
              labels={yearLables}
              investedAmounts={investedAmounts}
            />
          )}
        </div>
        <div className="sip-pie">
          {totalReturn && (
            <SipPieChart
              totalReturn={totalReturn}
              totalInvestment={totalInvestment}
            />
          )}
          </div>
          </div>
      </div>
    </>
  );
}
