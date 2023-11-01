import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  /* Add your styles here */
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pages, setPages] = useState(() => [1, 2, 3])
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const handleClick = page => {
        onPageChange(page)
        setPages(prevPage => {
            if (page === 1) return [1, 2, 3]
            if (page === totalPages) return [totalPages-2, totalPages-2, totalPages]
            return [page-1, page, page+1]
        })
  }
  return (
    <nav className='items-center'>
        <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
                <a onClick={() => {currentPage > 1 && handleClick(currentPage-1)}} className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </a>
            </li>
                {
                    pages.map(page => (
                        <li>
                            <button key={page} onClick={() => handleClick(page)} disabled={page === currentPage} className={`z-10 flex items-center justify-center px-4 h-10 leading-tight text-white border-0 border-x-2 border-gray-300 bg-gray-800 hover:bg-blue-100 hover:text-blue-700 ${currentPage === page && "text-black"}`}>{page}</button>
                        </li>
                    ))
                }

            {/* <li>
                <button key={l1} onClick={() => onPageChange(l1)} className={`z-10 flex items-center justify-center px-4 h-10 leading-tight text-white border-0 border-x-2 border-gray-300 bg-gray-800 hover:bg-blue-100 hover:text-blue-700 ${currentPage === l1 && "text-black"}`}>{l1}</button>
            </li>
            <li>
                <button key={l2} onClick={() => onPageChange(l2)} className={`z-10 flex items-center justify-center px-4 h-10 leading-tight text-white border-0 border-x-2 border-gray-300 bg-gray-800 hover:bg-blue-100 hover:text-blue-700 ${currentPage === l2 && "text-black"}`}>{l2}</button>
            </li>
            <li>
                <button key={l3} onClick={() => onPageChange(l3)} className={`z-10 flex items-center justify-center px-4 h-10 leading-tight text-white border-0 border-x-2 border-gray-300 bg-gray-800 hover:bg-blue-100 hover:text-blue-700 ${currentPage === l3 && "text-black"}`}>{l3}</button>
            </li> */}

            <li>
                <a onClick={() => {currentPage+1 <= totalPages && handleClick(currentPage+1)}} 
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                    <span className="sr-only">Next</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
            </li>
        </ul>
</nav>
  );
};

export default Pagination;
