import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-36 bg-navbar flex shadow-lg">
      <div className="flex m-4 absolute left-10 ">
        <Link href={"/"}>
          <Image
            src={"/logo_EP.png"}
            width={120}
            height={120}
            alt="Logo"
          ></Image>
        </Link>
        {/* <span className='mt-9 ml-5'>
                Electrical Pros
            </span> */}
      </div>
      <div className="flex absolute right-20 m-12">
        <ul className="flex gap-10">
          <li>
            <Link href={"/"} className="font-thin text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="font-thin text-2xl">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="font-thin text-2xl">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;