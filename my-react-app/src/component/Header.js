import React from 'react'
import { useState } from "react";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div>
         {/* navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-600">
                OBITO THE INVISIBLE
              </a>
            </div>
  
            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  ></path>
                </svg>
              </button>
            </div>
  
            {/* Navigation Links for Desktop */}
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                Home
              </a>
              <a
                href="/shop"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                Category
              </a>
              <a
                href="/about"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                Contact
              </a>
            </div>
  
            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Icon */}
              <button
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 transition"
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l4 4m0 0l4-4m-4 4V4"
                  ></path>
                </svg>
              </button>
  
              {/* Cart */}
              <a
                href="/cart"
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 transition"
                aria-label="Cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h12l-2-7m-5-5V3m0 0V3m0 0"
                  ></path>
                </svg>
              </a>
  
              {/* User Profile */}
              <a
                href="/profile"
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 transition"
                aria-label="User Profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 6c-4.42 0-8 1.79-8 4m8-4c4.42 0 8 1.79 8 4m0 0v-4m0 0v-4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
  
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-2 py-3">
                <a
                  href="/"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Home
                </a>
                <a
                  href="/shop"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Shop
                </a>
                <a
                  href="/about"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
 {/*end navbar */}
    </div>
  )
}

export default Header