import React from 'react'
import Slidbar from './Slidbar'

const Dashboard = () => {
  return (
    <div className='flex shadow-2xl  m-10 w-auto'>
        <Slidbar></Slidbar>
        <div className='mt-10 ml-20 flex h-20 '>
            <div className='text-center mr-20 border border-black p-4'>
            <p>Total Order</p>
            <p>45</p>
            </div>

            <div className='text-center mr-20 border border-black p-4'>
            <p>Total Order</p>
            <p>45</p>
            </div> 
            
            <div className='text-center mr-20 border border-black p-4'>
            <p>Total Order</p>
            <p>45</p>
            </div>

        </div>
    </div>
  )
}

export default Dashboard