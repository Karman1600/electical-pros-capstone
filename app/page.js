// app/page.js
import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from './context/themes'; // Ensure this path is correct

export default function Home() {
  const { mode } = useContext(ThemeContext); // Get the current theme mode

  return (
    <main className={`flex flex-col min-h-screen ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Main content */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold">Welcome to Electrical Pros</h1>
        <p className="mt-4 text-lg">
          We offer professional electrical consultancy and design services tailored to your needs.
        </p>
      </section>

      {/* Additional content can go here */}
      <section className="hero">
        <div className="hero-content text-center">
          <h2>Expert Electrical Consulting</h2>
          <p>Empowering your business with expert electrical solutions.</p>
          <a href="/discover">
            <button>Discover more</button>
          </a>
        </div>
        <div className="additional-info text-center">
          <p>
            At Electrical Pros, we offer tailored consulting services to meet all
            your electrical needs, from planning to execution, ensuring the
            highest standards of safety and efficiency. Our expert team is
            dedicated to delivering innovative solutions that drive your projects
            forward.
          </p>
          <Image
            src="/home_image.png" // Ensure this path is correct
            alt="Electrical Consultancy"
            width={600}
            height={400}
            className="mx-auto mt-8"
          />
        </div>
      </section>
    </main>
  );
}
