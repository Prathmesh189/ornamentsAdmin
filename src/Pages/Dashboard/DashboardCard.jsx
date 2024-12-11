import React from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaShoppingCart, FaUsers, FaCog, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DashboardCard() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white shadow rounded-lg max-h-screen overflow-y-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Products Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/products">
            <div className="flex items-center mb-4">
              <FaBox size={30} className="text-blue-800 mr-3" />
              <h2 className="text-xl font-semibold text-black">Products</h2>
            </div>
            <p className="mt-2 text-black">Manage inventory and details</p>
          </Link>
        </motion.div>

        {/* Orders Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/orders">
            <div className="flex items-center mb-4">
              <FaShoppingCart size={30} className="text-green-800 mr-3" />
              <h2 className="text-xl font-semibold text-black">Orders</h2>
            </div>
            <p className="mt-2 text-black">View and track customer orders</p>
          </Link>
        </motion.div>

        {/* Customers Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/customers">
            <div className="flex items-center mb-4">
              <FaUsers size={30} className="text-yellow-800 mr-3" />
              <h2 className="text-xl font-semibold text-black">Customers</h2>
            </div>
            <p className="mt-2 text-black">Manage and view customer details</p>
          </Link>
        </motion.div>

        {/* Settings Card 
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/settings">
            <div className="flex items-center mb-4">
              <FaCog size={30} className="text-red-800 mr-3" />
              <h2 className="text-xl font-semibold text-black">Settings</h2>
            </div>
            <p className="mt-2 text-black">Configure your preferences</p>
          </Link>
        </motion.div>*/}

        {/* Transaction Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/transaction">
            <div className="flex items-center mb-4">
              <FaCreditCard size={30} className="text-purple-800 mr-3" />
              <h2 className="text-xl font-semibold text-black">Transaction</h2>
            </div>
            <p className="mt-2 text-black">Manage and view transactions</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default DashboardCard;
