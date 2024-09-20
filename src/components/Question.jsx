"use client";
import React, { useState, useCallback } from "react";

const Question = () => {
  const inputClassNames =
    "mt-1 block w-full px-3 py-2 bg-gray-700  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-200 " +
    "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const buttonClassNames =
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
    "bg-blue-600 hover:bg-[#0A8DC7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Questions
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="q2"
              className="block text-sm font-medium text-gray-200"
            >
              What is your favourite subject?
            </label>
            <div className="mt-1 relative">
              <input type="text" id="q2" className={inputClassNames} required />
            </div>
          </div>
          <div>
            <label
              htmlFor="q1"
              className="block text-sm font-medium text-gray-200"
            >
              What do you want to become?
            </label>
            <input
              type="text"
              id="q1"
              
              className={inputClassNames}
              required
            />
          </div>
          <div>
            <label
              htmlFor="q1"
              className="block text-sm font-medium text-gray-200"
            >
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

export default Question;
