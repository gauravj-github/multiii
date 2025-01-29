import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Slidbar = () => {
  return (
    <div className='mt-10 ml-10 mb-10 flex flex-col text-center justify-center w-80 '>
      <Link className="border  border-black p-4" to="/customer/Dashboard">Dasboard</Link>      
      <Link className="border  border-black p-4" to="/customer/order">Order</Link>
      <Link className="border  border-black p-4" to="/customer/wishlist">Wishlist</Link>
      <Link className="border  border-black p-4" to="/customer/profile">Profile</Link>
      <Link className="border  border-black p-4" to="/customer/Address">Address</Link>     
     <Link className="border  border-black p-4" to="/customer/changepassword">Change Password</Link>
      <Link className="border  border-black text-red-800 p-4" to="">Logout</Link>
    </div>
  )
}

export default Slidbar
