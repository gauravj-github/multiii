import { Link } from "react-router-dom/cjs/react-router-dom.min"
import SellerSlidbar from "./SellerSlidbar"
import axios from "axios"
import { useState,useEffect } from "react"
const SellerCustomer = () => {
  const [vendororder,setvendororder]=useState([])

  const vendor_id = localStorage.getItem('vender_id');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://127.0.0.1:8000/api/vendorcustomeerlist/${vendor_id}`)
      .then(response => {
        // console.log(response.data.results)
        setvendororder(response.data.results)

      })
      .catch(error => console.log(error));
  };
  function remove(id){
    var _confirm =window.confirm(" Are you sure to delete this product")
    console.log(_confirm)
    if (_confirm===true){
    axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
    .then(function (response) {
console.log(response.data,"deleted")
window.location.reload()



    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }

//   function removeUser(id){
// console.log(id,"orderid")  }
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

  {vendororder && vendororder.length > 0 ? (
    vendororder.map((item, index) => (
      <tr key={item.id} className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2  font-semibold">{index + 1}</td>
        <td className="border border-gray-300 px-4 py-2  font-semibold">{item.user.username}</td>
        <td className="border border-gray-300 px-4 py-2  font-semibold">{item.user.email}</td>
        <td className="border border-gray-300 px-4 py-2 font-semibold">
        {item.customrer.mobile}

        
        </td>
        <td className="border border-gray-300 px-4 py-2 space-x-2">
{/* <Link  to={`/seller/customer/order/${item.customrer.id}`}>Order</Link> */}
<Link to={`/customerorder/${item.customrer.id}`} className="bg-green-500 p-1 rounded-md text-black">order</Link>
<button className="bg-red-700 p-2 rounded-2xl text-white" onClick={()=>remove(item.customrer.id)}>Remove from list</button>

</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center py-4">Loading order data...</td>
    </tr>
  )}
{/* <tr className="hover:bg-gray-50">
<td className="border border-gray-300 px-4 py-2">1</td>
<td className="border border-gray-300 px-4 py-2">Gaurav</td>
<td className="border border-gray-300 px-4 py-2">gaurav@gmail.com</td>
<td className="border border-gray-300 px-4 py-2font-semibold">89898989</td>
<td className="border border-gray-300 px-4 py-2 space-x-2">
<button className="bg-green-500 text-gray-600 p-2 pl-3 pr-3 rounded-2xl hover:text-red-700">Order</button>

<button className="bg-red-700 p-2 rounded-2xl text-white">Remove from list</button>
</td>
</tr> */}

</tbody>
</table>

</div>

<h3 className='mt-5'> <a className='bg-blue-600 p-3 rounded-3xl text-white text-xl' href='#'>+ Add Product</a></h3> 
</div>
  )
}

export default SellerCustomer