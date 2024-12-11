// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; 
// import StatCard from '../../Components/StatCrad';
// import { FaCheckCircle, FaTimesCircle, FaRegClock } from 'react-icons/fa';
// import Pagination from '../../Components/Pagination';
// import mockData from './mockData';  // Import the mock data

// function Orders() {
//   const [orders] = useState(mockData);  // Use mock data from the imported file
//   const [filteredOrders, setFilteredOrders] = useState(mockData);
//   const [page, setPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [filter, setFilter] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     let updatedOrders = orders;
//     if (filter !== 'All') {
//       updatedOrders = updatedOrders.filter(order => order.status === filter);
//     }
//     if (searchTerm) {
//       updatedOrders = updatedOrders.filter(order =>
//         order.id.toString().includes(searchTerm) ||
//         order.date.includes(searchTerm) ||
//         order.address.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setFilteredOrders(updatedOrders);
//     setPage(1);
//   }, [filter, searchTerm, orders]);

//   const paginate = (pageNumber) => setPage(pageNumber);

//   const indexOfLastOrder = page * itemsPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         <StatCard name="Total Orders" icon={FaRegClock} value={orders.length} color="blue" />
//         <StatCard name="Pending Orders" icon={FaRegClock} value={orders.filter(order => order.status === 'Pending').length} color="orange" />
//         <StatCard name="Completed Orders" icon={FaCheckCircle} value={orders.filter(order => order.status === 'Completed').length} color="green" />
//         <StatCard name="Cancelled Orders" icon={FaTimesCircle} value={orders.filter(order => order.status === 'Cancelled').length} color="red" />
//       </div>

//       {/* Search and Filter */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-4">
//         <select
//           onChange={(e) => setFilter(e.target.value)}
//           className="border p-2 rounded"
//           value={filter}
//         >
//           <option value="All">All Orders</option>
//           <option value="Pending">Pending</option>
//           <option value="Completed">Completed</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Search by Order ID, Date, or Address"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 rounded w-full sm:w-1/2"
//         />
//       </div>

//       {/* Orders Table */}
//       <table className="table-auto w-full border-collapse border bg-white shadow-lg rounded-xl">
//         <thead>
//           <tr>
//             <th className="border p-2">No</th>
//             <th className="border p-2">Order ID</th>
//             <th className="border p-2">Product Name</th>
//             <th className="border p-2">Address</th>
//             <th className="border p-2">Date</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentOrders.map((order, index) => (
//             <tr key={order.id}>
//               <td className="border p-2">{indexOfFirstOrder + index + 1}</td>
//               <td className="border p-2">{order.id}</td>
//               <td className="border p-2">{order.productName}</td>
//               <td className="border p-2">{order.address}</td>
//               <td className="border p-2">{order.date}</td>
//               <td className="border p-2">${order.price}</td>
//               <td className="border p-2">{order.status}</td>
//               <td className="border p-2">
//                 <Link to={`/view-order/${order.id}`} className="text-blue-500 hover:underline">
//                   View
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <Pagination
//         page={page}
//         itemsPerPage={itemsPerPage}
//         paginate={paginate}
//         filteredOrders={filteredOrders}
//       />
//     </div>
//   );
// }

// export default Orders;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../../Components/StatCrad';
import { FaCheckCircle, FaTimesCircle, FaRegClock } from 'react-icons/fa';
import Pagination from '../../Components/Pagination';
import mockData from './mockData';  // Import the mock data

function Orders() {
  const [orders] = useState(mockData);  // Use mock data from the imported file
  const [filteredOrders, setFilteredOrders] = useState(mockData);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let updatedOrders = orders;
    if (filter !== 'All') {
      updatedOrders = updatedOrders.filter(order => order.status === filter);
    }
    if (searchTerm) {
      updatedOrders = updatedOrders.filter(order =>
        order.id.toString().includes(searchTerm) ||
        order.date.includes(searchTerm) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredOrders(updatedOrders);
    setPage(1);
  }, [filter, searchTerm, orders]);

  const paginate = (pageNumber) => setPage(pageNumber);

  const indexOfLastOrder = page * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="container mx-auto p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          name="Total Orders"
          icon={FaRegClock}
          value={orders.length}
          color="blue"
          onClick={() => setFilter("All")}
        />
        <StatCard
          name="Pending Orders"
          icon={FaRegClock}
          value={orders.filter(order => order.status === 'Pending').length}
          color="orange"
          onClick={() => setFilter("Pending")}
        />
        <StatCard
          name="Completed Orders"
          icon={FaCheckCircle}
          value={orders.filter(order => order.status === 'Completed').length}
          color="green"
          onClick={() => setFilter("Completed")}
        />
        <StatCard
          name="Cancelled Orders"
          icon={FaTimesCircle}
          value={orders.filter(order => order.status === 'Cancelled').length}
          color="red"
          onClick={() => setFilter("Cancelled")}
        />
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
          value={filter}
        >
          <option value="All">All Orders</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="text"
          placeholder="Search by Order ID, Date, or Address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
      </div>

      {/* Orders Table */}
      <table className="table-auto w-full border-collapse border bg-white shadow-lg rounded-xl">
        <thead>
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={order.id}>
              <td className="border p-2">{indexOfFirstOrder + index + 1}</td>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.productName}</td>
              <td className="border p-2">{order.address}</td>
              <td className="border p-2">{order.date}</td>
              <td className="border p-2">${order.price}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <Link to={`/view-order/${order.id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        filteredOrders={filteredOrders}
      />
    </div>
  );
}

export default Orders;
