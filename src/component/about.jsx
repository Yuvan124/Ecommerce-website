import React from 'react';
import './about.css'; // Import CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Shop Image"
          className="shop-image"
        />
      </div>
      <div className="text-container">
        <h2>About Senthilraj & Co</h2>
        <p>Senthilraj & Co is your one-stop shop for electricals and hardware needs. With a wide range of products ranging from electrical components to hardware tools, we strive to provide high-quality products and exceptional service to our customers.</p>
        <p>Our team of experts is dedicated to helping you find the right products for your projects, whether you are a DIY enthusiast or a professional contractor. We are committed to customer satisfaction and aim to exceed your expectations with every purchase.</p>
        <p>Visit us today and experience the convenience of shopping for all your electrical and hardware needs under one roof.</p>
      </div>
    </div>
  );
};

export default AboutPage;
