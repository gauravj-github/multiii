import React from 'react'
import SellerSlidbar from "./SellerSlidbar"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const SellerProduct = () => {
    return (
        <div className='flex shadow-2xl  m-10 w-auto justify-around'>
            <SellerSlidbar></SellerSlidbar>
            <div className=" ml-32 m-10 p-4 bg-white shadow-md rounded-lg">
  <table className="w-full border-collapse border border-gray-300 text-left">
    {/* Table Header */}
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">#</th>
        <th className="border border-gray-300 px-4 py-2">Product</th>
        <th className="border border-gray-300 px-4 py-2">Price</th>
        <th className="border border-gray-300 px-4 py-2">Status</th>
        <th className="border border-gray-300 px-4 py-2">Action</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      <tr className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2">1</td>
        <td className="border border-gray-300 px-4 py-2">Product Title</td>
        <td className="border border-gray-300 px-4 py-2">₹500</td>
        <td className="border border-gray-300 px-4 py-2 text-green-500 font-semibold">Published</td>
        <td className="border border-gray-300 px-4 py-2 space-x-2">
          <a href="#" className="text-blue-500 hover:underline">View</a>
          <Link to="/seller/updateProduct" className="text-yellow-500 hover:underline">Edit</Link>
          
          <a href="#" className="text-red-500 hover:underline">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
 
</div>

<h3 className='mt-5'> <a className='bg-blue-600 p-3 rounded-3xl text-white text-xl' href='#'>+ Add Product</a></h3>
        </div>
    )
}

export default SellerProduct