import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axiosInstance from '../api';
import { useAuth } from '../AuthContext';
import Loading from '../components/all/Loading';

const Login = () => {
  const { setUser, csrfToken } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    await csrfToken();
    try {
      setLoading(true)
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });

      if (response.status === 201) {
        setLoading(false)
        setUser(response.data.user);
        const { token } = response.data;
        localStorage.setItem('authToken', token);
        // Redirect to home using React Router Navigate component
        // This won't work here directly, consider using state to manage navigation
      }
    } catch (error) {
      setLoading(false)
      // Handle login error by checking response status code
      if (error.response && error.response.status === 401) {
        // Unauthorized - Incorrect credentials
        setError('Email or password is incorrect');
      } else if (error.response.status === 422) {
        setError(error.response.data.message);
      } else {
        // Other errors (network issues, server errors, etc.)
        setError('An error occurred while logging in. Please try again.');
      }
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
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Link to={'/signup'}>
            <span>Signup Here</span>
          </Link>
        </form>
      </div>
      {loading && <Loading />}
    </div>

  );
};

export default Login;
