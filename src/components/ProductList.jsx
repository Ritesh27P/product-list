import React from 'react';
import Product from './Product';

const ProductList = ({ products, animate }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5 sm:mx-0 ${
    animate ? 'animate-fade-in' : ''
  }`}>
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
