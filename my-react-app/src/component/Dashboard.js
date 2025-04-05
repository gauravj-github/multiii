import React, { useState ,useEffect} from 'react'
import Slidbar from './Slidbar'
import axios from 'axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Dashboard = () => {
  const customer_id = localStorage.getItem('user_id')
  const [addresscount , setaddresscount ]=useState()
  const [ordercount , setordercount ]=useState()
  const [wishlistcount , setwishlistcount ]=useState()

  useEffect(()=>{
    Totalorder()
  },[])
  function Totalorder(){
    axios.post(`http://127.0.0.1:8000/api/customer/dashboard/${customer_id }/`) 
    .then(function (response) {
        console.log(response.data)
        setwishlistcount(response.data.Wishlistcount)
        setordercount(response.data.ordercount)
        setaddresscount(response.data.Addresscount)
            })
      .catch(function (error) {
        // console.log(error);
      });
  }
  return (
    <div className='flex shadow-2xl  m-10 w-auto'>
        <Slidbar></Slidbar>
        <div className='mt-10 ml-20 flex h-20 '>
            <div className='text-center mr-20 border border-black p-4'>
              <Link to={"/customer/order"}>
            <p>Total Order</p>
            <p>{ordercount}</p>
            </Link>
            </div>

            <div className='text-center mr-20 border border-black p-4'>
            <Link to={"/customer/wishlist"}>

            <p>Total Wishlist</p>
            <p>{wishlistcount}</p>

            </Link>
            </div> 
            
            <div className='text-center mr-20 border border-black p-4'>
            <Link to={"/customer/Address"}>

            <p>Total Address</p>
            <p>{addresscount}</p>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Dashboard