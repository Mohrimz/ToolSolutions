import React from "react";
import "./section.css";

export default function Section() {
  return (
    <section className="section-container">
      <div className="text-content">
        <h1 className="headline">QUALITY HAND TOOLS FOR ALL</h1>
        <div className="logo-circle" aria-label="Brand logo ELORA">
          <span className="logo-text">ELORA</span>
        </div>
        <p className="subtext">
          Get ready to be equipped with all the high-quality hand tools you
          will ever need in this one stop platform.
        </p>
        <div className="button-group">
          <button className="btn learn-btn" aria-label="Learn more about our tools">LEARN MORE</button>
          <button className="btn shop-btn" aria-label="Shop now for tools">SHOP NOW</button>
        </div>
      </div>

      <div className="image-content">
        <div className="small-circles" aria-label="Featured tool images">
          <img
            src="/path/to/your/image1.png"
            alt="Small tool 1"
            className="small-circle-img"
          />
          <img
            src="/path/to/your/image2.png"
            alt="Small tool 2"
            className="small-circle-img"
          />
          <img
            src="/path/to/your/image3.png"
            alt="Small tool 3"
            className="small-circle-img"
          />
          <img
            src="/path/to/your/image4.png"
            alt="Small tool 4"
            className="small-circle-img"
          />
        </div>
        <img
          src="/path/to/your/main-tool-cart.png"
          alt="Tool Cart"
          className="main-image"
        />
        <div className="large-circle" aria-label="Highlighted tool">
          <img
            src="/path/to/your/large-circle-tool.png"
            alt="Large tool"
            className="large-circle-img"
          />
        </div>
      </div>
    </section>
  );
}
