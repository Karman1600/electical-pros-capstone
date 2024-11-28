"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll back to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section 
        className="text-center py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/home.jpg")' }}
      >
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Welcome to Electrical Pros</h1>
        <p className="mt-4 text-xl drop-shadow-md">
          We offer professional electrical consultancy and design services tailored to your needs.
        </p>
      </section>

      <section className="hero py-16 bg-white">
  <div className=" mx-auto px-6 lg:px-12">
    {/* Section Heading */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Expert Electrical Consulting
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Empowering your business with innovative and expert electrical solutions.
      </p>
      <a href="/discover">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
          Discover More
        </button>
      </a>
    </div>

    {/* Benefits Section */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <div className="text-blue-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.875 18.825L19.8 9.75H13.5l1.875-7.575L5.25 14.25h6.3l-1.875 7.575z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Innovative Solutions
        </h3>
        <p className="text-gray-600">
          We bring cutting-edge designs and innovative thinking to every project, tailored to meet your unique needs.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <div className="text-blue-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.28 0 4.2-1.863 4.2-4.2 0-2.337-1.92-4.2-4.2-4.2s-4.2 1.863-4.2 4.2c0 2.337 1.92 4.2 4.2 4.2zm0 1.8c-4.08 0-7.2 2.253-7.2 5.4 0 .12 0 .225.015.315a.903.903 0 00.405.585c.285.18.645.3 1.08.3h11.4c.435 0 .795-.12 1.08-.3.225-.18.39-.45.405-.585.015-.09.015-.195.015-.315 0-3.147-3.12-5.4-7.2-5.4z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Global Safety Standards
        </h3>
        <p className="text-gray-600">
          Adhering to international safety regulations, we ensure all our solutions meet the highest standards.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <div className="text-blue-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25h18m-18 4.5h18m-18 4.5h18"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Custom-Tailored Plans
        </h3>
        <p className="text-gray-600">
          From small-scale setups to large industrial projects, we create personalized plans that fit your goals.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Top
        </button>
      )}
    </>
  );
}

export default Home;
