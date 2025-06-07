import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import SellerSlidbar from "./SellerSlidbar"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { live } from '../config';

const Dashboard = () => {
  const vendor_id = localStorage.getItem('vender_id')
  const [product , setproductcount ]=useState()
  const [totelorder , settotelorder ]=useState()
  const [totalcustomeer , settotalcustomer ]=useState()

  useEffect(()=>{
    Totalorder()
  },[])
  function Totalorder(){
    axios.post(`${live}api/vendor/dashboard/${vendor_id }/`) 
    .then(function (response) {
        console.log(response.data)
        setproductcount(response.data.productcount)
        settotelorder(response.data.totalorder)
        settotalcustomer(response.data.totalcustomer)
      
            })
      .catch(function (error) {
        // console.log(error);
      });
  }
  return (
    <div className='flex shadow-2xl  m-10 w-auto'>
            <SellerSlidbar></SellerSlidbar>
            <div className='mt-10 ml-20 flex h-20 '>
            <div className='text-center mr-20 border border-black p-4'>
              <Link to={"/seller/products"}>
            <p>Total product addade</p>
            <p>{product}</p>
            </Link>
            </div>

            <div className='text-center mr-20 border border-black p-4'>
            <Link to={"/seller/orders"}>

            <p>Total order</p>
            <p>{totelorder}</p>

            </Link>
            </div> 
            
            <div className='text-center mr-20 border border-black p-4'>
            <Link to={"/seller/Customer"}>

            <p>Total Customer</p>
            <p>{totalcustomeer}</p>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Dashboard