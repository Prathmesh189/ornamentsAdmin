import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';
import Home from './App';
import PageNotFound from './pages/PageNotFound';

function AuthRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  // Handle login logic
  const handleLogin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);
  };

  // Handle logout logic
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Check authentication status on component mount
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

      {/* Dashboard Route (protected) */}
      <Route
        path="/LoginPage"
        element={
          isAuthenticated ? (
            <Home onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Redirect any unknown route to the login page */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Handle 404 Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AuthRoutes;
