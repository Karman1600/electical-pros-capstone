import Link from "next/link";
import React from "react";
import Modes from './modes'; 

function Footer() {
  return (
    <footer className="bg-slate-900 text-blue p-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer navigation links */}
        <ul className="flex gap-6 mb-4">
          <li>
            <Link href="/recommendations" className="text-black hover:text-gray-700">
              Recommendations
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <Modes /> {/* Using the Mode component for theme toggling */}

        {/* Copyright */}
        <div className="text-center">
          <p className="text-black">
            &copy; {new Date().getFullYear()} Electrical Pros. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
