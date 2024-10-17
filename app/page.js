// app/page.js
import React from "react";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer"; // Import Footer component

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <section className="text-center py-10">
          <h1 className="text-5xl font-bold">Welcome to Electrical Pros</h1>
          <p className="mt-4 text-lg">
            We offer professional electrical consultancy and design services tailored to your needs.
          </p>
          <Image
            src="/home_image.png" // Replace with your image path
            alt="Electrical Consultancy"
            width={600}
            height={400}
            className="mx-auto mt-8"
          />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
