import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Singleproduct = ({product}) => {
  console.log({product})

  return (
    <>
    <div className="w-72 rounded-full mx-auto sm:max-w-md lg:max-w-lg xl:max-w-xl  mb-10 ">
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
      {/* Product Image */}
      <Link to={`/product/${product.title}/${product.id}`} >
      <div className="relative flex justify-center items-center mt-2">
        <img
          className="h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg"
          src={product.image}
          alt="Product"
        />
      </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
{product.title}        
</h3>

        {/* Ratings */}
        <div className="flex items-center mt-2">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927a1 1 0 011.902 0l1.357 4.166a1 1 0 00.95.69h4.385a1 1 0 01.592 1.806l-3.572 2.604a1 1 0 00-.363 1.118l1.357 4.166a1 1 0 01-1.538 1.118L10 14.348l-3.572 2.604a1 1 0 01-1.538-1.118l1.357-4.166a1 1 0 00-.363-1.118L2.914 9.589a1 1 0 01.592-1.806h4.385a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
          ))}
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.357 4.166a1 1 0 00.95.69h4.385a1 1 0 01.592 1.806l-3.572 2.604a1 1 0 00-.363 1.118l1.357 4.166a1 1 0 01-1.538 1.118L10 14.348l-3.572 2.604a1 1 0 01-1.538-1.118l1.357-4.166a1 1 0 00-.363-1.118L2.914 9.589a1 1 0 01.592-1.806h4.385a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        </div>
  
        {/* Price */}
        <p className="text-xl font-bold text-gray-900 mt-3">₹{product.price}</p>
        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
      
    </div>
  </div>
  </>
  
  )
}

export default Singleproduct