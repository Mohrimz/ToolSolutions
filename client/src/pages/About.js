import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tagline">Our Story</span>
          <h1 className="about-title">About Tool Solutions</h1>
          <div className="title-divider"></div>
        </div>

        <p className="about-intro">
          At Tool Solutions, we are committed to providing the highest quality hand tools to empower professionals and DIY enthusiasts alike. With years of industry experience, we combine innovation and reliability to deliver products you can trust.
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="mission-vision">
              <div className="mission-card">
                <div className="icon-box">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h2>Our Mission</h2>
                <p>
                  Our mission is to be Sri Lanka's largest and most trusted hand tool supplier by consistently delivering exceptional value, superior customer service, and cutting-edge tools that meet diverse needs.
                </p>
              </div>

              <div className="vision-card">
                <div className="icon-box">
                  <i className="fas fa-eye"></i>
                </div>
                <h2>Our Vision</h2>
                <p>
                  We envision a world where every craftsman, mechanic, and hobbyist has access to the best tools to turn their ideas into reality — effortlessly and efficiently.
                </p>
              </div>
            </div>

            <div className="values-list">
              <h3>Our Core Values</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Quality craftsmanship
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Customer satisfaction
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Innovation in design
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Sustainable practices
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Team collaboration
                </li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <img
            //load image from assets folder
              src={require("../assets/TOOL.jpg")}
              alt="Professional using tools"
              className="main-image"
              loading="lazy"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;