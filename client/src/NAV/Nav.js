import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="topbar-links-row">
      <span className="welcome-message">
        Welcome to Sri Lanka's Largest Hand Tool Store
      </span>
      <div className="topbar-links">
        <a href="#" className="top-link">
          <i className="fas fa-map-marker-alt"></i> Store Locator
        </a>
        <span className="topbar-sep">|</span>
        <a href="#" className="top-link">
          <i className="fas fa-truck"></i> Track Your Order
        </a>
        <span className="topbar-sep">|</span>
        <a href="#" className="top-link">
          <i className="fas fa-shopping-bag"></i> Shop
        </a>
        <span className="topbar-sep">|</span>
        <a href="#" className="top-link">
          <i className="fas fa-user"></i> My Account
        </a>
      </div>
    </div>
  );
};

export default Nav;