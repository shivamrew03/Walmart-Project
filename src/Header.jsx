import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className="header">
      <div className="mobile-menu">
      <FontAwesomeIcon icon={faBars} />
        <button className="mobile-menu-button"><i className="fas fa-bars"></i></button>
        <div className="dropdown-menu">
          <a href="#">Electronics</a>
          <a href="#">Clothing</a>
          <a href="#">Groceries</a>
          <a href="#">Store Locator</a>
          <a href="#">Track Orders</a>
          <a href="#">Customer Service</a>
        </div>
      </div>
      <div className="logo">
        <img src="./src/assets/walmart-logo.png" alt="Walmart Logo" className="logo-image" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search products..." />
        
        <button className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <button className="mobile-cart-button"></button>
      <FontAwesomeIcon icon={faCartShopping} />
      <a href='./src/camera.html'><img src="./src/assets/barcode.png" alt=""  className="scanner-logo" /></a>
    </div>
  );
};

export default Header;
