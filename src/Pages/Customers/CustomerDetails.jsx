import React from 'react';
import { useParams, Link } from 'react-router-dom';
import customerData from './CustomerData';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const customer = customerData.find((c) => c.id === parseInt(customerId));

  if (!customer) {
    return null;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Customers Profile</h2>

        <div className="space-y-4">
          {/* Display customer image and name */}
          <div className="flex flex-col items-center mb-4">
            <img
              src={customer.image}
              alt={`${customer.name}'s profile`}
              className="w-24 h-24 rounded-full shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">{customer.name}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Email:</strong> {customer.email}</p>
            <p className="font-medium text-gray-600"><strong>Phone:</strong> {customer.phone}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Address:</strong> {customer.address}</p>
            <p className="font-medium text-gray-600"><strong>Status:</strong> {customer.status}</p>
          </div>

          {/* Display customer gender */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Gender:</strong> {customer.gender}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/customers" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Back to Customer List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
