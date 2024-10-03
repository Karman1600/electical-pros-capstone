import React from 'react';

function DiscoverMore() {
  
  const projects = [
    {
      name: 'Commercial Office Building Electrical Design',
      description: 'A complete electrical design solution for a 10-story commercial building.',
      rating: 4.8
    },
    {
      name: 'Residential Complex Electrical System',
      description: 'Electrical system design and implementation for a 100-unit residential complex.',
      rating: 4.5
    },
    {
      name: 'Industrial Plant Power Distribution',
      description: 'Power distribution setup for a major industrial plant to improve efficiency.',
      rating: 4.7
    },
    {
      name: 'Healthcare Facility Electrical Upgrade',
      description: 'Electrical upgrade for a major healthcare facility, improving safety and performance.',
      rating: 4.9
    }
  ];

  return (
    <div className="discover-more">
      {/* Company Information Section */}
      <section className="company-info">
        <h1>About Electrical-Pros</h1>
        <p>
          At Electrical-Pros, we have built a reputation for delivering cutting-edge
          electrical consulting services. Our expert team handles a wide range of projects
          across multiple sectors, including commercial, residential, industrial, and healthcare.
          We believe in providing solutions that combine safety, innovation, and cost-efficiency.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Past Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="rating">Rating: {project.rating} / 5</div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Button */}
      <section className="appointment">
        <h2>Interested in Working with Us?</h2>
        <p>Click the button below to book an appointment with our experts.</p>
        <button >
          Book Appointment
        </button>
      </section>

      
    </div>
  );
}

export default DiscoverMore;
