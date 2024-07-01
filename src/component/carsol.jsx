import React, { useState, useEffect } from 'react';
import Navbar from './nbar';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carsol.css'; 

const carouselStyle = {
  width: '111%'
};

const im = {
  maxWidth: '100%',
  maxHeight: '80vh',
};



const Carsl = () => {
  return (
    <>
      <Navbar />
      <div className="carousel-container" style={carouselStyle}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1130957259/photo/composition-with-tools-and-industrial-material-with-industrial-ship-background.jpg?s=612x612&w=0&k=20&c=XDZNptsfq3TASTKWGsmnDajREC820JuDQf9IyRanCsg="
                className="d-block w-100"
                alt="..."
                style={im}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Electronics & Hardwares </h5>
                <p>All kind of Electronics & Hardwares available in less price</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://pbs.twimg.com/media/EUnvqz-XkAA0b2u.jpg:large"
                className="d-block w-100"
                alt="..."
                style={im}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Electronics & Hardwares</h5>
                <p>All kind of Electronics & Hardwares available in less price </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shutterstock.com/image-photo/cement-mortar-powder-trowel-put-600nw-558520747.jpg"
                className="d-block w-100"
                alt="..."
                style={im}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cement</h5>
                <p></p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/10/27161905/house-painting-cost.jpg"
                className="d-block w-100"
                alt="..."
                style={im}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Paints</h5>
                <p>Different colors of Paints available for more details contact us.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Dropdown menu */}
      <div className="dropdown-menu" >
        {/* Dropdown items */}
        <a className="dropdown-item" href="/sell">Sell</a>
        <a className="dropdown-item" href="/buy">Buy</a>
      </div>
    </>
  );
};

export default Carsl;
