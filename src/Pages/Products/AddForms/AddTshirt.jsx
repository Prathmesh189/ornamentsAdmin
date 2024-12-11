import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../productsData';
import { v4 as uuidv4 } from "uuid";
const AddTshirt = () => {
  const location = useLocation();
  const { category } = location.state;

  // State for form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [fitType, setFitType] = useState('');
  const [imgs, setImgs] = useState([]);  // Store multiple image files
  const [error, setError] = useState(''); // Store error message for image validation

  // Maximum and minimum file size (in bytes)
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const MIN_SIZE = 50 * 1024; // 50KB

  // Handle image change (multiple files)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    const validFiles = [];
    let errorMessage = '';

    files.forEach(file => {
      if (file.size > MAX_SIZE) {
        errorMessage = 'One or more files are too large. Max size is 5MB.';
      } else if (file.size < MIN_SIZE) {
        errorMessage = 'One or more files are too small. Min size is 200KB.';
      } else {
        validFiles.push(file);
      }
    });

    if (validFiles.length > 0) {
      setImgs(validFiles); // Update the state with valid files
      setError(''); // Clear any previous errors
    } else {
      setError(errorMessage); // Set error message if no valid files
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!name || !price || !size || !color || !material || !subcategory || !rating || !description || !fitType || imgs.length === 0) {
      setError('Please fill all fields and select valid images.');
      return;
    }
    const newId = uuidv4()
    // New product object based on the updated schema
    const newProduct = {
      category,
      name,
      price,
      size,
      color,
      material,
      subcategory,
      rating,
      description: description.split(','),
      fitType,
      imgs,
      id : newId  // The array of image files
    };
    console.log(newId)

    products.push(newProduct)

    // Call addProduct in the Products page or local state here
    console.log(newProduct);  // Just for demonstration; replace with actual product addition logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Add New T-shirt</h2>
      
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
            min="0"
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
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
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
          <label htmlFor="subcategory" className="block text-gray-700 font-medium">Subcategory</label>
          <input
            type="text"
            id="subcategory"
            placeholder="Enter subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
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
          <label htmlFor="fitType" className="block text-gray-700 font-medium">Fit Type</label>
          <input
            type="text"
            id="fitType"
            placeholder="Enter fit type (e.g., Slim Fit)"
            value={fitType}
            onChange={(e) => setFitType(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="form-group">
          <label htmlFor="img" className="block text-gray-700 font-medium">Images</label>
          <input
            type="file"
            id="img"
            onChange={handleImageChange}
            multiple // Allows multiple file uploads
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {imgs.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-700 font-medium">Image Previews:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
              {imgs.map((img, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <img src={URL.createObjectURL(img)} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && <p className="text-red-500">{error}</p>}

      </div>

      <button type="submit" className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Add Product</button>
    </form>
  );
};

export default AddTshirt;
