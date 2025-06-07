import React, { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Singleproduct from "./Singleproduct";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { live } from '../config'
import Loader from "./Loader";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [products , setProducts] =useState([])
    const [totalResult , setTotalResults] =useState()
  const [loading, setLoading] = useState(true);

    
      const baseUrl =`${live}api/`
      useEffect(()=>{
fetchData(`${baseUrl}latestproduct/?fetch_limit=3`);
      },[])
    
      function fetchData(baseurl){
      fetch(baseurl)
        .then((response) => response.json())  // Invoke json() method
        .then((data) => {setProducts(data.results) 
          setLoading(false)
          
        // setTotalResults(data.count)
} ) // Log the data
        .catch((error) => console.error('Error:', error));  // Handle any errors
      }
console.log(products,"a;slchi")
// Array of slide content (manually defined, not using .map)
const slides = [
  "https://via.placeholder.com/300/FF5733",
  "https://via.placeholder.com/300/33FF57",
  "https://via.placeholder.com/300/5733FF",
];

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

  
if (loading =="true") return <Loader></Loader>

  return (
    <>
      {/* latest product */}
      <div className="flex  justify-between text-center p-4  mr-20 ml-20  ">
        <h3 className="font-bold text-4xl">Latest Product</h3>
        <Link to="/Allproduct" className="font-bold text-2xl bg-black hover:bg-blue-600 text-white p-3 rounded-full ">View All Product<span>      <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
        </span></Link>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">
 
{products.map((product)=><Singleproduct product={product}></Singleproduct>)}
      </main>

      {/* end latest product */}

      {/*popular categories */}
      <div className="flex  justify-between text-center p-4 m-4 mr-20 ml-20  ">
        <h3 className="font-bold text-2xl">Popular Categories</h3>
        <a href="#" className="font-bold text-2xl bg-black hover:bg-blue-600 text-white p-3 rounded-full ">View All Product  <span>      <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
        </span></a>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">

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
            <p>Products Downloades:22</p>
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
      {/* end popular categories */}






      {/* popular product */}

      <div className="flex  justify-between text-center p-4 m-4 mr-20 ml-20  ">
        <h3 className="font-bold text-2xl">popular product</h3>
        <a href="#" className="font-bold text-2xl bg-black hover:bg-blue-600 text-white p-3 rounded-full ">View All Product  <span>      <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
        </span></a>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">

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
      {/* end popular product */}


      {/*popular seller */}
      <div className="flex  justify-between text-center p-4 m-4 mr-20 ml-20  ">
        <h3 className="font-bold text-2xl">Popular seller</h3>
        <a href="#" className="font-bold text-2xl bg-black hover:bg-blue-600 text-white p-3 rounded-full ">View All Product <span>      <FontAwesomeIcon icon={faArrowRight} className="text-white text-xl" />
        </span></a>
      </div>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-20 ml-20">

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
              Seller Name      </h3>

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
            <p>Categories <a href="#">Python</a></p>
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
          <p>Categories</p>
        </div>
      </main>
      {/* end popular seller */}


      {/* slider */}
      <div className="relative w-8/12 mx-auto pt-20 h-69 mb-20">
        {/* Slides */}
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-500 "
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* slider 1*/}
            <div className="min-w-full flex flex-col justify-center text-center bg-black">
              <p className="text-white">this is well</p>
              <h3 className="text-white"><span>            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </span> customer name</h3>
            </div>

            {/* slider 2 */}

            <div className="min-w-full flex flex-col justify-center text-center bg-black h-52 ">
              <p className="text-white">this is well</p>
              <h3 className="text-white"> <span>            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </span> customer name</h3>
            </div>
            {/* slider 3 */}

            <div className="min-w-full flex flex-col justify-center text-center bg-black h-52 ">
              <p className="text-white">this is well</p>
              <h3 className="text-white"> <span>            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />


              </span> customer name</h3>
            </div>

          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            ▶
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <span
              className={`w-3 h-3 rounded-full ${currentSlide === 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
            ></span>
            <span
              className={`w-3 h-3 rounded-full ${currentSlide === 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
            ></span>
            <span
              className={`w-3 h-3 rounded-full ${currentSlide === 2 ? "bg-blue-500" : "bg-gray-300"
                }`}
            ></span>
          </div>
        </div>


      </div>
      </>
  )
}

export default Home