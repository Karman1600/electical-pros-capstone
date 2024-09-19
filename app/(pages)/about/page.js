import React from 'react';

function AboutUs() {
  return (
    <div className="font-sans text-gray-800 bg-[#d4d1bb] p-5">
      {/* About Us Section */}
      <section className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">About Us</h1>
        <p className="text-lg leading-8 mb-4">
          Our consulting team leverages our diverse expertise to tackle various engineering challenges.
          With a robust portfolio of projects spread across Calgary, Edmonton, and other Alberta locations,
          as well as several projects in British Columbia and Saskatchewan, we have established a track record of success.
        </p>
        <p className="text-lg leading-8 mb-4">
          Our client base spans across multiple sectors including healthcare and treatment centers, residential complexes, 
          commercial businesses, retail outlets, and industrial sites. At the heart of our practice is the belief that 
          integrating cutting-edge materials and technologies with established engineering principles is crucial for 
          developing sustainable and cost-effective solutions tailored for today's built environment.
        </p>
      </section>

      {/* Our Journey Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#d4d1bb] p-10 mt-10">
        <div className="flex-1 max-w-md mr-5">
          <h2 className="text-3xl font-bold mb-5">Our Journey</h2>
          <p className="text-lg leading-8 mb-4">
            We've been around for quite a while and have been continuously delivering quality service since [insert year]. 
            Our journey began with a small team of dedicated engineers, and today we are proud to be a leader in electrical 
            consultancy across Western Canada, providing bespoke engineering and design results of the highest level.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
