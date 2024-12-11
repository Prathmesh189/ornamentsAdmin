import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import transactionData from './TransactionData'; // Assuming you have transaction data
import Pagination from '../../Components/Pagination';
import StatCard from '../../Components/StatCrad';
import { FaMoneyBillWave, FaDollarSign, FaExclamationTriangle } from 'react-icons/fa';

const TransactionList = () => {
  const [transactions, setTransactions] = useState(transactionData);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newStatus, setNewStatus] = useState("Success");

  // Filter transactions by status and search term
  const filteredTransactions = transactions.filter(transaction => {
    if (statusFilter === "Completed") return transaction.status === 'Success';
    if (statusFilter === "Pending") return transaction.status === 'Pending';
    if (statusFilter === "Failed") return transaction.status === 'Failed';
    return true;
  }).filter(transaction =>
    (transaction.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     transaction.customerName?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Transaction counts
  const totalCount = transactions.length;
  const completedCount = transactions.filter(transaction => transaction.status === 'Success').length;
  const pendingCount = transactions.filter(transaction => transaction.status === 'Pending').length;
  const failedCount = transactions.filter(transaction => transaction.status === 'Failed').length;

  // Handle transaction delete
  const handleDelete = (id) => {
    setTransactions((prevTransactions) => prevTransactions.filter((transaction) => transaction.id !== id));
  };

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle showing the status change form
  const handlePayNowClick = (transaction) => {
    setSelectedTransaction(transaction);
    setNewStatus(transaction.status); // Set the current status as default in the form
    setShowForm(true);
  };

  // Handle status change form submission
  const handleStatusChangeSubmit = () => {
    setTransactions(prevTransactions =>
      prevTransactions.map(transaction =>
        transaction.id === selectedTransaction.id ? { ...transaction, status: newStatus } : transaction
      )
    );
    setShowForm(false); // Hide the form after submission
  };

  // Pagination logic
  const paginate = (pageNumber) => setPage(pageNumber);

  const indexOfLastTransaction = page * itemsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <div className="container mx-auto p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          name="Total Transactions"
          icon={FaMoneyBillWave}
          value={totalCount}
          color="blue"
          onClick={() => setStatusFilter("All")}
        />
        <StatCard
          name="Completed Transactions"
          icon={FaDollarSign}
          value={completedCount}
          color="green"
          onClick={() => setStatusFilter("Completed")}
        />
        <StatCard
          name="Pending Transactions"
          icon={FaDollarSign}
          value={pendingCount}
          color="orange"
          onClick={() => setStatusFilter("Pending")}
        />
        <StatCard
          name="Failed Transactions"
          icon={FaExclamationTriangle}
          value={failedCount}
          color="red"
          onClick={() => setStatusFilter("Failed")}
        />
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by transaction ID or customer name"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full sm:w-1/2"
        />
      </div>

      {/* No Transactions Found Message */}
      {filteredTransactions.length === 0 && searchTerm && (
        <div className="text-left text-xl text-red-500">
          <p>Transaction Not Found</p>
        </div>
      )}

      {/* Transactions Table */}
      {filteredTransactions.length > 0 && (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse border bg-white shadow-lg rounded-xl">
            <thead>
              <tr>
                <th className="border p-3 text-left">No</th>
                <th className="border p-3 text-left">Transaction ID</th>
                <th className="border p-3 text-left">Customer Name</th>
                <th className="border p-3 text-left">Amount</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Action</th>
                <th className="border p-3 text-left">View</th>
                <th className="border p-3 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, index) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="border p-3">{indexOfFirstTransaction + index + 1}</td>
                  <td className="border p-3">{transaction.id}</td>
                  <td className="border p-3">{transaction.customerName}</td>
                  <td className="border p-3">{transaction.amount}</td>
                  <td className="border p-3">
                    <span className={`px-2 py-1 ${transaction.status === 'Success' ? 'bg-green-200' : transaction.status === 'Pending' ? 'bg-yellow-200' : 'bg-red-200'}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="border p-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                      onClick={() => handlePayNowClick(transaction)}
                    >
                      Pay Now
                    </button>
                  </td>
                  <td className="border p-3">
                    <Link
                      to={`/transaction/${transaction.id}`}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      View
                    </Link>
                  </td>
                  <td className="border p-3">
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <br />
      

      {/* Status Change Form */}
{showForm && selectedTransaction && (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
    <div className="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 className="text-xl mb-4">Change Transaction Status</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleStatusChangeSubmit(); }}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Transaction ID: {selectedTransaction.id}</label>
          <label className="block text-sm font-medium">Current Status: {selectedTransaction.status}</label>
        </div>

        {/* Status Change Buttons */}
        <div className="mb-4">
          <label className="block text-sm font-medium">New Status</label>
          <div className="flex space-x-4 mt-2">
            <button
              type="button"
              onClick={() => setNewStatus("Success")}
              className={`px-4 py-2 rounded w-full ${newStatus === 'Success' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Success
            </button>
            <button
              type="button"
              onClick={() => setNewStatus("Pending")}
              className={`px-4 py-2 rounded w-full ${newStatus === 'Pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            >
              Pending
            </button>
            <button
              type="button"
              onClick={() => setNewStatus("Failed")}
              className={`px-4 py-2 rounded w-full ${newStatus === 'Failed' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Failed
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Status
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Pagination */}
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        filteredOrders={filteredTransactions}
      />
    </div>
  );
};

export default TransactionList;
