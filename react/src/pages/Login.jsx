import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axiosInstance from '../api';
import { useAuth } from '../AuthContext';

const Login = () => {
  const { setUser, csrfToken } = useAuth();
	const [error, setError] = useState(null);
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      await csrfToken();
      try {
        const response = await axiosInstance.post('/login', {
          email,
          password,
        });
  
        if (response.status === 200) {
          setUser(response.data.user);
          return <Navigate to="/home" />;
        }
      } catch (error) {
        // Handle login error, e.g., show an error message
        console.error('Login failed:', error.message);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>
        <Link to={'/signup'}>
        <span>Signup Here</span></Link>
      </form>
    </div>
  </div>
  )
}

export default Login