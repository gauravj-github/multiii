import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext,useState,useEffect} from 'react';
import { UserContext,CartContext } from '../congtext/context'; 

export const MYaccount = () => {
      const userContext = useContext(UserContext); // Correct use of useContext
        const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (!event.target.closest('.relative')) {
                setIsOpen(false);
              }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
          }, []);
          
  return (
    <div>

<button
                     onClick={toggleDropdown}
                      className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700  border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
                    >
                      My Account
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06-.02L10 10.293l3.71-3.105a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01-.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute right-0 z-10 mt-2 min-w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
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
  )
}



// <button
// onClick={toggleDropdown}
// className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700  border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
// >
// My Account
// <svg
//   className="-mr-1 ml-2 h-5 w-5"
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 20 20"
//   fill="currentColor"
//   aria-hidden="true"
// >
//   <path
//     fillRule="evenodd"
//     d="M5.23 7.21a.75.75 0 011.06-.02L10 10.293l3.71-3.105a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01-.02-1.06z"
//     clipRule="evenodd"
//   />
// </svg>
// </button>