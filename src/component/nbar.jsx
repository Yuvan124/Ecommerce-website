import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BsInfoCircleFill, BsPlusSquare } from 'react-icons/bs';
import { BiSolidLogIn, BiSolidLogOut } from 'react-icons/bi';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/cartSlice';
import { clearFromcart } from '../redux/cartSlice';
import { MdSell } from 'react-icons/md';
import ContactForm from './contact';
import './nbar.css';
import logo from '../image/logo.png';

function Navbar() {
  const isAuthenticated = useSelector((state) => state.cart.isAuthenticated);
  const user = useSelector((state) => state.cart.user);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(clearFromcart());
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to="/" className="navbar-brand" style={{ marginRight: '0px', color: 'white', fontSize: '25px' }}>
        <img src={logo} alt="Logo" style={{ width: '59px', marginRight: '10px' }} />
      </Link>
      <div className="justify-content-end" style={{ marginRight: '30px', backgroundColor: 'none' }}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/l" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/order" className="nav-link">
              Orders
            </Link>
          </li>
          
          {isAuthenticated ? (
            <li className="nav-item">
              <div onClick={toggleDropdown} className="d-inline">
                <div className="position-relative">
                  <AiOutlineUser style={{ fontSize: '24px', cursor: 'pointer' }}  className="sy"/>
                  {showDropdown && (
                    <Dropdown.Menu show={showDropdown} className="user-dropdown">
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                      <Dropdown.Item href="/details">Details</Dropdown.Item>
                      {user.role === "admin" ? (
                      <Dropdown.Item href="/oo">Sell</Dropdown.Item>):null}
                      <Dropdown.Item href="/order">Your order</Dropdown.Item>
                    </Dropdown.Menu>
                  )}
                </div>
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/log" className="nav-link">
                <BiSolidLogIn style={{ fontSize: '24px' }} />&nbsp;Login
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/o" className="nav-link">
              <RiShoppingCart2Fill style={{ fontSize: '24px' }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
