import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { BsInfoCircleFill } from 'react-icons/bs';
import './card.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // State for selected category
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/p/product/ga")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  useEffect(() => {
    let filtered = products.filter(product =>
      product.model.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'light') {
        filtered = filtered.filter(product =>
          product.model.toLowerCase().includes('led')
        );
      } else if (selectedCategory === 'fan') {
        filtered = filtered.filter(product =>
          product.model.toLowerCase().includes('fan')
        );
      } else if (selectedCategory === 'cement') {
        filtered = filtered.filter(product =>
          product.model.toLowerCase().includes('cement')
        );
      } else if (selectedCategory === 'paint') {
        filtered = filtered.filter(product =>
          product.model.toLowerCase().includes('paint')
        );
      } else if (selectedCategory === 'electrical equipment') {
        
        filtered = filtered.filter(product =>
          !product.model.toLowerCase().includes('fan') &&
          !product.model.toLowerCase().includes('led') &&
          !product.model.toLowerCase().includes('cement') &&
          !product.model.toLowerCase().includes('paint')
        );
      } else {
        filtered = filtered.filter(product =>
          product.category === selectedCategory
        );
      }
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  useEffect(() => {
    
    const hasLEDProducts = products.some(product => product.model.toLowerCase().includes('led'));
    const hasFanProducts = products.some(product => product.model.toLowerCase().includes('fan'));
    let updatedCategories = ['all'];
    if (hasLEDProducts) updatedCategories.push('light');
    if (hasFanProducts) updatedCategories.push('fan');
    updatedCategories = [...updatedCategories, 'cement', 'paint', 'electrical equipment'];
    setSelectedCategory('all'); 
  }, [products]);

  const getRandomRating = () => {
    return 4;
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    const truncated = words.slice(0, 6).join(' ');
    return `${truncated}...`;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSearchButtonClick = (product) => {
    setSelectedProduct(product);
  };

  const categories = ['all', 'light', 'fan', 'cement', 'paint', 'electrical equipment'];

  return (
    <div className="product-card">
      <div className='categ'>
      <div className="category-selector">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      </div>
      

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by model name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={() => handleSearchButtonClick(filteredProducts[0])} className="search-button">Search</button>
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h3>{selectedProduct.model}</h3>
          <img
            src={`https://recommerece.s3.ap-south-1.amazonaws.com/${selectedProduct.image}`}
            alt="Selected Product"
          />
        </div>
      )}
      <br></br>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product._id} className="col-md-3">
            <div className="card mb-4 shadow-sm c">
              <div className="card-img-top text-center">
                <img
                  src={`https://recommerece.s3.ap-south-1.amazonaws.com/${product.image}`}
                  alt={product.model}
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
              <div className="card-body" id="hi">
                <h5 className="card-title">
                  {product.model}
                </h5>
                <p className="card-text">
                  <span>Amount:</span> ₹{product.price}
                </p>
                <p className="card-text">
                  <span>Description:</span> {truncateDescription(product.desc)}
                </p>
                <div className="rating-container">
                  <span className="rating">Rating:</span>
                  {[...Array(getRandomRating())].map((_, index) => (
                    <span key={index} className="stars">★</span>
                  ))}
                </div>
                <div className="button-container">
                  <Link to="/login" state={{ data: product }}>
                    <button className="btn btn-primary"><BsInfoCircleFill className="icon" />Details</button>
                  </Link>
                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                    <RiShoppingCart2Fill className="icon" />Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
