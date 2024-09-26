'use client';  // Add this at the top to make it a Client Component

import React, { useRef, useState } from 'react';
import servicesData from './/servicesData.js';

function ServicesFilter() {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const searchRef = useRef('');
  const categoryRef = useRef('All');

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = searchRef.current.value.toLowerCase();
    const selectedCategory = categoryRef.current.value;

    const newFilteredServices = servicesData.filter((service) => {
      const isCategoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
      const isSearchMatch = service.name.toLowerCase().includes(searchTerm);
      return isCategoryMatch && isSearchMatch;
    });

    setFilteredServices(newFilteredServices);
  };

  return (
    <div className="services-filter">
      <h1>Our Services</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search services..."
          ref={searchRef}
          className="search-input"
        />

        <select ref={categoryRef} className="category-filter">
          <option value="All">All Categories</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
          <option value="Industrial">Industrial</option>
        </select>

        <button type="submit">Filter</button>
      </form>

      <div className="services-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="category-tag">{service.category}</span>
            </div>
          ))
        ) : (
          <p>No services found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default ServicesFilter;
