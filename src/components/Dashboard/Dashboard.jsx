// src/components/MainContent.js
import React from 'react';
import Header from './Header';
import Analytics from './Analytics';
import RecentOrders from './RecentOrders';
import TopSellingProducts from './TopSellingProducts';
import ReportChart from './ReportChart';
import { CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  return (
    <div className="p-2  flex-col w-svw  bg-gray-50">
      <Header />
      <div className="grid flex-col  md:grid-cols-2 gap-6 mt-2">
        <ReportChart />
        <Analytics />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
        <RecentOrders />
        <TopSellingProducts />
      </div>
    </div>
  );
};

export default Dashboard;
