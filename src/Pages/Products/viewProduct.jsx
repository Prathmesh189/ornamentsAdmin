import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mockProductData from './productsData';

function ViewProduct() {
  const { productId } = useParams();
  const product = mockProductData.find(product => product.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-bold text-red-600">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-2 text-lg">Category: <span className="font-medium text-gray-700">{product.category}</span></p>
          <p className="text-gray-600 text-lg">Subcategory: <span className="font-medium text-gray-700">{product.subcategory}</span></p>
          <p className="text-xl font-semibold mt-4 text-gray-800">${product.price}</p>
          <p className="mt-4 text-lg">{product.description}</p>
        </div>
      </div>
      <div className="mt-6 text-center">
          <Link to="/products" className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Back to Products
          </Link>
        </div>
    </div>
  );
}

export default ViewProduct;
