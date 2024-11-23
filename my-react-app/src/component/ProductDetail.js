import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import Singleproduct from "./Singleproduct";




const ProductDetail = () => {
  const images = [
    "https://via.placeholder.com/600?text=Image+1",
    "https://via.placeholder.com/600?text=Image+2",
    "https://via.placeholder.com/600?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative flex flex-col items-center">
      {/* Image Display */}
      <div className="flex justify-center items-center w-full max-w-md overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Next
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>

        {/* Product Information Section */}
        <div>
          {/* Product Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Stylish Headphones
          </h1>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-900 mt-4">$49.99</p>

          {/* Description */}
          <p className="text-gray-700 mt-4">
            These stylish headphones combine premium sound quality with a sleek
            design. Perfect for music enthusiasts, they offer a comfortable fit
            and superior audio performance.
          </p>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">

            <Link target="_blank"> Add to Cart</Link>
          </button>
          <div className="h-0.5 bg-black mt-3"></div>
          <div>
            <h3 className="text-2xl font-bold mt-3">Tages</h3>
            <p className="mt-3">
              <Link to="#" className="bg-gray-600 p-1 mr-2 text-white rounded-xl hover:text-green-400">Python </Link>
              <Link to="#" className="bg-gray-600 p-1 mr-2 text-white rounded-xl xl hover:text-green-400">Django </Link>
              <Link to="#" className="bg-gray-600 p-1 mr-2 text-white rounded-xl xl hover:text-green-400">Wed scripts</Link>
              <Link to="#" className="bg-gray-600 p-1 mr-2 text-white rounded-xl hover:text-green-400">Python </Link>
              <Link to="#" className="bg-gray-600 p-1 mr-2 text-white rounded-xl xl hover:text-green-400">Django </Link>
              <Link to="#" classNameName="bg-gray-600 p-1 mr-2 text-white rounded-xl xl hover:text-green-400">Wed scripts</Link>

            </p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center text-center p-4 m-4 mr-20 ml-20 mt-20  ">
      <h3 className="font-bold text-2xl text-red-600">Related Product</h3>
      
    </div>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 m-4 mr-10 ml-10">

<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>
<Singleproduct></Singleproduct>

</main>
    </div>
  );
};

export default ProductDetail;
