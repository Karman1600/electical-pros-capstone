"use client"; 
import React, { useState, useEffect } from 'react';

function DiscoverMore() {
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

  const projects = [
    {
      name: 'Commercial Office Building Electrical Design',
      description: 'A complete electrical design solution for a 10-story commercial building.',
      rating: 4.8,
       
    },
    {
      name: 'Residential Complex Electrical System',
      description: 'Electrical system design and implementation for a 100-unit residential complex.',
      rating: 4.5,
       
    },
    {
      name: 'Industrial Plant Power Distribution',
      description: 'Power distribution setup for a major industrial plant to improve efficiency.',
      rating: 4.7,
      
    },
    {
      name: 'Healthcare Facility Electrical Upgrade',
      description: 'Electrical upgrade for a major healthcare facility, improving safety and performance.',
      rating: 4.0,
      
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 relative">
      {/* Company Information Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Electrical-Pros</h1>
        <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          At Electrical-Pros, we have built a reputation for delivering cutting-edge electrical consulting services. 
          Our expert team handles a wide range of projects across multiple sectors, including commercial, residential, 
          industrial, and healthcare. We believe in providing solutions that combine safety, innovation, and cost-efficiency.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Past Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} p-6 rounded-lg shadow-lg relative group hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center text-center`}
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition duration-300">{project.name}</h3>
              
              {/* Hidden Description on Default, Visible on Hover */}
              <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                {project.description}
              </p>
              
              <div className="text-yellow-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Rating: {project.rating} / 5
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Button */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Interested in Working with Us?</h2>
        <p className="text-lg text-gray-600 mb-6">Click the button below to book an appointment with our experts.</p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
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
    </div>
  );
}

export default DiscoverMore;
