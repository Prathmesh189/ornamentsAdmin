// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import customerData from './CustomerData';
// import Pagination from '../../Components/Pagination';
// import { FaUsers, FaUserTimes } from 'react-icons/fa';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState(customerData);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [statusFilter, setStatusFilter] = useState("All");

//   const filteredCustomers = customers.filter(customer => {
//     if (statusFilter === "Active") return customer.status === 'Active';
//     if (statusFilter === "Inactive") return customer.status === 'Inactive';
//     return true;
//   }).filter(customer =>
//     customer.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalCount = customers.length;
//   const activeCount = customers.filter(customer => customer.status === 'Active').length;
//   const inactiveCount = customers.filter(customer => customer.status === 'Inactive').length;

//   const handleDelete = (id) => {
//     setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const paginate = (pageNumber) => setPage(pageNumber);

//   const indexOfLastCustomer = page * itemsPerPage;
//   const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
//   const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Summary Cards */}
//       <div className="flex justify-between mb-4 space-x-4 w-full">
//         <div 
//           onClick={() => setStatusFilter("All")}
//           className="bg-white text-black p-4 rounded-lg shadow-md w-1/4 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
//         >
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <FaUsers size={30} className="text-blue-500" />
//             <h3 className="text-lg">Total Customers</h3>
//           </div>
//           <p className="text-2xl font-bold">{totalCount}</p>
//         </div>

//         <div 
//           onClick={() => setStatusFilter("Active")}
//           className="bg-white text-black p-4 rounded-lg shadow-md w-1/4 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
//         >
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <FaUsers size={30} className="text-green-500" />
//             <h3 className="text-lg">Active Customers</h3>
//           </div>
//           <p className="text-2xl font-bold">{activeCount}</p>
//         </div>

//         <div 
//           onClick={() => setStatusFilter("Inactive")}
//           className="bg-white text-black p-4 rounded-lg shadow-md w-1/4 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
//         >
//           <div className="flex items-center justify-center space-x-2 mb-2">
//             <FaUserTimes size={30} className="text-red-500" />
//             <h3 className="text-lg">Inactive Customers</h3>
//           </div>
//           <p className="text-2xl font-bold">{inactiveCount}</p>
//         </div>
//       </div>
//       <br />

//       {/* Search Input */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={handleSearch}
//           className="border p-2 rounded w-full sm:w-1/2"
//         />
//       </div>

//       {/* No Customers Found Message */}
//       {filteredCustomers.length === 0 && searchTerm && (
//         <div className="text-left text-xl text-red-500">
//           <p>Customer Not Found</p>
//         </div>
//       )}

//       {/* Customers Table */}
//       {filteredCustomers.length > 0 && (
//         <div className="overflow-x-auto w-full">
//           <table className="min-w-full table-auto border-collapse border bg-white shadow-lg rounded-xl">
//             <thead>
//               <tr>
//                 <th className="border p-3 text-left">No</th>
//                 <th className="border p-3 text-left">Name</th>
//                 <th className="border p-3 text-left">Email</th>
//                 <th className="border p-3 text-left">Address</th>
//                 <th className="border p-3 text-left">Phone</th>
//                 <th className="border p-3 text-left">Status</th>
//                 <th className="border p-3 text-left">View</th>
//                 <th className="border p-3 text-left">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentCustomers.map((customer, index) => (
//                 <tr key={customer.id} className="hover:bg-gray-50">
//                   <td className="border p-3">{indexOfFirstCustomer + index + 1}</td>
//                   <td className="border p-3">{customer.name}</td>
//                   <td className="border p-3">{customer.email}</td>
//                   <td className="border p-3">{customer.address}</td>
//                   <td className="border p-3">{customer.phone}</td>
//                   <td className="border p-3">
//                     <span className="px-2 py-1">{customer.status}</span>
//                   </td>
//                   <td className="border p-3">
//                     <Link
//                       to={`/customer/${customer.id}`}
//                       className="text-blue-500 hover:text-blue-700 font-semibold"
//                     >
//                       View
//                     </Link>
//                   </td>
//                   <td className="border p-3">
//                     <button
//                       className="text-red-500 hover:text-red-700 font-semibold"
//                       onClick={() => handleDelete(customer.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       <br />
//       {/* Pagination */}
//       <Pagination
//         page={page}
//         itemsPerPage={itemsPerPage}
//         paginate={paginate}
//         filteredOrders={filteredCustomers}
//       />
//     </div>
//   );
// };

// export default CustomerList;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import customerData from './CustomerData';
import Pagination from '../../Components/Pagination';
import { FaUsers, FaUserTimes } from 'react-icons/fa';
import StatCard from '../../Components/StatCrad';

const CustomerList = () => {
  const [customers, setCustomers] = useState(customerData);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    if (statusFilter === "Active") return customer.status === "Active";
    if (statusFilter === "Inactive") return customer.status === "Inactive";
    return true;
  }).filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCount = customers.length;
  const activeCount = customers.filter((customer) => customer.status === "Active").length;
  const inactiveCount = customers.filter((customer) => customer.status === "Inactive").length;

  const handleDelete = (id) => {
    setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const paginate = (pageNumber) => setPage(pageNumber);

  const indexOfLastCustomer = page * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  return (
    <div className="container mx-auto p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          name="Total Customers"
          icon={FaUsers}
          value={totalCount}
          color="blue"
          onClick={() => setStatusFilter("All")}
        />
        <StatCard
          name="Active Customers"
          icon={FaUsers}
          value={activeCount}
          color="green"
          onClick={() => setStatusFilter("Active")}
        />
        <StatCard
          name="Inactive Customers"
          icon={FaUserTimes}
          value={inactiveCount}
          color="red"
          onClick={() => setStatusFilter("Inactive")}
        />
      </div>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full sm:w-1/2"
        />
      </div>

      {/* No Customers Found Message */}
      {filteredCustomers.length === 0 && searchTerm && (
        <div className="text-left text-xl text-red-500">
          <p>No customers found</p>
        </div>
      )}

      {/* Customers Table */}
      {filteredCustomers.length > 0 && (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border-collapse border bg-white shadow-lg rounded-xl">
            <thead>
              <tr>
                <th className="border p-3 text-left">No</th>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Address</th>
                <th className="border p-3 text-left">Phone</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">View</th>
                <th className="border p-3 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer, index) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="border p-3">{indexOfFirstCustomer + index + 1}</td>
                  <td className="border p-3">{customer.name}</td>
                  <td className="border p-3">{customer.email}</td>
                  <td className="border p-3">{customer.address}</td>
                  <td className="border p-3">{customer.phone}</td>
                  <td className="border p-3">
                    <span className="px-2 py-1">{customer.status}</span>
                  </td>
                  <td className="border p-3">
                    <Link
                      to={`/customer/${customer.id}`}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      View
                    </Link>
                  </td>
                  <td className="border p-3">
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold"
                      onClick={() => handleDelete(customer.id)}
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
      {/* Pagination */}
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        filteredOrders={filteredCustomers}
      />
    </div>
  );
};

export default CustomerList;
