import React, { useState } from "react";
import { motion } from "framer-motion"; 
import { format } from "date-fns";
import StatCard from "../Components/StatCrad"; 
import { FaUsers } from "react-icons/fa";
import Pagination from '../Components/Pagination';

const dummyDeletedUsers = [
  { userId: 1, name: "John Doe", phone: "+1234567890", email: "john.doe@example.com", address: "123 Main St, Springfield", deletedAt: "2024-12-01T12:00:00Z" },
  { userId: 2, name: "Jane Smith", phone: "+0987654321", email: "jane.smith@example.com", address: "456 Elm St, Springfield", deletedAt: "2024-12-02T15:30:00Z" },
  { userId: 3, name: "Robert Brown", phone: "+1122334455", email: "robert.brown@example.com", address: "789 Oak St, Springfield", deletedAt: "2024-12-05T08:45:00Z" },
  { userId: 4, name: "Emily White", phone: "+1222333444", email: "emily.white@example.com", address: "101 Pine St, Springfield", deletedAt: "2024-12-08T10:20:00Z" },
  { userId: 5, name: "John Doe", phone: "123-456-7890", email: "john.doe@example.com", address: "123 Main St, Springfield", deletedAt: new Date() },
  { userId: 6, name: "Jane Smith", phone: "987-654-3210", email: "jane.smith@example.com", address: "456 Elm St, Springfield", deletedAt: new Date() },
  { userId: 7, name: "Alice Johnson", phone: "+1122334455", email: "alice.johnson@example.com", address: "123 Birch St, Springfield", deletedAt: "2024-12-09T09:00:00Z" },
  { userId: 8, name: "Bob White", phone: "+2233445566", email: "bob.white@example.com", address: "456 Cedar St, Springfield", deletedAt: "2024-12-10T14:30:00Z" },
  { userId: 9, name: "Charlie Brown", phone: "+3344556677", email: "charlie.brown@example.com", address: "789 Willow St, Springfield", deletedAt: "2024-12-11T16:00:00Z" },
  { userId: 10, name: "David Black", phone: "+4455667788", email: "david.black@example.com", address: "101 Maple St, Springfield", deletedAt: "2024-12-12T18:00:00Z" },
  { userId: 11, name: "Eva Green", phone: "+5566778899", email: "eva.green@example.com", address: "202 Birchwood St, Springfield", deletedAt: "2024-12-13T12:20:00Z" },
  { userId: 12, name: "Frank White", phone: "+6677889900", email: "frank.white@example.com", address: "303 Pinewood St, Springfield", deletedAt: "2024-12-14T17:10:00Z" },
  // Add more users if needed
];

const totalDummy = dummyDeletedUsers.length;
const totalPagesDummy = Math.ceil(totalDummy / 10); // 10 items per page

function DeleteUsers() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); // Initialize page state

  const itemsPerPage = 10; // Display 10 items per page
  const total = totalDummy;
  const totalPages = totalPagesDummy;

  const filteredDeletedUsers = dummyDeletedUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.includes(search) ||
    user.email.toLowerCase().includes(search) ||
    user.address.toLowerCase().includes(search) // Added address filter
  );

  const paginate = (pageNumber) => {
    setPage(pageNumber); // Update the page state
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 bg-white">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Deleted Users"
            icon={FaUsers}
            value={(filteredDeletedUsers.length ?? 0).toString()} 
            color="#6366F1"
          />
        </motion.div>

        <div className="flex mb-6 gap-4">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg w-full max-w-lg"
            placeholder="Search by name, phone, email, or address"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-black shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Address</th> {/* Added Address column */}
                <th className="px-4 py-2 text-left">Deleted At</th>
              </tr>
            </thead>
            <tbody>
              {filteredDeletedUsers
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .map((user) => (
                  <tr key={user.userId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.phone}</td>
                    <td className="px-4 py-2">{user.email}</td> {/* Added Email data */}
                    <td className="px-4 py-2">{user.address}</td> {/* Added Address data */}
                    <td className="px-4 py-2">
                      {format(new Date(user.deletedAt), "MM/dd/yyyy")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          page={page}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          filteredOrders={filteredDeletedUsers}
        />
      </main>
    </div>
  );
}

export default DeleteUsers;
