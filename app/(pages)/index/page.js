"use client";  // Ensure client-side component

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
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold">Welcome to Electrical Pros</h1>
        <p className="mt-4 text-lg">
          We offer professional electrical consultancy and design services tailored to your needs.
        </p>
      </section>

      {/* Additional content can go here */}
      <section className="hero">
        <div className="hero-content text-center">
          <h2 className="text-4xl font-semibold">Expert Electrical Consulting</h2>
          <p className="mt-2 text-lg">Empowering your business with expert electrical solutions.</p>
          <a href="/discover">
            <button className="bg-blue-500 text-white py-3 px-6 mt-4 rounded hover:bg-blue-600 transition">
              Discover More
            </button>
          </a>
        </div>
        <div className="additional-info text-center mt-8">
          <p className="text-lg leading-8 mx-auto max-w-3xl">
            At Electrical Pros, we offer tailored consulting services to meet all your electrical needs, 
            from planning to execution, ensuring the highest standards of safety and efficiency. Our expert 
            team is dedicated to delivering innovative solutions that drive your projects forward.
          </p>
          <Image
            src="/home.jpg" 
            alt="Electrical Consultancy"
            width={600}
            height={400}
            className="mx-auto mt-8 rounded-lg shadow-lg"
          />
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
