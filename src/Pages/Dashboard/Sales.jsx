import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['United States', 'Saudi Arabia', 'Egypt'],
  datasets: [
    {
      label: 'Top Countries',
      data: [55, 25, 20],
      backgroundColor: ['#1D4ED8', '#10B981', '#F59E0B'],
      hoverBackgroundColor: ['#1E40AF', '#059669', '#D97706'],
      borderColor: '#ffffff',
      borderWidth: 1,
    },
  ],
};

function Sales() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sales Overview</h2>
      <div className="flex justify-center items-center w-full h-64">
        <Pie
          data={data}
          options={{
            responsive: true,
            animation: {
              animateScale: true,
              animateRotate: true,
              duration: 1000,
            },
            plugins: {
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                  weight: 'bold',
                  size: 12,
                  family: "'Roboto', sans-serif",
                },
                bodyFont: {
                  size: 10,
                  color: '#ffffff',
                  family: "'Roboto', sans-serif",
                },
              },
              legend: {
                position: 'top',
                labels: {
                  font: {
                    size: 10,
                    family: "'Roboto', sans-serif",
                  },
                  padding: 10, // Reduced padding between legend icons and chart
                  boxWidth: 12,
                },
              },
            },
            layout: {
              padding: { top: 10, bottom: 10, left: 10, right: 10 },
            },
            maintainAspectRatio: false, // Allow chart to take up defined height
          }}
        />
      </div>
    </div>
  );
}

export default Sales;
