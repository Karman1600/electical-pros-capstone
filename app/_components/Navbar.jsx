"use client"; 

import Link from "next/link";
import React, { useEffect } from "react";
import Modes from './modes'; 
import { useUserAuth } from "@/app/lib/auth-context";
import { auth } from "@/app/lib/firebase";

function Navbar() {
  const { user } = useUserAuth();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (user) {
        console.log("Logged IN");
      } else {
        console.log("User is not logged in");
      }
    };

    checkUserLoggedIn();
  }, [user]);

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Electrical-Pros</div>
      <ul className="flex space-x-6 items-center text-white">
        <li>
          <Link href={"/index"}>Home</Link>
        </li>
        <li>
          <Link href={"/Services"}>Services</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/ContactUs"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/search"}>
            <svg
              className="svg-icon search-icon size-6"
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g className="search-path" fill="none" stroke="#848F91">
                <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </Link>
        </li>
        {auth.currentUser ? (
          <li className="mt-1">
            <Link
              href={"/dashboard"}
              className="font-light text-xl justify-center items-center mt-2 p-2 bg-slate-100 rounded-2xl hover:text-blue-600 hover:bg-slate-50"
            >
              Dashboard
            </Link>
          </li>
        ) : (
          <li className="mt-1">
            <Link
              href={"/sign-in"}
              className="font-light text-xl justify-center items-center mt-2 p-2 bg-slate-100 rounded-2xl hover:text-blue-600 hover:bg-slate-50"
            >
              Sign In
            </Link>
          </li>
        )}
        {/* Add the mode toggle button */}
        <Modes />
      </ul>
    </nav>
  );
}

export default Navbar;
