import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

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

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [navOpen]);

  const handleHamburgerClick = () => setNavOpen((open) => !open);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <header className="main-header">
      <Nav />
      <div className="header-top">
        <div className="logo-area">
          <img src="/LGM.png" alt="Logo" className="site-logo" />
          <span className="brand-name">TOOL SOLUTIONS</span>
        </div>
        <div className="search-hamburger-row">
          <form className="search-bar">
            <input type="text" placeholder="I am shopping for..." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <button
            className={`hamburger${navOpen ? " open" : ""}`}
            onClick={handleHamburgerClick}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="main-nav desktop-nav">
        <ul>
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleNavLinkClick}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavLinkClick}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavLinkClick}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className={`main-nav mobile-nav${navOpen ? " show" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleNavLinkClick}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavLinkClick}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavLinkClick}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
