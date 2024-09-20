'use client';
import { useState } from 'react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-semibold text-center text-[#05B0FC] mb-6">REGISTRATION</h2>

        <form className="space-y-4 w-full">
          <div className="w-auto flex gap-5 justify-evenly items-center">
            {/* Name */}
            <div className="w-full">
              <label htmlFor="name" className="w-full block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Your Name"
                required
              />
            </div>
            {/* Email */}
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Your Email ID"
                required
              />
            </div>
          </div>

          <div className="w-auto flex gap-5 justify-evenly items-center">
            {/* Phone */}
            <div className="w-full">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="number"
                id="phone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            {/* Is Teacher */}
            <div className="w-full">
              <label htmlFor="isTeacher" className="block text-sm font-medium text-gray-700">Are You a Student?</label>
              <select
                id="isTeacher"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
          </div>

          <div className="w-auto flex gap-5 justify-evenly items-center">
            {/* Class */}
            <div className="w-full">
              <label htmlFor="selectClass" className="block text-sm font-medium text-gray-700">Class</label>
              <select
                id="selectClass"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="" disabled defaultValue={0}>Select Your Class</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            {/* Disability */}
            <div className="w-full">
              <label htmlFor="selectDisability" className="block text-sm font-medium text-gray-700">Disability</label>
              <select
                id="selectDisability"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="0">None</option>
                <option value="1">Dyslexia</option>
                <option value="2">ADHD</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>

          <div className="w-auto flex gap-5 justify-evenly items-center">
            {/* Password */}
            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="w-full">
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Re-Enter Password"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#05B0FC] hover:bg-[#0A8DC7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-[#05B0FC] hover:text-blue-500">Back To Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
