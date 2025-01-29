import React from 'react'
import SellerSlidbar from "./SellerSlidbar"
const Reports = () => {
  return (
    <div className='flex shadow-2xl  m-10'>
    <SellerSlidbar></SellerSlidbar>
      <div className='mt-10 ml-20 flex'>
        
      <div className='text-center mr-20 border border-black p-4 h-min'>
          <p className='text-blue-500 text-xl mb-3'>Daily Reports</p>
          <button className='bg-green-500 p-2 rounded-2xl'>View</button>               </div>


          <div className='text-center mr-20 border border-black p-4 h-min'>
          <p className='text-blue-500 text-xl mb-3'>Monthly Reports</p>
 <button className='bg-green-500 p-2 rounded-2xl'>View</button>          </div>

         
          
          <div className='text-center mr-20 border border-black p-4 h-min'>
          <p className='text-blue-500 text-xl mb-3'>Yearly Reports</p>
          <button className='bg-green-500 p-2 rounded-2xl'>View</button>               </div>

      </div>
  </div>
    )
}

export default Reports