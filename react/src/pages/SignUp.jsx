import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axiosInstance from '../api';
import { useAuth } from '../AuthContext';

const SignUp = () => {
  const { setUser } = useAuth();
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data.user);
        return <Navigate to="/login" />;
      }

    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Signup failed:', error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Signup</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Choose a name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
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
              placeholder="Choose a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
          >
            Signup
          </button>
          <Link to={'/login'}>
            <span>Already Register?</span></Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp