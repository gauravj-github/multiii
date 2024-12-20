import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Category = () => {
  return (
    <div>      {/*popular categories */}
    <div className="flex  justify-center text-center p-4 m-4 mr-20 ml-20  ">
      <h3 className="font-bold text-2xl">All Category</h3>
      
    </div>

    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">
   
      <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
        {/* Product Image */}
        <div className="relative">
        <Link to="/category/:category_slug/:category_id"> 

          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="https://via.placeholder.com/300"
            alt="Product"
          />
                      </Link>

        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            product categories
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
          <p className="text-xl font-bold text-gray-900 mt-3">$49.99</p>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <p>  Products Downloades:22</p>
        </div>
      </div>


      <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
        {/* Product Image */}
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="https://via.placeholder.com/300"
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            Stylish Headphones
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
          <p className="text-xl font-bold text-gray-900 mt-3">$49.99</p>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>


      <div className="w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
        {/* Product Image */}
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src="https://via.placeholder.com/300"
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            Stylish Headphones
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
          <p className="text-xl font-bold text-gray-900 mt-3">$49.99</p>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
    {/* end popular categories */} </div>
  )
}

export default Category