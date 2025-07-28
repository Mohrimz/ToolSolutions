import React from "react";
import "./BodySection.css";

export default function BodySection() {
  return (
    <section className="hero-section">
      <div className="hero-box">
        <div className="hero-content">
          <h1>
            Where Future <span className="highlight">Tool</span> Experts Begin Their Journey
          </h1>
          <p className="hero-sub">
            Can you become a pro with just one industry-grade hand tool kit? Why not find out!
          </p>
          <button className="hero-cta">Explore Hand Tools</button>
        </div>
        <div className="hero-image-block">
          <div className="hero-image-card">
            {/* You can add a main image here if needed */}
            <div className="hero-avatars">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" />
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}