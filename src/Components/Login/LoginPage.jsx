// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = ({ onLogin }) => {
//     const [phoneNumber, setPhoneNumber] = useState('9011458212');
//     const [password, setPassword] = useState('Sports123');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();
//     const [animate, setAnimate] = useState(false);

//     // Function to validate phone number format
//     const validatePhoneNumber = (phone) => {
//         const phoneRegex = /^[6-9]\d{9}$/; // Valid Indian phone number format (10 digits, starts with 6-9)
//         return phoneRegex.test(phone);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);  // Show loading state
//         setErrorMessage('');  // Clear any previous error messages

//         if (!validatePhoneNumber(phoneNumber)) {
//             setErrorMessage('Please enter a valid phone number (10 digits, starts with 6-9).');
//             setLoading(false);
//             return;
//         }

//         // Simulating login success (replace with real API call in production)
//         setTimeout(() => {
//             localStorage.setItem('isAuthenticated', 'true');  // Store authentication status
//             onLogin(true);  // Trigger successful login
//             navigate('/dashboard');  // Redirect to dashboard
//             console.log('Login successful');
//             setLoading(false);  // Hide loading state
//         }, 1000);  // Simulated delay
//     };

//     useEffect(() => {
//         // Trigger animation when component mounts (optional)
//         setAnimate(true);
//     }, []);

//     return (
//         <div className="flex items-center ml-[25%] min-h-screen bg-gray-50">
//             <div className="w-full max-w-lg p-5 bg-white border-4   border-[#031926]  rounded-lg shadow-xl lg:w-1/2 justify-center items-center">
//                 <h2 className="text-center mb-5 text-2xl font-bold uppercase"><span className='text-[#031926] mr-3'>manasvi</span>sports</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="phoneNumber" className="block mb-2 font-bold">Phone Number:</label>
//                         <input
//                             type="text"
//                             id="phoneNumber"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block mb-2 font-bold">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
//                         />
//                     </div>

//                     {/* Error Message */}
//                     {errorMessage && (
//                         <div className="text-red-600 mb-4 text-center">
//                             {errorMessage}
//                         </div>
//                     )}

//                     <div className="flex justify-center">
//                         <button
//                             type="submit"
//                             className={`p-3 bg-red-600 text-white rounded-md focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                             disabled={loading}  // Disable button while loading
//                         >
//                             {loading ? 'Logging in...' : 'Login'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
    const [phoneNumber, setPhoneNumber] = useState('9011458212');
    const [password, setPassword] = useState('Ornamnets123');
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
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-lg p-6 bg-white border-4 border-[#031926] rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105">
                <h2 className="text-center mb-6 text-3xl font-bold text-pink-600 uppercase">
                    Ornaments
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="phoneNumber" className="block mb-2 text-lg font-medium text-gray-700">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 transition-all ease-in-out"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 transition-all ease-in-out"
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="text-red-600 mb-4 text-center text-lg font-medium animate__animated animate__fadeIn">
                            {errorMessage}
                        </div>
                    )}

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className={`w-1/3 p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-bold rounded-lg shadow-md focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-pink-300 ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={loading} // Disable button while loading
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
