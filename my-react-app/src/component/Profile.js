import React, { useEffect, useState } from "react";
import Slidbar from './Slidbar';
import axios from "axios";
import { live } from '../config'

const Profile = () => {
  const [userid, setuserid] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [customerimg, setcustomerimg] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({});

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`${live}api/customer/${user_id}`)
      .then(function (response) {
        setuserid(response.data.user.id);
        setFirstname(response.data.user.first_name);
        setlast_name(response.data.user.last_name);
        setusername(response.data.user.username);
        setemail(response.data.user.email);
        setmobile(response.data.mobile);
        setcustomerimg(response.data.profile_img);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Handle file input change for profile image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setcustomerimg(fileURL); // Set the selected image preview
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check if required fields are filled
    if (!first_name) {
      newErrors.first_name = "First name is required.";
      isValid = false;
    }

    if (!last_name) {
      newErrors.last_name = "Last name is required.";
      isValid = false;
    }

    if (!username) {
      newErrors.username = "Username is required.";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    if (!mobile) {
      newErrors.mobile = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Phone number must be 10 digits.";
      isValid = false;
    }

    // Check for profile image
    if (!customerimg) {
      newErrors.profile_img = "Profile image is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission until validation is passed

    if (validateForm()) {
      // Create FormData object
      const formData = new FormData();
      formData.append('id', userid);
      formData.append('mobile', mobile);
      
      // If a new image is selected, append it to the FormData
      if (customerimg && typeof customerimg !== 'string') {
        formData.append('profile_img', customerimg);  // Append the image file
      }

      // Submit the image and mobile update request
      axios.patch(`${live}api/customer/${user_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      // Create another FormData object for user details (name, username, email)
      const formUserData = new FormData();
      formUserData.append('first_name', first_name);
      formUserData.append('last_name', last_name);
      formUserData.append('username', username);
      formUserData.append('email', email);

      // Submit the user details update request
      axios.patch(`${live}api/user_update/${userid}`, formUserData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex shadow-2xl m-10 w-auto">
      <div className="mt-16">
        <Slidbar></Slidbar>
      </div>

      <div className="flex items-center justify-center p-8 ml-14">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <p className="text-center text-2xl font-bold ">
            Welcome <span className="text-blue-800">{username}</span>
          </p>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Update Profile
          </h2>
        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
              )}
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                id="profile_image"
                name="profile_image"
                className="mt-1 block w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                accept="image/*"
                onChange={handleFileChange}
              />
              {errors.profile_img && (
                <p className="text-red-500 text-xs mt-1">{errors.profile_img}</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <img
                src={customerimg || 'default-image-url'}
                className="rounded-full h-32"
                alt="Profile"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
