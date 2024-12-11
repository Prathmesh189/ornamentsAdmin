import React from 'react';
import DashboardCard from './DashboardCard'; // Import DashboardCard
import PerformanceChart from './PerformanceChart'; // Import PerformanceChart
import TrendingProducts from './TrendingProducts';
import CustomerGrowthCard from './CustomerGrowthCard'; 
import Sales from './Sales'; // Import Sales

function Dashboard() {
  return (
    <div>
      <div className="flex gap-6">
        {/* Left Section: Performance Chart and Dashboard Cards */}
        <div className="flex-3 flex flex-col space-y-6"> {/* Increased the flex value to flex-3 */}
        <h1>Dashboard cards </h1>
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
