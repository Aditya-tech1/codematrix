'use client';
import React, { useState, useCallback } from 'react';

const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Login submitted with:', { email, password });
  }, [email, password]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const inputClassNames =
    "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-800 " +
    "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const buttonClassNames =
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
    "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Login to AI Study Plan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClassNames}
              placeholder="you@example.com"
              required
            />
          </div>
       
          <div>
            <button type="submit" className={buttonClassNames}>
              Sign in
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
            Don`t have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
