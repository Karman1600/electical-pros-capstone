import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Electrical-Pros</div>
        <ul className="nav-links">
          <li><Link href={"/index"}>Home</Link></li>
          <li><Link href={"/Services"}>Services</Link></li>
          <li><Link href={"/about"}> About </Link> </li>
          <li><Link href={"/ContactUs"}>Contact Us</Link> </li>
          <li>
            <Link href ={"/sign-in"} className="font-light text-xl">
            <Image src={"/profile.png"} width={50} height={50}></Image>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
