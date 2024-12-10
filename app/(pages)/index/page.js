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

      {/* Hero Section */}
      <section className="hero py-8 bg-gradient-to-b from-white to-gray-50">
        <div className=" mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
              Expert Electrical Consulting
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Empowering your business with innovative and expert electrical solutions.
            </p>
            <a href="/discover">
              <button className="bg-[#1a365d] text-white py-4 px-10 rounded-full shadow-lg hover:bg-[#1a365d]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium">
                Discover More
              </button>
            </a>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 text-[#1a365d]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Innovative Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We bring cutting-edge designs and innovative thinking to every project, tailored to meet your unique needs.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 text-[#1a365d]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Global Safety Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Adhering to international safety regulations, we ensure all our solutions meet the highest standards.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6 text-[#1a365d]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Custom-Tailored Plans</h3>
              <p className="text-gray-600 leading-relaxed">
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
          className="fixed bottom-8 right-8 bg-[#1a365d] hover:bg-[#1a365d]/90 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:ring-offset-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default Home;