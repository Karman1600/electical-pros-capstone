import Image from "next/image";
import NavBar from "./_components/Navbar";
import React from 'react';

function Home() {
  return (
    <>
      

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Expert Electrical Consulting</h1>
          <p>Empowering your business with expert electrical solutions.</p>
          <a href="/discover">
          <button>Discover more</button>
        </a>
        </div>
        <div className="additional-info">
          <p>
            At Electrical-Pros, we offer tailored consulting services to meet all
            your electrical needs, from planning to execution, ensuring the
            highest standards of safety and efficiency. Our expert team is
            dedicated to delivering innovative solutions that drive your projects
            forward.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
