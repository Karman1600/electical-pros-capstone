import React from 'react';
import Link from 'next/link'; // Importing Next.js Link component

function AboutUs() {
  return (
    <div className="font-sans text-gray-800 bg-[#f9f9f9] p-5">
      {/* About Us Section */}
      <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">About Us</h1>
        <p className="text-lg leading-8 mb-4">
          Our consulting team leverages our diverse expertise to tackle various engineering challenges. 
          With a robust portfolio of projects spread across Abbotsford, British Columbia, we have established a track record of success.
        </p>
        <p className="text-lg leading-8 mb-4">
          Our client base spans across multiple sectors including healthcare and treatment centers, residential complexes, 
          commercial businesses, retail outlets, and industrial sites. At the heart of our practice is the belief that 
          integrating cutting-edge materials and technologies with established engineering principles is crucial for 
          developing sustainable and cost-effective solutions tailored for today's built environment.
        </p>
      </section>

      {/* Background Image with Contact Us Button */}
      <section
        className="flex justify-center items-center bg-cover bg-center h-96 mt-10"
        style={{
          backgroundImage: 'url("/images/background-image.jpg")',
        }}
      >
        <Link href="/ContactUs">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-orange-600">
            Contact Us
          </button>
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-10 mt-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-800">F.A.Q.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">How we charge?</h3>
            <p className="text-lg leading-8">
              We implement a fixed-fee structure for all our services, providing clear cost transparency and ensuring 
              you understand all expenses upfront.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How fast we can deliver?</h3>
            <p className="text-lg leading-8">
              For projects under 5,000 sq ft, we complete them within one month. For projects over 5,000 sq ft, the timeline 
              is estimated based on the specifics of the project.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Where are we?</h3>
            <p className="text-lg leading-8">
              Abbotsford, B.C. We welcome clients to meet with us in person, and we also offer on-site services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What software we use?</h3>
            <p className="text-lg leading-8">
              SKM power tools, AutoCAD, ETAP electrical power systems analyzing tools, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="max-w-4xl mx-auto p-10 mt-10 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <p className="text-lg leading-8 mb-2">Phone: (778) 908-7119</p>
          <p className="text-lg leading-8 mb-2">Physical Address: 3315 Siskin Drive, Abbotsford, B.C.</p>
          <p className="text-lg leading-8 mb-2">Email: Electricalproshiring@outlook.com</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
