import React from 'react';

function AboutUs() {
  return (
    <div style={styles.pageContainer}>
      {/* About Us Section */}
      <section style={styles.section}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.text}>
          Our consulting team leverages our diverse expertise to tackle various engineering challenges.
          With a robust portfolio of projects spread across Calgary, Edmonton, and other Alberta locations,
          as well as several projects in British Columbia and Saskatchewan, we have established a track record of success.
        </p>
        <p style={styles.text}>
          Our client base spans across multiple sectors including healthcare and treatment centers, residential complexes, 
          commercial businesses, retail outlets, and industrial sites. At the heart of our practice is the belief that 
          integrating cutting-edge materials and technologies with established engineering principles is crucial for 
          developing sustainable and cost-effective solutions tailored for today's built environment.
        </p>
      </section>

      {/* Our Journey Section */}
      <section style={styles.journeySection}>
        <div style={styles.journeyContent}>
          <h2 style={styles.subTitle}>Our Journey</h2>
          <p style={styles.text}>
            We've been around for quite a while and have been continuously delivering quality service since [insert year]. 
            Our journey began with a small team of dedicated engineers, and today we are proud to be a leader in electrical 
            consultancy across Western Canada, providing bespoke engineering and design results of the highest level.
          </p>
        </div>       
      </section>
    </div>
  );
}

const styles = {
  pageContainer: {
    fontFamily: "'Arial, sans-serif",
    color: '#333',
    backgroundColor: '#d4d1bb',
    padding: '20px',
  },
  section: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  journeySection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d4d1bb',
    padding: '40px 20px',
    marginTop: '40px',
  },
  journeyContent: {
    flex: 1,
    maxWidth: '500px',
    marginRight: '20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  subTitle: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.8',
    marginBottom: '15px',
  },
  imageContainer: {
    flex: 1,
    maxWidth: '400px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default AboutUs;
