import React from "react";
import { useNavigate } from "react-router-dom";
import "./section.css";
import SectionImageSlider from "./SectionImageSlider";

export default function Section() {
  const navigate = useNavigate();
  const handleLearnMore = () => navigate("/about");
  const handleShopNow = () => navigate("/products");
  return (
    <section className="section-container enhanced-section">
      <div className="text-content enhanced-text">
        <div className="logo-row">
          <h1 className="headline">QUALITY HAND TOOLS FOR ALL</h1>
        </div>
        <p className="subtext">
          Get ready to be equipped with all the high-quality hand tools you will ever need in this one stop platform.
        </p>
        <div className="button-group">
          <button className="btn learn-btn" aria-label="Learn more about our tools" onClick={handleLearnMore}>LEARN MORE</button>
          <button className="btn shop-btn" aria-label="Shop now for tools" onClick={handleShopNow}>SHOP NOW</button>
        </div>
      </div>

      <div className="image-content enhanced-images">
        <SectionImageSlider />
      </div>
    </section>
  );
}
