import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { live } from '../config'

const Updateaddress = () => {
    const {id} =useParams();
    const [address , updatedaddress]=useState()
    const [sucess , setsucess]=useState()
console.log(id)
useEffect(()=>{
    addressFetch()
},[])
    function addressFetch(){
        axios.get(`${live}api/address/${id}/`) 
        .then(function (response) {
            console.log(response.data.address)
            updatedaddress(response.data.address)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
function submitHandler(){
    const formData =new FormData();
    formData.append("id",id)
    formData.append("address",address)
    axios.patch(`${live}api/address/${id}/`,formData) 
    .then(function (response) {
        console.log(response.data.address)
        updatedaddress(response.data.address)
        setsucess(true)

      })
      .catch(function (error) {
        setsucess(false)
        console.log(error);
      });
}
  return (
    <div className='mt-40'> <body className=" flex items-center justify-center ml-40 ">
    <div className=" bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">update Address</h2>
      <form onSubmit={submitHandler}>
       {sucess ==true && <p>Address is changed</p>}
       {sucess ==false && <p>somthing went wrong</p>}
      <input  value={address} onChange={(e)=>updatedaddress(e.target.value)}/>
        <div>
          <button 

            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  </body></div>
  )
}

export default Updateaddress