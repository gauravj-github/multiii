import React, { useEffect,useState } from 'react'
import SellerSlidbar from "./SellerSlidbar"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
const vendor_id = localStorage.getItem("vender_id")
import { live } from '../config';

const SellerProduct = () => {
  const[product,setproduct]=useState([])
  useEffect(() => {
    axios.get(`${live}api/products/?vendor_product=${vendor_id}`) 
      .then(response => {
          console.log(response.data.results);
          setproduct(response.data.results)
          
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function remove(id){
    var _confirm =window.confirm(" Are you sure to delete this product")
    console.log(_confirm)
    if (_confirm===true){
    axios.delete(`${live}api/product/${id}`)
    .then(function (response) {
console.log(response.data,"deleted")
window.location.reload()



    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }

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
        <th className="border border-gray-300 px-4 py-2">usd_price</th>
        <th className="border border-gray-300 px-4 py-2">Status</th>
        <th className="border border-gray-300 px-4 py-2">Action</th>
      </tr>
    </thead>

    {/* Table Body */}

      {product.map((item)=>(
        <>
            <tbody>
            <tr className="hover:bg-gray-50">
         <td className="border border-gray-300 px-4 py-2">{item.id}</td>
         <td className="border border-gray-300 px-4 py-2">{item.title}</td>
         <td className="border border-gray-300 px-4 py-2">₹{item.price}</td>
         <td className="border border-gray-300 px-4 py-2">${item.uds_price}</td>
         
          {item.publish_status && <td className="border border-gray-300 px-4 py-2 text-green-500 font-semibold"> published </td>}
          {!item.publish_status && <td className="border border-gray-300 px-4 py-2 text-red-700 font-semibold"> pending </td>}
         <td className="border border-gray-300 px-4 py-2 space-x-2">
           <Link  className="text-blue-500 hover:underline" to={`/product/${item.title}/${item.id}`}>View</Link>
           <Link to={`/seller/updateProduct/${item.id}`} className="text-yellow-500 hover:underline">Edit</Link>
           
           <a href="#" className="text-red-500 hover:underline" onClick={()=>remove(item.id)}>Delete</a>
         </td>
         </tr>
         </tbody>
         </>
      ))}
       
   
  </table>
 
</div>

<h3 className='mt-5'> <Link className='bg-blue-600 p-3 rounded-3xl text-white text-xl' to="/seller/Addproduct">+ Add Product</Link></h3>
        </div>
    )
}

export default SellerProduct