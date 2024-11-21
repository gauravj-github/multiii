import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Branding Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">MyBrand</h2>
        <p className="text-gray-400">
          Building a better web experience for everyone.
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 text-center text-gray-500 text-sm">
      © 2024 MyBrand. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer