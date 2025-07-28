import React, { useState } from "react";
import "./NavBar.css";

const navLinks = [
  { name: "Home", url: "#home" },
  { name: "Products", url: "#products" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" }
];

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent nav link clicks from opening links when menu is open
  const handleNavClick = (name, e) => {
    if (menuOpen) {
      e.preventDefault();
      return;
    }
    setActive(name);
  };

  return (
    <nav className="tm-navbar">
      <div className="tm-navbar-inner">
        {/* Logo and Brand */}
        <div className="tm-navbar-logo">
          <img src="/BGG.png" alt="Tool Mart Logo" className="tm-logo-img" />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="tm-navbar-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={menuOpen ? "tm-bar tm-bar1 open" : "tm-bar tm-bar1"}></span>
          <span className={menuOpen ? "tm-bar tm-bar2 open" : "tm-bar tm-bar2"}></span>
          <span className={menuOpen ? "tm-bar tm-bar3 open" : "tm-bar tm-bar3"}></span>
        </button>
        {/* Nav Links and Auth Buttons */}
        <div className={`tm-navbar-center${menuOpen ? " open" : ""}`}>
          <ul className="tm-navbar-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className={active === link.name ? "active" : ""}
                  onClick={e => handleNavClick(link.name, e)}
                  tabIndex={menuOpen ? -1 : 0} // Not focusable when menu is open
                  aria-disabled={menuOpen}
                >
                  {link.name}
                  {active === link.name && <span className="tm-link-underline"></span>}
                </a>
              </li>
            ))}
          </ul>
          <div className="tm-navbar-auth">
            <button className="tm-signin-btn" tabIndex={menuOpen ? -1 : 0} disabled={menuOpen}>Sign In</button>
            <button className="tm-signup-btn" tabIndex={menuOpen ? -1 : 0} disabled={menuOpen}>Sign Up</button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="tm-mobile-overlay">
          <div className="tm-mobile-header">
            <div className="tm-navbar-logo">
              <img src="/BGG.png" alt="Tool Mart Logo" className="tm-logo-img" />
              {/* Optional: <span className="tm-brand-text">Tool Mart</span> */}
            </div>
            <button
              className="tm-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <ul className="tm-mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className={active === link.name ? "active" : ""}
                  onClick={e => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                  {active === link.name && <span className="tm-link-underline"></span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}