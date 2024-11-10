import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale, // Register CategoryScale for x-axis
  LinearScale, // Register LinearScale for y-axis
  PointElement, // Register PointElement for points in the chart
  LineElement, // Register LineElement for line in the chart
  Title, // Register Title component for chart title
  Tooltip, // Register Tooltip component
  Legend // Register Legend component
);

const SipLineChart = ({ perYrReturn, labels, investedAmounts }) => {
    // console.log('*&*&**&*&*&**&***&*&*&*&')
    // console.log(perYrReturn)
    // console.log(labels)
    // console.log(investedAmounts)
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Investment Value",
        data: perYrReturn,
        fill: false,
        borderColor: "#20cd8d",
        tension: 0.1,
        },
        {
            label: "Total Investment Amount",
            data: investedAmounts,
            fill: false,
            borderColor: "#0000FF",
            tension: 0.1,
          },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default SipLineChart;
