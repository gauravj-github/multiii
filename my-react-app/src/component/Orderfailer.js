import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Orderfailer = () => {
  return (
    <div>
         <div className='text-center font-bold text-2xl p-5 text-red-700'>
        YOUR ORDER IS FAIL
        <p className="mt-10 flex justify-center text-center gap-10">
            <Link className="bg-blue-600 text-white p-2 rounded-full" to="/">Home</Link>
            <Link className="bg-gray-400 text-white p-2 rounded-full" to="/customer/Dashboard">Dashboard</Link>

        </p>
    </div>
    </div>
  )
}

export default Orderfailer