import React from 'react';

const Filters = ({ onFilterChange, onSortChange }) => (
  <div className="bg-white p-4 shadow-md rounded-md mb-4">
    <h2 className="text-lg font-semibold mb-2">Filter & Sort</h2>
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 lg:mr-2">
        <label className="block text-sm mb-1">Filter by Category:</label>
        <select
          className="w-full p-2 border rounded-md"
          onChange={onFilterChange}
        >
          <option value={'all'}>all</option>
          <option value="smartphones">SmartPhones</option>
          <option value={'laptops'}>Laptos</option>
          <option value={'fragrances'}>Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="under-50">Price Under 50</option>
          <option value="50-100">Price 50 - 100</option>
          <option value="over-100">Prive over 100</option>
        </select>
      </div>
      <div className="flex-1 lg:ml-2">
        <label className="block text-sm mb-1">Sort by :</label>
        <select
          className="w-full p-2 border rounded-md"
          onChange={onSortChange}
        >
          <option value={''}></option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="title-a-to-z">Title: A to Z</option>
          <option value="title-z-to-a">Title: Z to A</option>
          <option value="discount-high-to-low">Discount: High to Low</option>
          <option value="rating-high-to-low">Rating: High to Low</option>
          <option value="discountPercentage">Discount Percentage</option>
        </select>
      </div>
    </div>
  </div>
);

export default Filters;
