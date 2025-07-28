import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-area">
          <img src="/LGM.png" alt="Logo" className="site-logo" />
          <span className="brand-name">TOOL MART</span>
        </div>
        <form className="search-bar">
          <input type="text" placeholder="I am shopping for..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}