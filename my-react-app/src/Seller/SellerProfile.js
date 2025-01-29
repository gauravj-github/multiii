import React, { Link } from "react";
import SellerSlidbar from "./SellerSlidbar"

const Profile = () => {
  return (
    <div className="flex shadow-2xl  m-10 w-auto" >
<SellerSlidbar></SellerSlidbar>   
   <div className="flex items-center justify-center p-8 ml-44">
    
  <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Profile</h2>
    <form action="#" method="POST" enctype="multipart/form-data" className="space-y-4">
      <div>
        <label for="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
        <input 
          type="text" 
          id="first_name" 
          name="first_name" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your first name" 
          required/>
      </div>

      <div>
        <label for="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input 
          type="text" 
          id="last_name" 
          name="last_name" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your last name" 
          required/>
      </div>

      <div>
        <label for="last_name" className="block text-sm font-medium text-gray-700">Username</label>
        <input 
          type="text" 
          id="last_name" 
          name="last_name" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your last name" 
          required/>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email" 
          required />
      </div>

      <div>
        <label for="profile_image" className="block text-sm font-medium text-gray-700">Profile Image</label>
        <input 
          type="file" 
          id="profile_image" 
          name="profile_image" 
          className="mt-1 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          accept="image/*"/>
      </div>

      <div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Update Profile
        </button>
      </div>
    </form>
  </div>
</div>
    </div>   

  )
}

export default Profile