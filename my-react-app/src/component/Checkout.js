import React from 'react'

const Checkout = () => {
  return (
    <div>
         <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-6">Products</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="product-list"></div>

        <h1 class="text-2xl font-bold mt-8 mb-4">Your Cart</h1>
        <div id="cart" class="border rounded-lg p-4 shadow-lg bg-white">
            <p>Your cart is empty.</p>
        </div>
    </div>
    </div>
  )
}

export default Checkout