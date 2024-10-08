"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { BackIcon } from "@/icons/icon";
import Question from "./Question";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [next,setNext] = useState(false);
  const dataref = useRef(null);

  const NextBtn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    dataref.current = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      isteacher: formData.get("isteacher"),
      class_stu: formData.get("selectClass"),
      disability: formData.get("selectDisability"),
      password: formData.get("password"),
    };
    console.log(dataref.current);
    setNext(true);
  };

  return (
    <div className="min-h-screen  bg-gray-900 flex flex-col gap-2 items-center justify-center">
      <Link
        href={"/"}
        className="absolute left-3 top-3 text-blue-600 font-bold flex items-center text-sm hover:cursor-pointer"
      >
        <BackIcon size={30} /> Back
      </Link>
      {!next ? (
        <div className="bg-gray-800 border-gray-700 p-8 rounded-lg shadow-md w-1/2 relative">
          <Link
            href={"/"}
            className="absolute top-1 right-4 text-blue-600 font-bold flex items-center text-sm hover:cursor-pointer"
          >
            {/* <CrossIcon className="absolute h-6 w-6 cursor-pointer" /> */}
          </Link>
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            Create an Account
          </h2>

          <form id="register" className="space-y-4 w-full" onSubmit={NextBtn}>
            <div className="w-auto flex gap-5 justify-evenly items-center">
              {/* Name */}
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="w-full block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white   rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              {/* Email */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white   rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Your Email ID"
                  required
                />
              </div>
            </div>

            <div className="w-auto flex gap-5 justify-evenly items-center">
              {/* Phone */}
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700  rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              {/* Is Teacher */}
              <div className="w-full">
                <label
                  htmlFor="isteacher"
                  className="block text-sm font-medium text-gray-200"
                >
                  Are You a Student?
                </label>
                <select
                  id="isteacher"
                  name="isteacher"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            <div className="w-auto flex gap-5 justify-evenly items-center">
              {/* Class */}
              <div className="w-full">
                <label
                  htmlFor="selectClass"
                  className="block text-sm font-medium text-gray-200"
                >
                  Class
                </label>
                <select
                  id="selectClass"
                  name="selectClass"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="9">9th </option>
                  <option value="10">10th </option>
                  <option value="11">11th </option>
                  <option value="12">12th </option>
                </select>
              </div>
              {/* Disability */}
              <div className="w-full">
                <label
                  htmlFor="selectDisability"
                  className="block text-sm font-medium text-gray-200"
                >
                  Disability
                </label>
                <select
                  id="selectDisability"
                  name="selectDisability"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="None">None</option>
                  <option value="Dyslexia">Dyslexia</option>
                  <option value="ADHD">ADHD</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="w-auto flex gap-5 justify-evenly items-center">
              {/* Password */}
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="block w-full px-3 py-2 bg-gray-700  rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {/* Confirm Password */}
              <div className="w-full">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="block w-full px-3 py-2 bg-gray-700  rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Re-Enter Password"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
              </button>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Back To Login
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <Question dataref={dataref} setNext={setNext}/>
      )}
    </div>
  );
}
