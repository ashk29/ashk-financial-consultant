import React, { useState, useEffect } from "react";
import { CalculateTotalReturn } from "./CalculatorFuctions";
import SipLineChart from "./SipLineChart";
import "./SipCalculator.css";
import { CalculateTotalInvestment } from "./CalculatorFuctions";

export default function SipCalculator() {
  // Step 1: Create a state variable to manage input value
  const [sipAmount, setSipAmount] = useState(2000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [investmentPeriod, setinvestmentPeriod] = useState(30);
  const [chartData, setChartData] = useState();
  const [yearLables, setYearLables] = useState();
  const [investedAmounts, setInvestedAmounts] = useState();

  var perYearReturns;
  var totalInvestment;
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
    var totalReturns = Math.round(perYearReturns[perYearReturns.length - 1]);
    totalInvestment = sipAmount * 12 * investmentPeriod;
    labels = Array.from({ length: investmentPeriod }, (_, index) => 1 + index);
    setInvestedAmounts(CalculateTotalInvestment(sipAmount, investmentPeriod));
    setChartData(perYearReturns);
    setYearLables(labels);
    console.log("investedAmounts" + investedAmounts);
  };

  return (
    <div className="sip-calculator-container">
      <h2 className="page-heading"> SIP Calculator</h2>
      <div className="sip-chart">
        {/* <SipLineChart dataValues={chartData} labels={yearLables}/> */}
        {chartData && (
          <SipLineChart
            perYrReturn={chartData}
            labels={yearLables}
            investedAmounts={investedAmounts}
          />
        )}
      </div>
      <div className="calc-param-container">
        <input
          type="number"
          value={sipAmount}
          onChange={handleSipAmount}
        ></input>
        <span>₹</span>
        <input
          type="number"
          value={rateOfReturn}
          onChange={handleRateOfReturn}
        ></input>
        <span>%</span>
        <input
          type="number"
          value={investmentPeriod}
          onChange={handleInvestmentPeriod}
        ></input>
        <span>years</span>
        <button className="question-btn" onClick={handleSubmit}>
          Calculate
        </button>
        <h5>{totalInvestment}</h5>
      </div>
    </div>
  );
}
