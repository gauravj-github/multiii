import React from 'react'

const AddAddress = () => {
  return (
    <div className='mt-40'> <body className=" flex items-center justify-center ml-40 ">
    <div className=" bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Address</h2>
      <form action="#" method="POST" className="space-4">
        <div className=''>
          <label for="current_password" className="block text-sm font-medium text-gray-700 "><i class="fa fa-address-book" aria-hidden="true"></i></label>
         <textarea placeholder='Address' className='border border-black w-96 text-center text-black'></textarea>
        </div>
  
      
  
        <div>
          <button 
            type="submit" 
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