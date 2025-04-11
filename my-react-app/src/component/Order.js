import { useState, useEffect } from "react";
import axios from "axios";
import Slidbar from './Slidbar';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customer_id = localStorage.getItem("user_id");
const baseurl = "http://127.0.0.1:8000"
const Order = () => {
  const [orderData, setOrderData] = useState([]); // ✅ Initialize as an empty array
  const [down , showDownload] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/customer-all-order/${customer_id}`) 
      .then(response => {
        if (response.data && response.data.results) {
          setOrderData(response.data.results); // ✅ Properly updating state
          console.log(response.data);
        } else {
          console.error("Invalid response structure:", response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function countDownload(id ,order_id) {
    if (!id) {
      console.error("Invalid product ID for download request");
      return;
    }
    console.log(id , order_id , "vjnv")

    axios.post(`http://127.0.0.1:8000/api/update_product_download/${id}/${order_id}`)
      .then((response) => {
        console.log("Download updated:", response.data );
      })
      .catch((error) => {
        console.error("Error updating download:", error);
      });
  }
  return (
    <div className='flex flex-row shadow-2xl m-10'>
      <div className="mt-16"><Slidbar /></div>
      <div className='mt-10 ml-20'>
        <h2 className="text-center mb-6 font-bold text-2xl text-green-600">Order Details</h2>
        
        {orderData.length > 0 ? (
          <ul className="border mb-10 shadow-2xl hover:shadow-black">
            {orderData.map((orderItem, index) => (
              <li key={orderItem.id} className="flex items-center justify-center mb-5">
                
                <p className="ml-6 mr-10">{index + 1}</p>
                <div className="mr-8 mt-5">
                  <Link to={`/product/${orderItem.product?.slug}/${orderItem.product?.id}`}>
                    <img className="w-24 mb-4" src={`${baseurl}${orderItem.product?.image}`} alt="Product" />
                  </Link>
                  <Link className="mr-10 text-xl font-bold" to={`/product/${orderItem.product?.slug}/${orderItem.product?.id}`}>
                    Title: {orderItem.product?.title || "No Product Name"}
                  </Link>
                </div>
                <p className="mr-10 text-xl "> <span className="text-xl font-bold">Price:</span> ${orderItem.price}</p>
                <p className="mr-10">
                  {orderItem.order_status === true && <><span className="text-xl font-bold">ordrtstatue : </span><FontAwesomeIcon icon={faCheckCircle} style={{ color: "green", fontSize: "24px" }} /> </>}
                  {orderItem.order_status === false && <><span className="text-xl font-bold">ordrtstatue : </span><FontAwesomeIcon icon={faTimesCircle} style={{ color: "red", fontSize: "24px" }} /></>}
                </p>

                {orderItem.order_status === true && orderItem.product?.id && (
                    <a download href={orderItem.product?.product_file}  onClick={() => countDownload(orderItem.product.id,orderItem.order )} className="mr-10 bg-blue-500 p-3 rounded-2xl text-xl cursor-pointer text-white"> Download <span className="bg-white text-red-400 m-2 p-1 rounded-2xl">{orderItem.product?.downloads}</span>
                    </a>
                  
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading order data...</p> 
        )}
      </div>
    </div>
  );
};

export default Order;
