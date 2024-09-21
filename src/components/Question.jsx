"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MiniloadIcon } from "@/icons/icon";
import WarningModel from "./WarningModel";
import { BackIcon } from "@/icons/icon";
import Link from "next/link";

const Question = ({dataref,setNext}) => {
  const router = useRouter();
  const inputClassNames =
    "mt-1 block w-full px-3 py-2 bg-gray-700  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 text-gray-200 " +
    "focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  const buttonClassNames =
    "w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white " +
    "bg-blue-600 hover:bg-[#0A8DC7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const [warn, setWarn] = useState(false);
    const messegeref = useRef("something went wrong!");
    const [isfetching, setIsfetching] = useState(false);

    const handlesubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      
      // Log form data to check values
      console.log("Form Data:", {
        favsub: formData.get("q1"),
        what: formData.get("q2"),
        why: formData.get("q3"),
      });

      setIsfetching(true);
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: dataref.current.name,
            email: dataref.current.email,
            phone: dataref.current.phone,
            isteacher: dataref.current.isteacher,
            class_stu: dataref.current.class_stu,
            disability: dataref.current.disability,
            password: dataref.current.password,
            favsub : formData.get("q1"),
            what: formData.get("q2"),
            why: formData.get("q3"),
          }),
        });
        const result = await response.json();
        if (response.status === 500) {
          setWarn(true);
          messegeref.current = "Registeration failed tyr again!";
          setIsfetching(false);
        } else if (response.status === 201) {
          router.push("/dashboard");
        }
  
        console.log(response.status);
        console.log(result);
        return result.status;
      } catch (error) {
        setIsfetching(false);
        console.error("Fetch error:", error);
        return result.status;
      }
    };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <span
        className="absolute left-3 top-3 text-blue-600 font-bold flex items-center text-sm hover:cursor-pointer"
        onClick={() => setNext(false)}
      >
        <BackIcon size={30} /> Back
      </span>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Questions
        </h2>
        <form className="space-y-4" onSubmit={handlesubmit}>
          <div>
            <label
              htmlFor="q1"
              className="block text-sm font-medium text-gray-200"
            >
              What is your favourite subject?
            </label>
            <div className="mt-1 relative">
              <input type="text" id="q1" name="q1" className={inputClassNames} required />
            </div>
          </div>
          <div>
            <label
              htmlFor="q2"
              className="block text-sm font-medium text-gray-200"
            >
              What do you want to become?
            </label>
            <input
              type="text"
              id="q2"
              name="q2"
              className={inputClassNames}
              required
            />
          </div>
          <div>
            <label
              htmlFor="q3"
              className="block text-sm font-medium text-gray-200"
            >
              Why do you want to become?
            </label>
            <textarea name="q3" className={inputClassNames} id="q3" required></textarea>
          </div>
          <div>
            <button type="submit" className={buttonClassNames} disabled={isfetching ? true : false}>
            {isfetching ? (
                  <MiniloadIcon className="h-4 w-4 animate-spin" />
                ) : (
                  ""
                )}
                {isfetching ? "Please wait!" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      {warn && <WarningModel setWarn={setWarn} messege={messegeref.current} />}
    </div>
  );
};

export default Question;