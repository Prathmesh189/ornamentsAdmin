import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './index.css';

// Pages and Components
import Sidebar from "./Components/sidebar";
import Navbar from "./Components/navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";


import LoginPage from './Components/Login/LoginPage';

import AdminProfilePage from './Pages/Adminprofile/AdminProfilePage';





// import { Settings } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = (status) => {
    setIsAuthenticated(status); // Set authentication status after login
    localStorage.setItem('isAuthenticated', status); // Optionally persist login status
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication state to false
    localStorage.removeItem('isAuthenticated'); // Clear persisted login status
  };

  useEffect(() => {
    // Check local storage for authentication status on initial load
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
        {/* Sidebar Component - only show if authenticated */}
        {isAuthenticated && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onLogout={handleLogout} />}

        {/* Main Content Area */}
        <div className={`flex-grow transition-all duration-300 ${isOpen ? 'lg:ml-64' : 'lg:ml-16'} h-screen overflow-y-auto`}>
          {isAuthenticated && <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />}

          {/* Routes */}
          <main className="p-6">
            <Routes>
              {/* Redirect to dashboard if authenticated, otherwise to login */}
              <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
              
              {isAuthenticated ? (
                // Protected Routes
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                 



                 
                  <Route path="/admin-profile" element={<AdminProfilePage />} />
                 
                </>
              ) : (
                // Login Route if not authenticated
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              )}

              {/* Redirect any unknown route based on authentication status */}
              <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
