import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [phoneNumber, setPhoneNumber] = useState('9011458212');
    const [password, setPassword] = useState('Sports123');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    // Function to validate phone number format
    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[6-9]\d{9}$/; // Valid Indian phone number format (10 digits, starts with 6-9)
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);  // Show loading state
        setErrorMessage('');  // Clear any previous error messages

        if (!validatePhoneNumber(phoneNumber)) {
            setErrorMessage('Please enter a valid phone number (10 digits, starts with 6-9).');
            setLoading(false);
            return;
        }

        // Simulating login success (replace with real API call in production)
        setTimeout(() => {
            localStorage.setItem('isAuthenticated', 'true');  // Store authentication status
            onLogin(true);  // Trigger successful login
            navigate('/dashboard');  // Redirect to dashboard
            console.log('Login successful');
            setLoading(false);  // Hide loading state
        }, 1000);  // Simulated delay
    };

    useEffect(() => {
        // Trigger animation when component mounts (optional)
        setAnimate(true);
    }, []);

    return (
        <div className="flex items-center ml-[25%] min-h-screen bg-gray-50">
            <div className="w-full max-w-lg p-5 bg-white border-4   border-[#031926]  rounded-lg shadow-xl lg:w-1/2 justify-center items-center">
                <h2 className="text-center mb-5 text-2xl font-bold uppercase"><span className='text-[#031926] mr-3'>manasvi</span>sports</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block mb-2 font-bold">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-bold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="text-red-600 mb-4 text-center">
                            {errorMessage}
                        </div>
                    )}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`p-3 bg-red-600 text-white rounded-md focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}  // Disable button while loading
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
