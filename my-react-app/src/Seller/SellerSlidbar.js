import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Slidbar = () => {

  return (
    <div className='mt-10 ml-10 mb-10 flex flex-col text-center justify-center w-80 '>
      <Link className="border  border-black p-4" to="/seller/dashboard">Dasboard</Link>
      <Link className="border  border-black p-4" to="/seller/products">Products</Link>   
      <Link className="border  border-black p-4" to="/seller/Addproduct">AddProducts</Link>         
      <Link className="border  border-black p-4" to="/seller/orders">Order</Link>
      <Link className="border  border-black p-4" to="/seller/Customer">Customer</Link>
      <Link className="border  border-black p-4" to="/seller/Reports">Reports</Link>  
      <Link className="border  border-black p-4" to="/seller/Profile">Profile</Link>     
      <Link className="border  border-black p-4" to="/seller/Changepassword">Change Password</Link>        
      <Link className="border  border-black text-red-800 p-4" to="/seller/logout" >Logout</Link>
    </div>
  )
}

export default Slidbar
