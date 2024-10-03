import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Electrical-Pros</div>
        <ul className="flex space-x-6 items-center text-white">
          <li><Link href={"/index"}>Home</Link></li>
          <li><Link href={"/Services"}>Services</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/ContactUs"}>Contact Us</Link></li>
          
          <li>
            <Link href={"/sign-in"}>
              <Image src={"/profile.png"} width={50} height={50} alt="Profile" className="rounded-full"/>
            </Link>
          </li>
          <li>
            <Link href={"/search"}>
              <Image src={"/search.png"} width={20} height={20} alt="Search" />
            </Link>
          </li>

          {auth.currentUser ? (
            <li>
              <Link
                href={"/dashboard"}
                className="px-4 py-2 text-gray-900 bg-white rounded-md hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href={"/sign-in"}
                className="px-4 py-2 text-gray-900 bg-white rounded-md hover:bg-gray-100"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
