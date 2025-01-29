import { Link } from "react-router-dom/cjs/react-router-dom.min"
import SellerSlidbar from "./SellerSlidbar"
const SellerCustomer = () => {
  return (
    <div className='flex shadow-2xl  m-10 w-auto justify-around'>
    <SellerSlidbar></SellerSlidbar>
    <div className=" ml-32 m-10 p-4 bg-white shadow-md rounded-lg">
<table className="w-full border-collapse border border-gray-300 text-left">
{/* Table Header */}
<thead>
<tr className="bg-gray-100">
<th className="border border-gray-300 px-4 py-2">#</th>
<th className="border border-gray-300 px-4 py-2">Name</th>
<th className="border border-gray-300 px-4 py-2">Email</th>
<th className="border border-gray-300 px-4 py-2">Mobile</th>
<th className="border border-gray-300 px-4 py-2">Action</th>
</tr>
</thead>

{/* Table Body */}
<tbody>
<tr className="hover:bg-gray-50">
<td className="border border-gray-300 px-4 py-2">1</td>
<td className="border border-gray-300 px-4 py-2">Gaurav</td>
<td className="border border-gray-300 px-4 py-2">gaurav@gmail.com</td>
<td className="border border-gray-300 px-4 py-2font-semibold">89898989</td>
<td className="border border-gray-300 px-4 py-2 space-x-2">
<button className="bg-green-500 text-gray-600 p-2 pl-3 pr-3 rounded-2xl hover:text-red-700">Order</button>

<button className="bg-red-700 p-2 rounded-2xl text-white">Remove from list</button>
</td>
</tr>
</tbody>
</table>

</div>

<h3 className='mt-5'> <a className='bg-blue-600 p-3 rounded-3xl text-white text-xl' href='#'>+ Add Product</a></h3> 
</div>
  )
}

export default SellerCustomer