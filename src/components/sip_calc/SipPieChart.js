import React from "react";
import "./SipCalculator.css";
import { Pie } from "react-chartjs-2";
import { FormatDigits } from "./CalculatorFuctions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const SipPieChart = ({ totalReturn, totalInvestment }) => {
  const data = {
    labels: ["Wealth Gained ", "Total Investment"],
    datasets: [
      {
        // label: '# of Votes',
        data: [totalReturn - totalInvestment, totalInvestment],
        backgroundColor: ["#20cd8d", "#0000FF"],
        borderColor: ["#20cd8d", "#0000FF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <>
      <Pie data={data} options={options} />
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

export default SipPieChart;
