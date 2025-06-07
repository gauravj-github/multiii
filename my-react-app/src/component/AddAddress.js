import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { live } from '../config'
const customer_id = localStorage.getItem('user_id')

const AddAddress = () => {
  const [address,setaddress]=useState('')
  const[success,setsuccess]=useState()



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address,"submited")
    const formData = new FormData();
    formData.append('customer', customer_id)
    formData.append('address', address)


   axios.post(`${live}api/address/`, formData)
  .then(function (response) {
    // Handle the success response
    console.log("Address added:", response.data);
    setsuccess(true)
   
  })
  .catch(function (error) {
    // Handle the error response
    setsuccess(false)

    if (error.response) {
      // If the error is from the server (e.g., validation error)
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      // If no response was received
      console.log("No response received:", error.request);
    } else {
      // General error
      console.log("Error:", error.message);   
    }
  });

}


  console.log(address)
  return (
    <div className='mt-40'> <body className=" flex items-center justify-center ml-40 ">
    <div className=" bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Address</h2>
      <form onSubmit={handleSubmit}>
        {success ==true && <p className='text-2xl bg-green-600 text-center mb-4 rounded-full' >Sucessfully address is added</p>}
        {success ==false && <p className='text-2xl bg-red-700 text-center mb-4 rounded-full' >same address is alredy exist</p>}
        <div className=''>
          <label for="current_password" className="block text-sm font-medium text-gray-700 "><i class="fa fa-address-book" aria-hidden="true"></i></label>
         <textarea onChange={(e)=>{setaddress(e.target.value)}} placeholder='Address' className='border border-black w-96 text-center text-black'></textarea>
        </div>
  
      
  
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

export default AddAddress