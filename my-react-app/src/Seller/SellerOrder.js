import { Link } from "react-router-dom/cjs/react-router-dom.min"
import SellerSlidbar from "./SellerSlidbar"
import { useEffect,useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const live = "https://multivendor.pythonanywhere.com/"



const SellerOrder = () => {
const [vendororder,setvendororder]=useState([])

  const vendor_id = localStorage.getItem('vender_id');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${live}api/vendororderlist/${vendor_id}`)
      .then(response => {
        // console.log(response.data.results)
        setvendororder(response.data.results)

      })
      .catch(error => console.log(error));
  };
  console.log(vendororder)
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
{vendororder && vendororder.length > 0 ? (
  vendororder.map((item, index) => (
    <tr key={item.id} className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2  font-semibold">{index + 1}</td>
      <td className="border border-gray-300 px-4 py-2  font-semibold">{item.product?.title}</td>
      <td className="border border-gray-300 px-4 py-2  font-semibold">₹{item.price}</td>
      <td className="border border-gray-300 px-4 py-2 font-semibold">
      {item.order_status === true && <><span className=" text-green-500">ordrtstatue : </span><FontAwesomeIcon icon={faCheckCircle} style={{ color: "green", fontSize: "24px" }} /> </>}
      {item.order_status === false && <><span className="text-red-600">ordrtstatue : </span><FontAwesomeIcon icon={faTimesCircle} style={{ color: "red", fontSize: "24px" }} /></>}
      </td>
      <td className="border border-gray-300 px-4 py-2 space-x-2  font-semibold">
        <a href="#">Download</a>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5" className="text-center py-4">Loading order data...</td>
  </tr>
)}




</tbody>
</table>

</div>

<h3 className='mt-5'> <a className='bg-blue-600 p-3 rounded-3xl text-white text-xl' href='#'>+ Add Product</a></h3> 
</div>
)
}

export default SellerOrder