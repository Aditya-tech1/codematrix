'use client';
import React, { useState, useCallback } from 'react';

const Login = () => {
  

 

 

  const inputClassNames =
    "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-800 " +
    "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const buttonClassNames =
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
    "bg-[#05B0FC] hover:bg-[#0A8DC7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-[#05B0FC] mb-6">
          Questions 
        </h2>
        <form className="space-y-4">
          
          <div>
            <label htmlFor="q2" className="block text-sm font-medium text-gray-700">
              What is your favourite subject?
            </label>
            <div className="mt-1 relative">
              <input
                type='text'
                id="q2"
                className={inputClassNames}
                required
              />
             
            </div>
          </div>
          <div>
            <label htmlFor="q1" className="block text-sm font-medium text-gray-700">
              What do you want to become?
            </label>
            <input
              type="text"
              id="q1"
              
              onChange={(e) => setEmail(e.target.value)}
              className={inputClassNames}
              required
            />
          </div>
          <div>
            <label htmlFor="q1" className="block text-sm font-medium text-gray-700">
              Why do you want to become?
            </label>
            <textarea name="" className={inputClassNames} id=""></textarea>
          </div>
          <div>
            <button type="submit" className={buttonClassNames}>
              Next
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
