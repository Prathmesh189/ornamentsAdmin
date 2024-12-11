import { motion } from "framer-motion";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import Pagination from '../Components/Pagination';
import { ArrowRightLeft, CircleDollarSign } from "lucide-react";
import StatCard from '../Components/StatCrad';

const TransactionHistory = () => {
  const [transactions] = useState([
    // Array of transactions...
    {
        userId: '12345',
        transactionType: 'Deposit',
        amount: 150.00,
        message: 'Payment received',
        createdAt: '2024-12-01T10:00:00Z',
      },
      {
        userId: '67890',
        transactionType: 'Withdrawal',
        amount: 50.00,
        message: 'Payment sent',
        createdAt: '2024-12-02T12:30:00Z',
      },
      {
        userId: '11223',
        transactionType: 'Deposit',
        amount: 200.00,
        message: 'Payment received',
        createdAt: '2024-12-05T15:00:00Z',
      },
      {
        userId: '33445',
        transactionType: 'Deposit',
        amount: 500.00,
        message: 'Payment received',
        createdAt: '2024-12-06T09:00:00Z',
      },
      {
        userId: '55667',
        transactionType: 'Withdrawal',
        amount: 300.00,
        message: 'Payment sent',
        createdAt: '2024-12-07T14:20:00Z',
      },
      {
        userId: '88990',
        transactionType: 'Deposit',
        amount: 100.00,
        message: 'Payment received',
        createdAt: '2024-12-08T11:15:00Z',
      },
      {
        userId: '10234',
        transactionType: 'Withdrawal',
        amount: 150.00,
        message: 'Payment sent',
        createdAt: '2024-12-09T13:30:00Z',
      },
      {
        userId: '56789',
        transactionType: 'Deposit',
        amount: 250.00,
        message: 'Payment received',
        createdAt: '2024-12-10T16:00:00Z',
      },
      {
        userId: '13456',
        transactionType: 'Withdrawal',
        amount: 200.00,
        message: 'Payment sent',
        createdAt: '2024-12-11T18:45:00Z',
      },
      {
        userId: '78901',
        transactionType: 'Deposit',
        amount: 300.00,
        message: 'Payment received',
        createdAt: '2024-12-12T10:00:00Z',
      },
      {
        userId: '12347',
        transactionType: 'Withdrawal',
        amount: 450.00,
        message: 'Payment sent',
        createdAt: '2024-12-13T14:30:00Z',
      },
      {
        userId: '34568',
        transactionType: 'Deposit',
        amount: 550.00,
        message: 'Payment received',
        createdAt: '2024-12-14T15:45:00Z',
      },
      {
        userId: '56789',
        transactionType: 'Withdrawal',
        amount: 120.00,
        message: 'Payment sent',
        createdAt: '2024-12-15T16:30:00Z',
      },
      {
        userId: '89012',
        transactionType: 'Deposit',
        amount: 350.00,
        message: 'Payment received',
        createdAt: '2024-12-16T09:45:00Z',
      },
      {
        userId: '12349',
        transactionType: 'Withdrawal',
        amount: 500.00,
        message: 'Payment sent',
        createdAt: '2024-12-17T11:00:00Z',
      },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  // Handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  // Handle pagination
  
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

//   const formatDateTime = (isoString) => {
//     const date = new Date(isoString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }) + " " + date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }) + " " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  return (
    <motion.div
      className="bg-white bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border-r border-red-400 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* StatCard Section */}
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          name="Total Transactions"
          icon={ArrowRightLeft}
          value={transactions.length} // Total transactions
          color="#6366F1"
        />
        <StatCard
          name="Total Amount"
          icon={CircleDollarSign}
          value={(transactions.reduce((sum, transaction) => sum + transaction.amount, 0)).toFixed(2)} // Total amount
          color="#10B981"
        />
      </motion.div>

      

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black mb-4 md:mb-0">
          Transactions
        </h2>
      </div>

      {/* Table Section */}
      {isLoading ? (
        <div className="border border-gray-300">
          <ShimmerTable row={10} col={7} />
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-black flex flex-col justify-center items-center">
          <img src={usernotfound} alt="" className="w-80 h-80" />
          <h1 className="text-lg font-semibold text-gray-600">No transactions found..!</h1>
        </div>
      ) : (
        <div className="TransactionRequestData">
          <motion.div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th onClick={() => handleSort("userId")} className="py-3 px-6 text-left cursor-pointer">
                    <span className="flex">User ID<ArrowDownUpIcon className="pl-2" /></span>
                  </th>
                  <th onClick={() => handleSort("transactionType")} className="py-3 px-6 text-left cursor-pointer">
                    <span className="flex">Transaction Type<ArrowDownUpIcon className="pl-2" /></span>
                  </th>
                  <th onClick={() => handleSort("amount")} className="py-3 px-6 text-left cursor-pointer">
                    <span className="flex">Amount<ArrowDownUpIcon className="pl-2" /></span>
                  </th>
                  <th onClick={() => handleSort("message")} className="py-3 px-6 text-left cursor-pointer">
                    <span className="flex">Message<ArrowDownUpIcon className="pl-2" /></span>
                  </th>
                  <th onClick={() => handleSort("createdAt")} className="py-3 px-6 text-left cursor-pointer">
                    <span className="flex">Date & Time<ArrowDownUpIcon className="pl-2" /></span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((transaction, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{transaction.userId || "N/A"}</td>
                    <td className="py-3 px-6 text-left">{transaction.transactionType || "N/A"}</td>
                    <td className="py-3 px-6 text-left">{transaction.amount.toFixed(2) || "N/A"}</td>
                    <td className="py-3 px-6 text-left">{transaction.message || "N/A"}</td>
                    <td className="py-3 px-6 text-left">{new Date(transaction.createdAt).toLocaleString()}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Pagination
          <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={totalPages}
            paginate={paginate}
          /></div> */}
          
          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="border p-2 rounded disabled:opacity-50">Previous</button>
            {[...Array(totalPages).keys()].map((page) => (
              <button key={page} onClick={() => paginate(page + 1)} className={`px-4 py-2 mx-2 ${currentPage === page + 1 ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-md`}>
                {page + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="border p-2 rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TransactionHistory;
