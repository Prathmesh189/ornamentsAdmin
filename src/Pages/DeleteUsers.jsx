import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion
import { format } from "date-fns";
import StatCard from "../Components/StatCrad"; 
import { FaUsers } from "react-icons/fa";

// Dummy data
const dummyDeletedUsers = [
  { userId: 1, name: "John Doe", role: "Admin", phone: "+1234567890", deletedAt: "2024-12-01T12:00:00Z" },
  { userId: 2, name: "Jane Smith", role: "User", phone: "+0987654321", deletedAt: "2024-12-02T15:30:00Z" },
  { userId: 3, name: "Robert Brown", role: "Moderator", phone: "+1122334455", deletedAt: "2024-12-05T08:45:00Z" },
  { userId: 4, name: "Emily White", role: "User", phone: "+1222333444", deletedAt: "2024-12-08T10:20:00Z" },
  { userId: 5, name: "John Doe", role: "Admin", phone: "123-456-7890", deletedAt: new Date() },
  { userId: 6, name: "Jane Smith", role: "User", phone: "987-654-3210", deletedAt: new Date() },
];

const totalDummy = 4;
const totalPagesDummy = 2;

function DeleteUsers({ setPage, page }) {
  const [search, setSearch] = useState("");

  // Dummy data for deleted users
  const deletedUsers = dummyDeletedUsers;
  const total = totalDummy;
  const totalPages = totalPagesDummy;

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 bg-white">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Deleted Users"
            icon={FaUsers}
            value={(deletedUsers.filter(user =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.role.toLowerCase().includes(search.toLowerCase()) ||
              user.phone.includes(search)
            ).length ?? 0).toString()} // Show filtered user count
            color="#6366F1"
          />
        </motion.div>

        {/* Search */}
        <div className="flex mb-6 gap-4">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg w-full max-w-lg"
            placeholder="Search by name, role, or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Deleted Users Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-black shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Deleted At</th>
              </tr>
            </thead>
            <tbody>
              {deletedUsers
                .filter((user) =>
                  user.name.toLowerCase().includes(search.toLowerCase()) ||
                  user.role.toLowerCase().includes(search.toLowerCase()) ||
                  user.phone.includes(search)
                )
                .map((user) => (
                  <tr key={user.userId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2">{user.phone}</td>
                    <td className="px-4 py-2">
                      {format(new Date(user.deletedAt), "MM/dd/yyyy")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col justify-center items-center mt-4 space-y-2">
          <div className="flex space-x-2">
            <button
              onClick={() => setPage(page > 1 ? page - 1 : 1)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-md text-sm font-medium ${page === 1 ? "bg-transparent text-black cursor-not-allowed" : "bg-white text-black hover:bg-gray-600"}`}
            >
              Previous
            </button>

            {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
              const pageIndex = Math.max(1, page - 1) + index;
              return (
                pageIndex <= totalPages && (
                  <button
                    key={pageIndex}
                    onClick={() => setPage(pageIndex)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${page === pageIndex ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-gray-600"}`}
                  >
                    {pageIndex}
                  </button>
                )
              );
            })}

            <button
              onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-md text-sm font-medium ${page === totalPages ? "bg-transparent text-black cursor-not-allowed" : "bg-white text-black hover:bg-gray-600"}`}
            >
              Next
            </button>
          </div>
          <div className="text-sm font-medium text-gray-600">
            Page {page} of {totalPages}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeleteUsers;
