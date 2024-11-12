import React from 'react'
import "./SipCalculator.css"
import { Pie } from 'react-chartjs-2';
import { FormatDigits } from './CalculatorFuctions';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const SipPieChart=({totalReturn,totalInvestment})=>{
    const data = {
        labels: ['Wealth Gained ', 'Total Investment'],
        datasets: [
          {
            // label: '# of Votes',
            data: [totalReturn-totalInvestment,totalInvestment],
            backgroundColor: [
              '#20cd8d',
              '#0000FF'
            ],
            borderColor: [
              '#20cd8d',
              '#0000FF'
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      };
    
    return (<>
        <Pie data={data} options={options} />
        <div className="pie-chart-info">
            <p>Total Invested Amount : &emsp;{ FormatDigits(totalInvestment)}</p>
            <p>Total Wealth Gained : &emsp;&emsp;{ FormatDigits(totalReturn-totalInvestment)}</p>
            <p>Total Amount : &emsp;&emsp;&emsp;&emsp;&emsp;{ FormatDigits(totalReturn)}</p>
        </div>
    </>);
};

export default SipPieChart