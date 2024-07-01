import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mp.css';
import { AiFillStar } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Spa = () => {
  const u = useSelector((state) => state.cart.user);
  const location = useLocation();

  useEffect(() => {
    console.log("ji", location);
  }, []);

  const { data } = location.state || {};

  const displayRazorpay = async (us) => {
    console.log("clicked")
    
  };

  const handleAddToCartClick = () => {
    
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" id="main">
          <div className="col-md-4" id="ff1">
            <img
              src={`https://recommerece.s3.ap-south-1.amazonaws.com/${data.image}`}
              alt="Yphone"
              id='ff2'
            />
          </div>
          <div className="col-md-5" id='ff'>
            <div id="fff1">
              <h4>{data.model}</h4>
              <h6>{data.desc}</h6>
              <div className="rating">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStar />
              </div>
              <div className="product-details">
                <p>Duration: {data.duration}Years </p>
                <p>Price: ₹{data.price}</p>
              </div>
              <div className="button-group">
                <button className="btn btn-primary" onClick={() => displayRazorpay(data)}>Buy now</button>
                <button className="btn btn-secondary" onClick={() => handleAddToCartClick()}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spa;
