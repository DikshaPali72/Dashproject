import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const Analytics = () => {
  const data = {
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#4f46e5", "#fbbf24", "#f87171"],
        hoverBackgroundColor: ["#4338ca", "#f59e0b", "#ef4444"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Analytics</h2>
      <div className="flex justify-center items-center">
        <div className="relative w-40 h-40 bottom-11">
          <div className="w-60 h-60">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex ml-24 mt-20 items-center justify-center">
              <span className="text-base text-center text-gray-400 font-normal">
                <span className="font-bold text-2xl text-black">80%</span>
                <br />
                Transactions
              </span>
            </div>
            <div className="flex justify-around mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Sale</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span>Distribute</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <span>Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
