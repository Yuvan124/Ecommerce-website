import React from 'react';


const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(3, 11, 55)', color: '#fff', padding: '50px 0', textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Explore</h4>
            <p style={{color: 'white'}}>Discover the latest innovations in electricals and hardware. From smart home solutions to reliable tools, we've got everything to power up your projects!</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Connect With Us</h4>
            <div style={{ marginTop: '20px' }}>
              <a href="#"><i className="fab fa-facebook-f" style={{ backgroundColor: '#fff', color: 'rgb(3, 11, 55)', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-block', fontSize: '20px', textAlign: 'center', lineHeight: '40px', margin: '0 10px', transition: 'background-color 0.3s ease' }}></i></a>
              <a href="#"><i className="fab fa-instagram" style={{ backgroundColor: '#fff', color: 'rgb(3, 11, 55)', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-block', fontSize: '20px', textAlign: 'center', lineHeight: '40px', margin: '0 10px', transition: 'background-color 0.3s ease' }}></i></a>
              <a href="#"><i className="fas fa-phone" style={{ backgroundColor: '#fff', color: 'rgb(3, 11, 55)', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-block', fontSize: '20px', textAlign: 'center', lineHeight: '40px', margin: '0 10px', transition: 'background-color 0.3s ease' }}></i></a>
              <a href="#"><i className="fas fa-envelope" style={{ backgroundColor: '#fff', color: 'rgb(3, 11, 55)', borderRadius: '50%', width: '40px', height: '40px', display: 'inline-block', fontSize: '20px', textAlign: 'center', lineHeight: '40px', margin: '0 10px', transition: 'background-color 0.3s ease' }}></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
