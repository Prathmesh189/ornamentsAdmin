import React from 'react';
import { useParams, Link } from 'react-router-dom';
import transactionData from './TransactionData';
//import mockProductData from './productsData';


const TransactionDetails = () => {
  const { transactionId } = useParams(); // Get the transactionId from the URL
  const transaction = transactionData.find(
    (t) => t.id === transactionId // Match the id correctly
  );

  if (!transaction) {
    return <div>Transaction not found!</div>; // Handle not found scenario
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Transactions Details</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Transaction ID:</strong> {transaction.id}</p>
            <p className="font-medium text-gray-600"><strong>Amount:</strong> ${transaction.amount}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Customer Name:</strong> {transaction.customerName}</p>
            <p className="font-medium text-gray-600"><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Status:</strong> {transaction.status}</p>
          </div>

          {/* Optional: List of items in the transaction*/}
          {transaction.items && transaction.items.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium text-gray-600">Items:</h3>
              <ul className="list-disc ml-6">
                {transaction.items.map((item, index) => (
                  <li key={index}>{item.name} - ${item.price}</li>
                ))}
              </ul>
            </div>
          )} 
 
        </div>

        <div className="mt-6 text-center">
          <Link to="/transaction" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Back to Transaction List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
