import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // for navigation after successful login

const SellerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Here, you can add logic to verify the login credentials
    // For simplicity, we'll assume a successful login with dummy values.
//     if (username === 'admin' && password === 'password') {
//       history.push('/dashboard'); // Redirect to the dashboard page after login
//     } else {
//       setError('Invalid username or password');
//     }
  };

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
