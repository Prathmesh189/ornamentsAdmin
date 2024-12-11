import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './index.css';

// Pages and Components
import Sidebar from "./Components/sidebar";
import Navbar from "./Components/navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from './Pages/Orders/orders';
import ViewOrder from './Pages/Orders/ViewOrder';
import Products from './Pages/Products/products';
// Forms
import AddTshirt from './Pages/Products/AddForms/AddTshirt';
import AddBat from './Pages/Products/AddForms/AddBat';
import AddBall from './Pages/Products/AddForms/AddBall';
import AddShoes from './Pages/Products/AddForms/AddShoes';
import AddTrackPant from './Pages/Products/AddForms/AddTrackPant';
import AddCaps from './Pages/Products/AddForms/AddCaps';

import ViewProduct from './Pages/Products/viewProduct';

import LoginPage from './Components/Login/LoginPage';
import Customers from './Pages/Customers/customers';
import CustomerDetails from './Pages/Customers/CustomerDetails';
import Transactions from './Pages/Transactions/transaction';
import TransactionDetails from './Pages/Transactions/TransactionDetails';
import AdminProfilePage from './Pages/Adminprofile/AdminProfilePage';
import Settings from './Pages/Settings/setting';
import Terms from './Pages/terms';
import Privacy from './Pages/privacy';
import Benefits from './Pages/benefits';
import DeleteUser from './Pages/DeleteUsers';
import TransactionHistory from './Pages/transactionhistory';




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
                 

                  <Route path="/orders" element={<Orders />} />
                  <Route path="/view-order/:orderId" element={<ViewOrder />} />
                  <Route path="/products" element={<Products />} />
                  {/* Forms Product */}
                  <Route path="/add-product/tshirt" element={<AddTshirt />} />
                  <Route path="/add-product/bat" element={<AddBat />} />
                  <Route path="/add-product/ball" element={<AddBall />} />
                  <Route path="/add-product/shoes" element={<AddShoes />} />
                  <Route path="/add-product/trackpants" element={<AddTrackPant />} />
                  <Route path="/add-product/cap" element={<AddCaps />} />
                  
                  <Route path="/view-product/:productId" element={<ViewProduct />} />
                  


                  <Route path="/customers" element={<Customers />} />
                  <Route path="/customer/:customerId" element={<CustomerDetails />} />
                  <Route path="/transaction" element={<Transactions />} />
                  <Route path="/transaction/:transactionId" element={<TransactionDetails />} />
                  <Route path="/transactionshistory" element={<TransactionHistory />} />
                  <Route path="/admin-profile" element={<AdminProfilePage />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path='privacy' element={<Privacy />} />
                  <Route path='benefits' element={<Benefits />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/deleteUser" element={<DeleteUser />} />
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
