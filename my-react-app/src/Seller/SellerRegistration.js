import  { useState } from "react";
import axios from "axios";
import { live } from '../config';


const Registration = () => {
  const [formError, setformError] = useState(false)
  const [errormsg, seterrormsg] = useState('')
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    mobile: "",
    address: "",
    password:""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
// console.log(formData)
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.username) {
      newErrors.username = "Username is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    }
    // console.log(axios)
    axios.post(`${live}api/vendor/registration/`, formData)
    .then((response) => {
      console.log(response.data, "skvbh");
      if (response.data) {
        setFormData({
          email: "",
          username: "",
          password: "",
          first_name: "",
          last_name: '',
          mobile: ''
        });
        setformError(true);
        seterrormsg(response.data.msg);
      } else {
        setformError(false);
        seterrormsg(response.data.msg);
        console.log(localStorage.getItem('username'));
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setformError(true);
      seterrormsg('An error occurred. Please try again.');
    });
  }  

  return (
    <div className="flex justify-center items-center m-24 ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <p className="text-red-800 text-xl text-center mb-4">{errormsg}</p>

        <h2 className="text-2xl font-bold text-center mb-6" > Seller Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}


          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              id="username"
              name="firstname"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your first"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>


{/* lastname
{/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              lastname
            </label>
            <input
              type="text"
              id="username"
              name="lastname"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your Username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
