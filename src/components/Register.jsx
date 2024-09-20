'use client';
import React, { useState, useCallback } from 'react';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
        setShowPassword((prevState) => !prevState);
    }, []);

    const inputClassNames =
        "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-800" +
        "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

    const buttonClassNames =
        "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
        "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">REGISTRATION</h2>

                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={inputClassNames}
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={inputClassNames}
                            placeholder="Enter Your Email ID"
                            required
                        />
                    </div>
                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="number"
                            id="phone"
                            className={inputClassNames}
                            placeholder="Enter Your Phone"
                            required
                        />
                    </div>
                    {/* Is Teacher */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Is Teacher</label>
                        <div className="mt-1 flex flex-row justify-evenly">
                            <div className="flex">
                                <input type="radio" name="isTeacher" value="yes" className="mr-2 text-gray-800" /> <span className='text-gray-800'> Yes</span>
                            </div>
                            <div className="flex">
                            <input type="radio" name="isTeacher" value="no" className=" mr-2 text-gray-800" /> <span className='text-gray-800'> No</span>
                            </div>
                        </div>
                    </div>
                    {/* Class */}
                    <div>
                        <label htmlFor="selectClass" className="block text-sm font-medium text-gray-700">Class</label>
                        <select id="selectClass" className={inputClassNames}>
                            <option value="" disabled selected>Select Your Class</option>
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
                    <div>
                        <label htmlFor="selectDisability" className="block text-sm font-medium text-gray-700">Disability</label>
                        <select id="selectDisability" className={inputClassNames}>
                            <option value="" disabled selected>Select Your Disability</option>
                            <option value="0">None</option>
                            <option value="1">Dyslexia</option>
                            <option value="2">ADHD</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1 relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className={inputClassNames}
                                placeholder="Enter Password"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                onClick={togglePasswordVisibility}
                                aria-label="Toggle Password Visibility"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-3.582-9-8s4-8 9-8a9.932 9.932 0 015.435 1.577M15 12a3 3 0 11-6 0 3 3 0 016 0zm7 0c0 4.418-4 8-9 8a9.932 9.932 0 01-5.434-1.577M3 3l18 18" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.774 2.58-2.475 4.744-4.681 6.015m-4.86 1.375A10.046 10.046 0 0112 19c-5 0-9-3.582-9-8 0-1.294.266-2.528.744-3.627" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="mt-1 relative">
                            <input
                                type="password"
                                id="confirm_password"
                                className={inputClassNames}
                                placeholder="Reenter Password"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className={buttonClassNames}>
                            Submit
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Back To Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
