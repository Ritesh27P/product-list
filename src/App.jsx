import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
// import data from './data'; // Your product 
import data from './helperFunction/generateData';
import Skeleton from './components/Skeleton';


const App = () => {
  const [isProdAvail, setIsProdAvail] = useState(false)
  const [isFetching, setFetching] = useState(true)
  const [allProducts, setAllProducts] = useState()
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(true);
  const productsPerPage = 8;

  const getProductList = async () => {
    setFetching(true)
    const products = await fetch('https://dummyjson.com/products')
    const data = await products.json()
    setFetching(false)
    setProducts(data.products)
    setAllProducts(data.products)
    setIsProdAvail(true)
    return data
  }

  useEffect(() => {
    if (!isProdAvail) {
        getProductList()
    }
  }, [])

  const totalProducts = products?.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const [filter, setFilter] = useState('all'); // Initialize with 'all' or any default category
  const [selectedSort, setSelectedSort] = useState('');

  // const [sort, setSort] = useState(''); // Initialize with default sort option


  useEffect(() => {
    // Apply filter
    let filteredProducts = products.length > 0 ? products: [];
    if (filter !== 'all') {
      filteredProducts = allProducts.filter((product) => product.category === filter);
    } else {
      filteredProducts = allProducts
    }

    if (filter === 'under-50') {
      filteredProducts = allProducts.filter((product) => product.price < 50);
    } else if (filter === '50-100') {
      filteredProducts = allProducts.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (filter === 'over-100') {
      filteredProducts = allProducts.filter((product) => product.price > 100);
    }
  
    // Apply sort based on the selectedSort state
    let sortedProducts = filteredProducts && [...filteredProducts];
  
    if (selectedSort === 'price-low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'title-a-to-z') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === 'title-z-to-a') {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedSort === 'discount-high-to-low') {
      sortedProducts.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
    } else if (selectedSort === 'rating-high-to-low') {
      sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
  
    setProducts(sortedProducts);
  }, [filter, selectedSort]);
  

  useEffect(() => {})

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSelectedSort(newSort);
    setAnimate(true);
  };
  
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isFetching) return <Skeleton />
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='bg-gray-100 p-4'>
      <h1 className="text-2xl font-bold mb-4">Product List {}</h1>
      <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <ProductList products={allProducts === products ? products?.slice(indexOfFirstProduct, indexOfLastProduct) : products} animate={animate} />
      <div className="flex justify-center my-8">
          {allProducts.length === products.length ? <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> : ""}

      </div>
    </div>
  );
};

export default App;
