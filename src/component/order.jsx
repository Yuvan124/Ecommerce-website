import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './order.css';

const Ord = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.cart.user);

  const removeProduct = (productId) => {
    const confirmed = window.confirm('Are you sure you want to delete the item from the sales?');

    if (confirmed) {
      // Perform the delete action here, outside of the useEffect
      axios
        .delete(`http://localhost:3000/b/product/de/${productId}`)
        .then((response) => {
          toast.success(response.data.message); // Assuming your backend sends a message
          // Update the products state to reflect the changes
          setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          toast.error("Error deleting product.");
        });
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      axios
        .get(`http://localhost:3000/b/product/bu/${user.uid}`)
        .then((response) => setProducts(response.data))
        .catch((error) => {
          console.error("Error fetching user data:", error);
          toast.error("Error fetching products.");
        });
    }
  }, [user]); // Ensure useEffect runs when user changes

  return (
    <div className="cart-container">
      <h2>Products</h2>
      <div className="cart-items">
        {products.map((product) => (
          <div className="cart-item" key={product._id}>
            <div className="cart-product">
              <img src={`https://recommerece.s3.ap-south-1.amazonaws.com/${product.image}`} alt="product" />
              <div>
                <h3>{product.model}</h3>
                <p>{product.desc}</p>
              </div>
            </div>
            <div className="cart-product-price">{product.price}</div>
            
            <div className="cart-product-total-price">₹{product.price}</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="continue-shopping">
          <Link to="/">
            <span>
              <AiOutlineArrowLeft /> Continue Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ord;
