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
          {/* Dashboard Card */}
          <DashboardCard />
           
          {/* Performance Chart */}
          <PerformanceChart />
          <CustomerGrowthCard />
        </div>

        {/* Right Section: Sales */}
        <div className="flex-1"> {/* Right section remains flex-1 */}
          <Sales />
          <br />
          <TrendingProducts />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
