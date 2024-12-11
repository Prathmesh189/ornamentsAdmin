import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from './mockData.jsx';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaRegClock } from 'react-icons/fa';

function ViewOrder() {
  const { orderId } = useParams();
  const order = mockData.find(o => o.id === parseInt(orderId));

  // Stepper states
  const steps = ['Order Placed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
  const [currentStep, setCurrentStep] = useState(order ? steps.indexOf(order.status) : 0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!order) {
    return <div className="text-center text-xl font-semibold text-red-500">Order not found</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Order Details</h2>

        <div className="space-y-4">
          {/* Order Info */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Order ID:</strong> {order.id}</p>
            <p className="font-medium text-gray-600"><strong>Date:</strong> {order.date}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Product Name:</strong> {order.productName}</p>
            <p className="font-medium text-gray-600"><strong>Price:</strong> ${order.price}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-600"><strong>Status:</strong>
              {steps[currentStep] === 'Delivered' ? 
                <span className="text-green-500"> {steps[currentStep]}</span> : 
                <span className="text-yellow-500"> {steps[currentStep]}</span>}
            </p>
          </div>

          {/* Stepper for Order Status */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Order Progress</h3>
            <div className="flex items-center justify-between space-x-2">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                        index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      {index <= currentStep ? <FaCheckCircle /> : <FaRegClock />}
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        index <= currentStep ? 'text-blue-500' : 'text-gray-500'
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={handlePreviousStep}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition disabled:bg-gray-300"
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                onClick={handleNextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300"
                disabled={currentStep === steps.length - 1}
              >
                Next
              </button>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Information</h3>
            <p className="font-medium text-gray-600"><strong>Name:</strong> {order.customerName}</p>
            <p className="font-medium text-gray-600"><strong>Phone:</strong> {order.customerPhone}</p>
            <p className="font-medium text-gray-600"><strong>Address:</strong> {order.address}</p>
          </div>

          {/* Payment & Shipping Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Payment & Shipping</h3>
            <p className="font-medium text-gray-600"><strong>Payment Method:</strong> {order.paymentMethod}</p>
            <p className="font-medium text-gray-600"><strong>Shipping Method:</strong> {order.shippingMethod}</p>
          </div>
        </div>

        {/* <div className="mt-6 text-center">
          <a href="/orders" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">Back to Orders</a>
        </div> */}
        <div className="mt-6 text-center">
          <Link to="/orders" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Back to Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
