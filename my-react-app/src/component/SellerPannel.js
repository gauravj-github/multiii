import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Sellerpanel = () => {
  const [open, setOpen] = useState(false);

  const dropDown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const checkvendor =localStorage.getItem('vender_login')

  return (
    <div>
      <div className="relative inline-block text-left ">
        <button
          onClick={dropDown}
          aria-expanded={open}
          aria-controls="dropdown-menu"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-orange-100 border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        >
          Seller panel
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transform ${open ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02L10 10.293l3.71-3.105a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-1.02 0l-4-3.5a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {open && (
          <div
            id="dropdown-menu"
            className="absolute right-0 z-10 mt-2 min-w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {checkvendor &&
              <> <Link to="/seller/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Dashboard
              </Link>
              <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/seller/logout">
               Logout
              </Link>
              </>
              }

{! checkvendor &&
<>
              <Link to="/seller/registration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Registration
              </Link>
              <Link to="/seller/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login
              </Link>
              </>
              }
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sellerpanel;
