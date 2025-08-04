import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <>
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>
            Welcome to <span>Tool Solutions</span>
          </h1>
          <div className="welcome-underline" />
          <p className="welcome-paragraph">
            Tool Solutions is a leading wholesale supplier of high-quality hand tools in Sri Lanka, trusted by workshops, construction crews, and industrial buyers. We specialize in delivering durable, precision-made tools that meet the demands of professionals across the country.
          </p>
        </div>
        <div className="welcome-image">
          <img
            src={require("../assets/TOOL.jpg")}
            alt="Welcome to Tool Solutions"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <h2>Why Choose Tool Solutions?</h2>
        <div className="why-us-grid">
          <div className="why-us-card">
            <h3>Durable Tools</h3>
            <p>Our tools are built to last, designed to withstand even the toughest work environments.</p>
          </div>
          <div className="why-us-card">
            <h3>Nationwide Delivery</h3>
            <p>We offer fast and reliable delivery services across Sri Lanka to ensure you get what you need—on time.</p>
          </div>
          <div className="why-us-card">
            <h3>Trusted by Pros</h3>
            <p>Thousands of professionals rely on Tool Solutions for consistent quality and support.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-box">Wholesale Prices</div>
          <div className="feature-box">Premium Quality</div>
          <div className="feature-box">Large Inventory</div>
          <div className="feature-box">Expert Support</div>
          <div className="feature-box">Easy Returns</div>
          <div className="feature-box">Online Ordering</div>
        </div>
      </section>
    </>
  );
}
