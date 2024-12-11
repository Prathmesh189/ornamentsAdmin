import React from 'react';

function Pagination({ page, itemsPerPage, paginate, filteredOrders = [] }) {
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // Early return if there are no pages to display
  if (totalPages <= 1) return null;

  return (
    <div className="mt-4 flex justify-center items-center space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => paginate(page - 1)}
        disabled={page === 1}
        className="border p-2 rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={`border p-2 rounded ${pageNumber === page ? 'bg-blue-500 text-white' : ''}`}
        >
          {pageNumber}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => paginate(page + 1)}
        disabled={page === totalPages}
        className="border p-2 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
