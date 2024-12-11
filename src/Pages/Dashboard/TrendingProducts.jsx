
import React from 'react';

const trendingProducts = [
  { name: 'Mangalsutra', rating: 4.7, reviews: 128, price: '$279' },
  { name: 'Earrings', rating: 4.3, reviews: 530, price: '$19' },
  { name: 'Rings', rating: 4.6, reviews: 147, price: '$34' },
  { name: 'Khopa', rating: 4.5, reviews: 826, price: '$35' },
  { name: 'HairPins', rating: 4.5, reviews: 126, price: '$49' },
];

const TrendingProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trending Products</h3>
      <ul className="space-y-4">
        {trendingProducts.map((product, index) => (
          <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <div className="product-info">
              <p className="text-lg font-medium text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-600">
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>
            </div>
            <p className="text-lg font-semibold text-indigo-600">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingProducts;
