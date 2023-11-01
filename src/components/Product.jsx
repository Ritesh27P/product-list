import React from 'react';

const Product = ({ product }) => (
  <div className="flex flex-col justify-between rounded-md shadow-md p-4 bg-gray-300">
    <img
      src={product?.images[0]}
      alt={product.title}
      className="w-full h-48 object-cover object-center mb-2 rounded-md"
    />
    <h3 className="text-lg font-semibold">{product.title}</h3>
    <p className="text-gray-600 mb-2">{product.description}</p>
    <div className='flex flex-row justify-between'>
        <p className="text-blue-600 font-semibold">${product.price}</p>
        <p className="font-semibold text-yellow-400">⭐{product.rating}</p>
    </div>
  </div>
);

export default Product;
