import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleHamburgerClick = () => setNavOpen((open) => !open);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-area">
          <img src="/LGM.png" alt="Logo" className="site-logo" />
          <span className="brand-name">TOOL SOLUTIONS</span>
        </div>
        {/* Hamburger only for mobile */}
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
      {/* Desktop/Laptop Nav */}
      <nav className="main-nav desktop-nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      <nav className={`main-nav mobile-nav${navOpen ? " show" : ""}`}>
        <ul>
          <li><a href="#" onClick={handleNavLinkClick}>HOME</a></li>
          <li><a href="#" onClick={handleNavLinkClick}>PRODUCTS</a></li>
          <li><a href="#" onClick={handleNavLinkClick}>ABOUT</a></li>
          <li><a href="#" onClick={handleNavLinkClick}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}