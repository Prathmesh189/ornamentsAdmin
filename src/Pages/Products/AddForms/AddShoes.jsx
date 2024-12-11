import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../productsData';
import { v4 as uuidv4 } from "uuid";
const AddShoes = () => {
  const location = useLocation();
  const { category } = location.state;

  // State for form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);  // Store the image file

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the selected image
      setImg(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4()
    // New product object based on the updated schema
    const newProduct = {
      category,
      name,
      price,
      size,
      color,
      material,
      brand,
      rating,
      description: description.split(','),
      img,  // The image URL or base64 string
      id : newId 
    };
    products.push(newProduct)

    // Call addProduct in the Products page or local state here
    console.log(newProduct);  // Just for demonstration; replace with actual product addition logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New Shoes</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="form-group">
          <label htmlFor="name" className="block text-gray-700 font-medium">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size" className="block text-gray-700 font-medium">Size</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select size</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color" className="block text-gray-700 font-medium">Color</label>
          <input
            type="text"
            id="color"
            placeholder="Enter color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="material" className="block text-gray-700 font-medium">Material</label>
          <input
            type="text"
            id="material"
            placeholder="Enter material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand" className="block text-gray-700 font-medium">Brand</label>
          <input
            type="text"
            id="brand"
            placeholder="Enter brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating" className="block text-gray-700 font-medium">Rating</label>
          <input
            type="number"
            id="rating"
            placeholder="Enter rating (1 to 5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="1"
            max="5"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description (comma separated)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="img" className="block text-gray-700 font-medium">Image</label>
          <input
            type="file"
            id="img"
            onChange={handleImageChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        {img && (
          <div className="mt-4">
            <p className="text-gray-700 font-medium">Image Preview:</p>
            <img src={img} alt="Preview" className="mt-2 w-full max-w-xs mx-auto" />
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Shoes
        </button>
      </div>
    </form>
  );
};

export default AddShoes;
