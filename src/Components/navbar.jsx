
import React, { useState } from 'react'; 
import { Menu, Search, Bell, ChevronDown, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Navbar = ({ toggleSidebar }) => {
  const [showSearchBar, setShowSearchBar] = useState(false); // State to control search bar visibility
  const navigate = useNavigate(); // Initialize navigate function for redirection

  const handleCardClick = () => {
    setShowSearchBar(true); // Show search bar when a card is clicked
  };

  // Function to handle redirection when "Admin User" arrow is clicked
  const handleAdminUserClick = () => {
    navigate('/admin-profile'); // Redirect to the Admin Profile page
  };

  return (
     <div className="bg-gray-100 shadow-md px-4 py-2 flex justify-between items-center text-gray-700">
  
      {/* Sidebar toggle button for small screens */}
      <button onClick={toggleSidebar} className="md:hidden text-gray-600 hover:bg-gray-300 p-2 rounded-lg">
        <Menu size={24} />
      </button>
      
      {/* Welcome message */}
      <h1 className="text-lg lg:text-xl text-black font-bold mb-2 lg:mb-0 hidden md:block">Ornaments Admin</h1>
      
      {/* Conditional Search bar for larger screens */}
      {showSearchBar && (
        <div className="flex-1 max-w-xl mx-4 relative hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search here"
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="sm:hidden p-2">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
      )}

      {/* Notification and User icons */}
      <div className="flex items-center gap-4">
        <button className="relative hover:bg-gray-300 p-2 rounded-lg transition duration-300 text-black">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2" onClick={handleAdminUserClick}>
          <User size={18} className="text-black hidden md:block" />
          <span className="hidden md:block text-black font-semibold">Admin User</span>
          <ChevronDown size={16} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

