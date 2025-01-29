import React from 'react'
import Slidbar from './Slidbar'

const Wishlist = () => {
  return (
    <div className='flex gap-6'>
        <Slidbar></Slidbar>
        <div class="container mx-auto p-4  mr-11">
    <h1 class="text-2xl font-bold mb-6">Your Cart</h1>

    <div class="border rounded-lg p-4 shadow-lg bg-white">
        <div class="flex items-center space-x-4 mb-4">
            <img src="https://via.placeholder.com/100" alt="Product" class="w-24 h-24 object-cover rounded-lg"/>
            <div>
                <h2 class="text-lg font-semibold">Product Name</h2>
                <p class="text-gray-600">₹1000</p>
                <div class="flex items-center space-x-2 mt-2">
                    <button class="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">-</button>
                    <span>1</span> 
                    <button class="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">+</button>
                </div>
            </div>
            <button class="text-red-500 hover:text-red-700 font-bold text-xl">Remove</button>
        </div>

        <div class="flex justify-between items-center mt-4">
            <p class="font-semibold">Total: ₹1000</p>
        </div>
    </div>
   
</div>
    </div>
  )
}

export default Wishlist