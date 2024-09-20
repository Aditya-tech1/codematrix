"use client";
import React, { useState, useCallback, useRef } from "react";
import WarningModel from "./WarningModel";
import { CrossIcon, MiniloadIcon } from "@/icons/icon";
import Link from "next/link";
import { BackIcon } from "@/icons/icon";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [warn, setWarn] = useState(false);
  const messegeref = useRef("Email or password is incorrect");
  const [isfetching, setIsfetching] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      setIsfetching(true);
      e.preventDefault();
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        if (response.status === 401) {
          setWarn(true);
          messegeref.current = "Email or password is incorrect";
        } else if (response.status === 500) {
          setWarn(true);
          messegeref.current = "Failed to login user";
        }
        setIsfetching(false);
        console.log(result);
        return result.status;
      } catch (error) {
        console.error("Fetch error:", error);
        setIsfetching(false);
        return result.status;
      }
    },
    [email, password]
  );

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const inputClassNames =
    "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-800 " +
    "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const buttonClassNames =
    "w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
    "bg-[#05B0FC] hover:bg-[#0A8DC7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col gap-2 items-center justify-center">
      <Link
        href={"/"}
        className="absolute left-3 top-3 text-[#05B0FC] font-bold flex items-center text-sm hover:cursor-pointer"
      >
        <BackIcon size={30} /> Back
      </Link>

      <div className="bg-white p-8 rounded-lg shadow-md w-96 relative">
      <Link
        href={"/"}
        className="absolute top-1 right-4 text-[#05B0FC] font-bold flex items-center text-sm hover:cursor-pointer"
      >
        <CrossIcon className="absolute h-6 w-6 cursor-pointer" />
      </Link>
        <h2 className="text-2xl font-semibold text-center text-[#05B0FC] mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClassNames}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-3.582-9-8s4-8 9-8a9.932 9.932 0 015.435 1.577M15 12a3 3 0 11-6 0 3 3 0 016 0zm7 0c0 4.418-4 8-9 8a9.932 9.932 0 01-5.434-1.577M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.774 2.58-2.475 4.744-4.681 6.015m-4.86 1.375A10.046 10.046 0 0112 19c-5 0-9-3.582-9-8 0-1.294.266-2.528.744-3.627"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isfetching ? true : false}
              className={buttonClassNames}
            >
              {isfetching ? <MiniloadIcon className="h-4 w-4 animate-spin" /> : ""}
              {isfetching ? "Please wait!" : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#05B0FC] hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#05B0FC] hover:text-blue-500"> 
            Don`t have an account? Register
          </a>
        </div>
      </div>
      {warn && <WarningModel setWarn={setWarn} messege={messegeref.current} />}
    </div>
  );
};

export default Login;
