import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer navigation links */}
        <ul className="flex gap-6 mb-4">
          <li>
            <Link href="/recommendations" className="text-white hover:text-gray-400">
              Recommendations
            </Link>
          </li>
          <li>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Electrical Pros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
