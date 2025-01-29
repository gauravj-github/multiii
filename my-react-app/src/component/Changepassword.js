import React from 'react'
import Slidbar from './Slidbar'
const Changepassword = () => {
  return (
    <div className="flex shadow-2xl  m-10 w-auto" >
      <Slidbar></Slidbar>
      <body className=" flex items-center justify-center ml-40 w-auto">
  <div className="w-full  bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Change Password</h2>
    <form action="#" method="POST" className="space-y-4">
      <div>
        <label for="current_password" className="block text-sm font-medium text-gray-700">Current Password</label>
        <input 
          type="password" 
          id="current_password" 
          name="current_password" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your current password" 
          required />
      </div>

      <div>
        <label for="new_password" className="block text-sm font-medium text-gray-700">New Password</label>
        <input 
          type="password" 
          id="new_password" 
          name="new_password" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your new password" 
          required />
      </div>

      <div>
        <label for="confirm_password" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <input 
          type="password" 
          id="confirm_password" 
          name="confirm_password" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Re-enter your new password" 
          required/>
      </div>

      <div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Change Password
        </button>
      </div>
    </form>
  </div>
</body>
    </div>
  )
}

export default Changepassword