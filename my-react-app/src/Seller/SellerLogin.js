import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // for navigation after successful login
import axios from 'axios';
const live = "https://multivendor.pythonanywhere.com/"
const SellerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
  
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
  
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
  
    axios.post(`${live}api/vendor/login/`, formData)
      .then((response) => {
        if (response.data && response.data.bool === false) {
          setError(response.data.msg);  // set error message if login fails
        } else if (response.data && response.data.id) {
          // Successful loginconsole.log()
          console.log(response.data)
          localStorage.setItem('vender_login',true);  // store as string
          localStorage.setItem('vender_id', response.data.id);
          localStorage.setItem('vender_username', response.data.user);
          // Redirect to 'Allproduct' page after successful login
          history.push('/seller/dashboard');
        } else {
          setError('Unexpected response from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setError('An error occurred, please try again later.');
      });
  }
  const checkvendor = localStorage.getItem('vender_login')
  if (checkvendor){
    window.location.href='/seller/dashboard'
  }
  return (
    <div className="w-full max-w-xs mx-auto m-24">
      <h2 className="text-2xl font-bold text-center mb-6">Seller Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default SellerLogin;
