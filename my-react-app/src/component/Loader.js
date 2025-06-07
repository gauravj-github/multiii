import React from 'react'

const Loader = () => {
  return (
        <div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="text-center">
    <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
    <p class="mt-4 text-blue-600 font-semibold">Loading...</p>
  </div>
</div>

  )
}

export default Loader