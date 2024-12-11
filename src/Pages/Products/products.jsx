import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTshirt, FaBaseballBall, FaShoePrints } from 'react-icons/fa';
import { PiPantsFill } from "react-icons/pi";
import { GiBilledCap } from "react-icons/gi";
import StatCard from '../../Components/StatCrad';
import Pagination from '../../Components/Pagination';
import mockProductData from './productsData';
import AddTshirt from './AddForms/AddTshirt';
import AddBat from './AddForms/AddBat';
import AddBall from './AddForms/AddBall';
import AddShoes from './AddForms/AddShoes';
import AddTrackPant from './AddForms/AddTrackPant';
import AddCaps from './AddForms/AddCaps';
import { GiNecklace, GiEarrings, GiRing, GiHairStrands } from 'react-icons/gi'; 

function Products() {
  const [products, setProducts] = useState(mockProductData);
  const [filteredProducts, setFilteredProducts] = useState(mockProductData);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleStatCardClick = (category) => setFilter(category);

  useEffect(() => {
    let updatedProducts = products;
    if (filter !== 'All') {
      updatedProducts = updatedProducts.filter(product => product.category === filter);
    }
    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.id.toString().includes(searchTerm) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(updatedProducts);
    setPage(1); // Reset to the first page whenever filter or search term changes
  }, [filter, searchTerm, products]);

  const paginate = (pageNumber) => setPage(pageNumber);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleProductSelect = (category) => {
    closeModal();
    navigate(`/add-product/${category.toLowerCase()}`, { state: { category } });
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className="container mx-auto p-6">
      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 mb-6">
        <StatCard name="All Products" icon={GiNecklace} value={products.length} color="black" onClick={() => handleStatCardClick('All')} />
        <StatCard name="Mangalsutra" icon={GiNecklace} value={products.filter(p => p.category === 'Mangalsutra').length} color="blue" onClick={() => handleStatCardClick('Mangalsutra')} />
        <StatCard name="Earrings" icon={GiEarrings} value={products.filter(p => p.category === 'Earrings').length} color="green" onClick={() => handleStatCardClick('Earrings')} />
        <StatCard name="Rings" icon={GiRing} value={products.filter(p => p.category === 'Rings').length} color="red" onClick={() => handleStatCardClick('Rings')} />
        <StatCard name="Khopa" icon={GiHairStrands} value={products.filter(p => p.category === 'Khopa').length} color="yellow" onClick={() => handleStatCardClick('Khopa')} />
        <StatCard name="HairPins" icon={GiHairStrands} value={products.filter(p => p.category === 'HairPins').length} color="pink" onClick={() => handleStatCardClick('HairPins')} />
        {/* <StatCard name="Nacklace set" icon={FaBaseballBall} value={products.filter(p => p.category === 'Nacklace set').length} color="green" onClick={() => handleStatCardClick('Nacklace set')} />
        <StatCard name="Peacock theme Jwellary" icon={FaShoePrints} value={products.filter(p => p.category === 'Peacock theme Jwellary').length} color="red" onClick={() => handleStatCardClick('Peacock theme Jwellary')} />
        <StatCard name="Earcuffs" icon={PiPantsFill} value={products.filter(p => p.category === 'Earcuffs').length} color="yellow" onClick={() => handleStatCardClick('Earcuffs')} />
        <StatCard name="Bangles" icon={GiBilledCap} value={products.filter(p => p.category === 'Bangles').length} color="pink" onClick={() => handleStatCardClick('Bangles')} />
        <StatCard name="Traditional Nath" icon={GiBilledCap} value={products.filter(p => p.category === 'Traditional Nath').length} color="pink" onClick={() => handleStatCardClick('Traditional Nath')} /> */}
      </div>

      {/* Add Product Button */}
      <div className="mb-6 text-right">
        <button onClick={openModal} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition ease-in-out duration-300">Add Product</button>
      </div>

      {/* Product Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select onChange={(e) => setFilter(e.target.value)} className="border p-3 rounded-lg shadow-md w-full sm:w-1/4">
          <option value="All">All Categories</option>
          <option value="Mangalsutra">Mangalsutra</option>
          <option value="Earrings">Earrings</option>
          <option value="Rings">Rings</option>
          <option value="Khopa">Khopa</option>
          <option value="HairPins">HairPins</option>
          <option value="Nacklace set">Nacklace set</option>
          <option value="Peacock theme Jwellary">Peacock theme Jwellary</option>
          <option value="Earcuffs">Earcuffs</option>
          <option value="Bangles">Bangles</option>
          <option value="Traditional Nath">Traditional Nath</option>
        </select>
        <input type="text" placeholder="Search by Product ID or Name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border p-3 rounded-lg shadow-md w-full sm:w-1/2" />
      </div>

      {/* Product List Table */}
      <table className="table-auto w-full border-collapse border bg-white shadow-lg rounded-xl mb-6">
  <thead>
    <tr>
      <th className="border p-4 text-left">No</th>
      <th className="border p-4 text-left">Product ID</th>
      <th className="border p-4 text-left">Product Name</th>
      <th className="border p-4 text-left">Price</th>
      <th className="border p-4 text-left">Category</th>
      <th className="border p-4 text-left">Action</th>
      <th className="border p-4 text-left">Delete</th>
    </tr>
  </thead>
  <tbody>
    {filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((product, index) => (
      <tr key={product.id} className="hover:bg-gray-100">
        <td className="border p-4">{(page - 1) * itemsPerPage + index + 1}</td>
        <td className="border p-4">{product.id}</td>
        <td className="border p-4">{product.name}</td>
        <td className="border p-4">${product.price}</td>
        <td className="border p-4">{product.category}</td>
        <td className="border p-4">
          <Link to={`/view-product/${product.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">View</Link>
        </td>
        <td className="border p-4">
          <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
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
        filteredOrders={filteredProducts}
      />

      {/* Modal Popup for Product Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96 transform transition-all duration-300 ease-in-out scale-100 opacity-100">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Select Product Type</h2>
            <button onClick={() => handleProductSelect('tshirt')} className="w-full mb-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">T-Shirt</button>
            <button onClick={() => handleProductSelect('bat')} className="w-full mb-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ease-in-out duration-300">Bat</button>
            <button onClick={() => handleProductSelect('ball')} className="w-full mb-4 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition ease-in-out duration-300">Ball</button>
            <button onClick={() => handleProductSelect('shoes')} className="w-full mb-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ease-in-out duration-300">Shoes</button>
            <button onClick={() => handleProductSelect('trackpants')} className="w-full mb-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition ease-in-out duration-300">Track Pant</button>
            <button onClick={() => handleProductSelect('cap')} className="w-full mb-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition ease-in-out duration-300">Caps</button>
            <button onClick={closeModal} className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition ease-in-out duration-300">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
