import React from "react";
import { Particles } from "./ui/particles"; // Adjust path as needed
import "./ImageSlider.css";

const images = [
  "/uploads/slider/1.png",
  "/uploads/slider/2.png",
  "/uploads/slider/3.png",
  "/uploads/slider/4.png",
  "/uploads/slider/5.png",
  "/uploads/slider/6.png",
  "/uploads/slider/7.png",
  "/uploads/slider/8.png",
];

const duplicatedImages = [...images, ...images];

export default function ImageSlider() {
  return (
    <div className="slider-root" style={{ position: "relative", width: "1200px", height: "300px", margin: "2rem auto", overflow: "hidden", borderRadius: "1.5rem" }}>
      {/* Particles background, sized to the slider */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles
          className="w-full h-full"
          color="#000000"
          quantity={1000}
          
        />
      </div>
      {/* The rest of your slider code */}
      <div className="slider-outer" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        <div className="slider-scroll-container">
          <div className="slider-infinite-scroll">
            {duplicatedImages.map((image, index) => (
              <div className="slider-image-item" key={index}>
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="slider-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}