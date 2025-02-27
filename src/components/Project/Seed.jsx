import React from 'react';
import homeImage from '../../assets/seed.png'; // Import the background image properly

function About() {
  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <img
          src={homeImage} // Use the imported background image
          alt="Background"
          className="w-full h-full object-cover"
          style={{ width: '1800px', height: '600px', top: '100px' }} // Set specific size and position
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-left">
  {/* Left-Aligned Text */}
  <div className="absolute left-8 mt-[400px] mb-[400px] text-white"> {/* Added mt-[100px] for top margin */}
    <h1 className="text-5xl font-extrabold mb-4">
      Seed Bank
    </h1>
  </div>
</div>

    </section>
  );
}

export default About;
