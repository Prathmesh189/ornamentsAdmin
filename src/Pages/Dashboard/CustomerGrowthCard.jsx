import React from 'react';
import { FaUserPlus, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const CustomerGrowthCard = () => {
  // Example growth rate and new customers data; replace with dynamic data if available
  const growthRate = "15%";
  const newCustomers = 150;
  const isGrowthPositive = true; // For trend indication

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-xl relative">
      {/* Title and Icon */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Customer Growth</h3>
        <Link to="/customers"> {/* Replace '/customer-details' with the desired route */}
          <div className="p-2 rounded-full shadow-lg cursor-pointer">
            <FaUserPlus size={24} className="text-blue-500" />
          </div>
        </Link>
      </div>
      
      {/* Growth Rate */}
      <div className="mt-6 flex items-center space-x-2">
        <p className="text-4xl font-extrabold">{growthRate}</p>
        {isGrowthPositive && (
          <span className="text-green-500 flex items-center">
            <FaArrowUp className="mr-1" /> Improving
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-1">Monthly Growth Rate</p>
      
      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>
      
      {/* New Customers Count */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">{newCustomers}</p>
          <p className="text-sm text-gray-500">New Customers This Month</p>
        </div>
        <Link to="/customers"> {/* Add the Link for the View Details button */}
          <div className="text-sm bg-blue-500 text-white px-3 py-1 rounded-full shadow cursor-pointer">
            View Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CustomerGrowthCard;
