import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const PerformanceChart = () => {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Full data set with 12 months for demonstration
  const [fullData, setFullData] = useState([
    { name: 'Jan', orders: 400, revenue: 2400, customers: 200 },
    { name: 'Feb', orders: 300, revenue: 1398, customers: 150 },
    { name: 'Mar', orders: 200, revenue: 9800, customers: 300 },
    { name: 'Apr', orders: 278, revenue: 3908, customers: 240 },
    { name: 'May', orders: 189, revenue: 4800, customers: 180 },
    { name: 'Jun', orders: 239, revenue: 3800, customers: 210 },
    { name: 'Jul', orders: 349, revenue: 4300, customers: 220 },
    { name: 'Aug', orders: 200, revenue: 3800, customers: 210 },
    { name: 'Sep', orders: 300, revenue: 4700, customers: 250 },
    { name: 'Oct', orders: 278, revenue: 4000, customers: 230 },
    { name: 'Nov', orders: 189, revenue: 3700, customers: 190 },
    { name: 'Dec', orders: 239, revenue: 4500, customers: 260 }
  ]);

  const [startMonth, setStartMonth] = useState(0); // Track the starting index of the displayed range

  // Slice data to show only six months based on startMonth
  const displayedData = fullData.slice(startMonth, startMonth + 6);

  const handlePrevious = () => {
    setStartMonth((prevStart) => (prevStart > 0 ? prevStart - 1 : 0));
  };

  const handleNext = () => {
    setStartMonth((prevStart) =>
      prevStart + 6 < fullData.length ? prevStart + 1 : prevStart
    );
  };

  return (
    <div className="p-6 shadow-lg border rounded-lg bg-white ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Performance Overview</h2>
      
      {/* Navigation buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevious}
          disabled={startMonth === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous Month
        </button>
        <button
          onClick={handleNext}
          disabled={startMonth + 6 >= fullData.length}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next Month
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={displayedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{ backgroundColor: '#111827', borderColor: '#374151' }}
            labelStyle={{ color: '#d1d5db' }}
            itemStyle={{ color: '#f3f4f6' }}
          />
          <Legend iconType="circle" iconSize={10} />
          <Bar dataKey="orders" fill="#3b82f6" barSize={20}>
            {displayedData.map((entry, index) => (
              <Cell key={`orders-${index}`} fill={entry.orders > 300 ? '#3b82f6' : '#6b7280'} />
            ))}
          </Bar>
          <Bar dataKey="revenue" fill="#34d399" barSize={20}>
            {displayedData.map((entry, index) => (
              <Cell key={`revenue-${index}`} fill={entry.revenue > 3000 ? '#34d399' : '#6b7280'} />
            ))}
          </Bar>
          <Bar dataKey="customers" fill="#fbbf24" barSize={20}>
            {displayedData.map((entry, index) => (
              <Cell key={`customers-${index}`} fill={entry.customers > 200 ? '#fbbf24' : '#6b7280'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
