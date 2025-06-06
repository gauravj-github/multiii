import React from 'react'
 import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Sellerpanel from './SellerPannel';
import { useContext,useState} from 'react';
import { UserContext,CartContext } from '../congtext/context'; 
import { MYaccount } from './MYaccount';
import Changecurency from './Curresce/Changecurency';
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userContext = useContext(UserContext); // Correct use of useContext
  const {cartData,setCartData} =useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  if (cartData == null){
 var cartItems =0
  }
  else{
    var cartItems = cartData.length
  }

  return (

    <div>
      {/* navbar */}
      <nav className="bg-orange-200 border-b border-gray-200 shadow-sm">
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
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                Home
              </Link>
 <Link
                to="/Allproduct"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                AllProduct
              </Link>
              <Link
                to="/categories"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition nav-link"
              >
                Category
              </Link>

             

              <Link
                to="/checkout"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                My Cart ({cartItems})
              </Link>
              {/* <Link
                to="/checkout"
                className="text-gray-800 hover:text-blue-600 font-bold text-xl transition"
              >
                New Order(4)
              </Link> */}
              <Changecurency></Changecurency>

            </div>


            {/* Action Buttons */}
            <div className="hidden md:flex items-center ">
             

        

              {/* User Profile */}
              <button
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 transition"
                aria-label="User Profile"
              >
{/* seller panel */}


                <div className="relative  text-left flex gap-4">
                  {/* Dropdown Button */}
                

                  <div className="relative inline-block text-left bg-orange-100">
                    {/* Dropdown Button */}
                   <MYaccount></MYaccount>
                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                        {userContext != "true" &&
                          <>
                          <Link
                            to="/user/registration"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Registration
                          </Link>
                         
                          <Link
                            to="/user/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Login
                          </Link>
                          </>           
                }
                          {userContext == "true" &&
                          <>
                          <Link
                            to="/customer/Dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Dashboard
                          </Link>
                          <Link  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to='/customer/logout'>
               Logout
              </Link>
              </>           
                }

                        </div>
                      </div>
                    )}
                  </div>
                  <Sellerpanel></Sellerpanel>
                  </div>

                  {/* <select
      className="border border-gray-300 rounded px-3 py-2"
      onChange={handleNavigation}
      defaultValue="" // Placeholder
    >
     
      <option >My Profile</option>
      <option value="/user/registration">Registration</option>
      <option >Login</option>
      <option value="/customer/dashboard">Dashboard</option>
      <option >Logout</option>
    </select> */}
                  {/* <div className='gap-10'>
<Link to="/customer/dashboard">Dashboard</Link>
</div> */}
                  {/* <div> */}
                  {/* <Link to="/user/registration">
  Registration
  </Link> */}

                  {/* </div> */}
                  {/* <Link>Logout</Link> */}
            




              </button>
            </div>
          </div>


          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-2 py-3">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-800 hover:text-blue-600 font-medium transition"
                >
                  Contact
                </Link>
              </div>
            </div>

          )}

        </div>




      </nav>
      {/* End Navbar */}
    </div>


  )
}

export default Header