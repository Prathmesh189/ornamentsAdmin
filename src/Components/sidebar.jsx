// import React, { useState } from 'react';
// import { LayoutDashboard, LogOut, Menu, X,    } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
//   const [activeItem, setActiveItem] = useState('/dashboard'); // Set default active item
//   const navigate = useNavigate(); // For navigation after logout

//   const menuItems = [
//     { icon: LayoutDashboard, text: 'Dashboard', path: '/dashboard' },
   
//   ];

//   const handleItemClick = (path) => {
//     setActiveItem(path); // Update active item
//   };

//   const handleLogout = () => {
//     if (onLogout) {
//       onLogout();
//     }
//     navigate('/login');
//   };

//   return (
//     <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out z-20 ${isOpen ? 'w-64' : 'w-16'}`}>
//       <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
//         <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>Ornaments Admin</h1>
//         <button onClick={toggleSidebar} className="text-gray-400 hover:text-gray-300 transition-colors">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//       <nav className="mt-4">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             onClick={() => handleItemClick(item.path)}
//             className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeItem === item.path ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-700'} ${!isOpen && 'justify-center'}`}
//           >
//             <item.icon size={20} />
//             <span className={`ml-4 ${!isOpen && 'hidden'}`}>{item.text}</span>
//           </Link>
//         ))}
//       </nav>
//       <div className={`absolute bottom-0 w-full px-4 py-3 border-t border-gray-700 ${!isOpen && 'hidden'}`}>
//         <button onClick={handleLogout} className="flex items-center text-red-400 hover:text-red-300 transition-colors">
//           <LogOut size={20} />
//           <span className="ml-4">Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings, LogOut, Menu, X, CreditCard, Shield, FileText, Award, History , Trash2   } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const [activeItem, setActiveItem] = useState('/dashboard'); // Set default active item
  const navigate = useNavigate(); // For navigation after logout

  const menuItems = [
    { icon: LayoutDashboard, text: 'Dashboard', path: '/dashboard' },
    { icon: ShoppingCart, text: 'Orders', path: '/orders' },
    { icon: Package, text: 'Products', path: '/products' },
    { icon: Users, text: 'Customers', path: '/customers' },
    { icon: CreditCard, text: 'Transaction', path: '/transaction' },
    { icon: History, text: 'Transaction History', path: '/transactionshistory' },
    { icon: Trash2, text: 'Delete User', path: '/deleteUser' },
    { icon: FileText, text: 'Terms', path: '/terms' },
    { icon: Shield, text: 'Privacy', path: '/privacy' },
    { icon: Award, text: 'Benefits', path: '/benefits' },

    
    { icon: Settings, text: 'Settings', path: '/settings' },
  ];

  const handleItemClick = (path) => {
    setActiveItem(path); // Update active item
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login');
  };

  return (
     <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-20 ${isOpen ? 'w-64' : 'w-16'}`}>
   
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
        <h1 className={`font-extrabold text-lg ${!isOpen && 'hidden'}`}>Ornaments Admin</h1>
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-gray-300 transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => handleItemClick(item.path)}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${activeItem === item.path ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-gray-700'} ${!isOpen && 'justify-center'}`}
          >
            <item.icon size={20} />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className={`absolute bottom-0 w-full px-4 py-3 border-t border-gray-700 ${!isOpen && 'hidden'}`}>
        <button onClick={handleLogout} className="flex items-center text-red-400 hover:text-red-300 transition-colors">
          <LogOut size={20} />
          <span className="ml-4">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
