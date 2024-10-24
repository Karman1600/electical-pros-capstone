'use client';  // Ensure client-side component
import React, { useEffect } from 'react';
import Link from 'next/link';

// Google Maps configuration
const containerStyle = {
  width: '100%',
  height: '400px',
};

const location = {
  lat: 49.017204,  // Latitude for 3315 Siskin Drive, Abbotsford, B.C.
  lng: -122.360827, // Longitude for 3315 Siskin Drive, Abbotsford, B.C.
};

function AboutUs() {

  useEffect(() => {
    // Ensure that Google Maps API is available
    if (typeof google !== 'undefined' && google.maps) {
      // Initialize the map
      const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15,
      });

      // Create a new AdvancedMarkerElement
      const markerElement = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: location,
        title: '3315 Siskin Drive, Abbotsford, B.C.', // Marker title (tooltip)
      });
    } else {
      console.error("Google Maps API is not loaded correctly.");
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-100 p-5">
      {/* About Us Section */}
      <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">About Us</h1>
        <p className="text-lg leading-8 text-gray-600">
          Our consulting team leverages our diverse expertise to tackle various engineering challenges. 
          With a robust portfolio of projects spread across Abbotsford, British Columbia, we have established a track record of success.
        </p>
      </section>

      {/* Google Maps Section */}
      <section className="mt-10">
      <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3315%20Siskin%20Drive,%20Abbotsford,%20B.C.+(Electrical-Pros)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </section>

      {/* Contact Us Button */}
      <section className="flex justify-center mt-10">
        <Link href="/ContactUs">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition">
              Contact Us
          </button>
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-10 mt-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-800">F.A.Q.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How we charge?</h3>
            <p className="text-lg leading-8 text-gray-600">
              We implement a fixed-fee structure for all our services, providing clear cost transparency and ensuring 
              you understand all expenses upfront.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">How fast we can deliver?</h3>
            <p className="text-lg leading-8 text-gray-600">
              For projects under 5,000 sq ft, we complete them within one month. For projects over 5,000 sq ft, the timeline 
              is estimated based on the specifics of the project.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Where are we?</h3>
            <p className="text-lg leading-8 text-gray-600">
              Abbotsford, B.C. We welcome clients to meet with us in person, and we also offer on-site services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">What software we use?</h3>
            <p className="text-lg leading-8 text-gray-600">
              SKM power tools, AutoCAD, ETAP electrical power systems analyzing tools, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="max-w-4xl mx-auto p-10 mt-10 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <p className="text-lg leading-8 mb-2 text-gray-600">Phone: (778) 908-7119</p>
          <p className="text-lg leading-8 mb-2 text-gray-600">Physical Address: 3315 Siskin Drive, Abbotsford, B.C.</p>
          <p className="text-lg leading-8 mb-2 text-gray-600">Email: Electricalproshiring@outlook.com</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
