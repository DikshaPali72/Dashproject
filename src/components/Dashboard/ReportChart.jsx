import React from 'react';
import { Line } from 'react-chartjs-2';

const ReportChart = () => {
  const data = {
    labels: ['10am', '11am', '12am', '01am', '02am', '03am', '04am', '05am', '06am', '07am'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 50, 40, 60, 35, 45, 70, 50, 60, 80],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white h-72 rounded-lg shadow">
      <h2 className="text-xl  font-bold  m-4  ">Reports</h2>
     <div className='h-56 ml-16'> <Line className='ml-10 ' data={data} options={options} /></div>
    </div>
  );
};

export default ReportChart;
